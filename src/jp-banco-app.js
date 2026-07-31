/* Banco de Atividades e Ferramentas Educacionais — Juventude Privada
   App de filtro. Sem dependências. Monta em #jp-banco.
   Carregar depois de 00-taxonomia.js e dos arquivos de dados. */
(function () {
  'use strict';

  var T, ATIV, raiz;

  /* ---------------------------------------------------------------- util */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function arr(v) { return Array.isArray(v) ? v : (v == null ? [] : [v]); }
  function achar(id) { for (var i = 0; i < ATIV.length; i++) if (ATIV[i].id === id) return ATIV[i]; return null; }

  /* Duração mínima viável: uma atividade de 50 min com versão curta honesta de 30
     precisa aparecer para quem tem 30 min, senão o filtro mente por omissão. */
  function duracaoMin(a) { return a.duracaoCurta || a.duracao; }

  function duracaoTexto(a) {
    if (a.duracaoTexto) return a.duracaoTexto + (a.duracaoCurta ? ', ou ' + a.duracaoCurta + ' min na versão curta' : '');
    var base = a.duracao >= 999 ? 'Projeto' : a.duracao + ' min';
    return base + (a.duracaoCurta ? ', ou ' + a.duracaoCurta + ' min na versão curta' : '');
  }

  function duracaoCurtaTexto(a) {
    if (a.duracaoCurta) return a.duracaoCurta + ' ou ' + (a.duracao >= 999 ? 'projeto' : a.duracao + ' min');
    return a.duracao >= 999 ? 'Projeto' : a.duracao + ' min';
  }

  /* ------------------------------------------------------------- validação
     Falha alto e cedo: uma ficha com chave fora da taxonomia é erro de dados,
     e é melhor descobrir no console do que descobrir com a professora em sala. */
  function validarDados() {
    var erros = [];
    var chaves = {
      faixa: T.faixa, formato: T.formato, preparo: T.preparo,
      grupo: T.grupo, sensibilidade: T.sensibilidade, eixo: T.eixos, tela: T.tela
    };
    var vistos = {};
    ATIV.forEach(function (a) {
      var onde = 'ficha "' + (a.id || '(sem id)') + '"';
      if (!a.id) erros.push(onde + ': sem id');
      if (vistos[a.id]) erros.push(onde + ': id duplicado');
      vistos[a.id] = 1;

      Object.keys(chaves).forEach(function (k) {
        if (a[k] != null && !chaves[k][a[k]]) erros.push(onde + ': ' + k + ' "' + a[k] + '" fora da taxonomia');
      });
      arr(a.situacao).forEach(function (s) { if (!T.situacao[s]) erros.push(onde + ': situacao "' + s + '" fora da taxonomia'); });
      arr(a.contexto).forEach(function (c) { if (!T.contexto[c]) erros.push(onde + ': contexto "' + c + '" fora da taxonomia'); });
      arr(a.selos).forEach(function (s) { if (!T.selos[s]) erros.push(onde + ': selo "' + s + '" fora da taxonomia'); });
      arr(a.disciplinas).forEach(function (d) { if (T.disciplina.indexOf(d) < 0) erros.push(onde + ': disciplina "' + d + '" fora da taxonomia'); });
      if (a.eixo && a.nivel && (a.nivel < 1 || a.nivel > T.eixos[a.eixo].niveis.length)) {
        erros.push(onde + ': nivel ' + a.nivel + ' fora da faixa do eixo ' + a.eixo);
      }
      ['provocacao', 'missao', 'virada', 'insight', 'insightCurto', 'transferencia', 'protecao', 'evidencia'].forEach(function (c) {
        if (!a[c]) erros.push(onde + ': falta a seção obrigatória "' + c + '"');
      });
    });
    if (erros.length) console.warn('[Banco JP] ' + erros.length + ' problema(s) nos dados:\n' + erros.join('\n'));
    return erros;
  }

  /* ---------------------------------------------------------------- estado */
  var E = {
    perfil: null, ficha: null, colecao: null, nivel: null, busca: '', ordem: 'faixa',
    faixa: [], situacao: [], contexto: [], tela: [], formato: [],
    disciplina: [], preparo: [], grupo: [], eixo: [], selos: [],
    duracao: null, filtrosAbertos: false, versao: 'escola'
  };
  var MULTI = ['faixa', 'situacao', 'contexto', 'tela', 'formato', 'disciplina', 'preparo', 'grupo', 'eixo', 'selos'];

  function alternar(campo, valor) {
    var i = E[campo].indexOf(valor);
    if (i < 0) E[campo].push(valor); else E[campo].splice(i, 1);
  }

  /* ------------------------------------------------------------------ hash */
  function lerHash() {
    var h = (location.hash || '').replace(/^#\/?/, '');
    if (!h) return;
    var partes = h.split('&');
    partes.forEach(function (p) {
      var i = p.indexOf('='); if (i < 0) return;
      var k = decodeURIComponent(p.slice(0, i)), v = decodeURIComponent(p.slice(i + 1));
      if (!v) return;
      if (k === 'ficha') E.ficha = v;
      else if (k === 'perfil') E.perfil = v;
      else if (k === 'colecao') E.colecao = v;
      else if (k === 'nivel') E.nivel = parseInt(v, 10);
      else if (k === 'busca') E.busca = v;
      else if (k === 'ordem') E.ordem = v;
      else if (k === 'duracao') E.duracao = parseInt(v, 10);
      else if (MULTI.indexOf(k) >= 0) E[k] = v.split(',').filter(Boolean);
    });
  }

  var escrevendoHash = false;
  function escreverHash() {
    var p = [];
    if (E.ficha) p.push('ficha=' + encodeURIComponent(E.ficha));
    if (E.perfil) p.push('perfil=' + E.perfil);
    if (E.colecao) p.push('colecao=' + E.colecao);
    if (E.nivel) p.push('nivel=' + E.nivel);
    if (E.busca) p.push('busca=' + encodeURIComponent(E.busca));
    if (E.ordem && E.ordem !== 'faixa') p.push('ordem=' + E.ordem);
    if (E.duracao) p.push('duracao=' + E.duracao);
    MULTI.forEach(function (k) { if (E[k].length) p.push(k + '=' + E[k].map(encodeURIComponent).join(',')); });
    var novo = '#/' + p.join('&');
    if (novo !== location.hash) {
      escrevendoHash = true;
      history.replaceState(null, '', location.pathname + location.search + novo);
      escrevendoHash = false;
    }
  }

  /* --------------------------------------------------------------- filtrar */
  function colecaoPorId(id) {
    for (var i = 0; i < T.colecoes.length; i++) if (T.colecoes[i].id === id) return T.colecoes[i];
    return null;
  }
  function contarColecao(c) { return ATIV.filter(c.filtro).length; }

  /* Normaliza para busca: sem acento, minúsculo. Professora que digita
     "algoritmo" precisa achar "algorítmico", e quem digita "IA" precisa achar. */
  function norm(s) {
    s = String(s == null ? '' : s).toLowerCase();
    return s.normalize ? s.normalize('NFD').replace(/[̀-ͯ]/g, '') : s;
  }

  function textoBuscavel(a) {
    if (a._busca) return a._busca;
    var partes = [a.titulo, a.chamada, a.insightCurto, a.insight, a.formatoDetalhe,
                  T.faixa[a.faixa].rotulo, T.faixa[a.faixa].escolar]
      .concat(arr(a.disciplinas))
      .concat(arr(a.situacao).map(function (s) { return T.situacao[s]; }))
      .concat(arr(a.selos).map(function (s) { return T.selos[s].rotulo; }))
      .concat([T.eixos[a.eixo].rotulo, T.formato[a.formato]]);
    if (a.bncc) {
      ['principal', 'secundaria', 'ponte'].forEach(function (k) {
        if (a.bncc[k] && a.bncc[k].codigo) partes.push(a.bncc[k].codigo);
      });
    }
    a._busca = norm(partes.join(' '));
    return a._busca;
  }

  /* Um predicado por campo. Isolar assim permite contar quantos resultados
     cada opção daria SE fosse marcada, ignorando o próprio campo. */
  var PREDICADOS = {
    colecao:    function (a) { var c = E.colecao ? colecaoPorId(E.colecao) : null; return !c || c.filtro(a); },
    perfil:     function (a) {
      if (E.perfil === 'educador') return arr(a.contexto).indexOf('escola') >= 0;
      if (E.perfil === 'responsavel') return arr(a.contexto).indexOf('casa') >= 0;
      if (E.perfil === 'estudante') return !!(a.versoes && a.versoes.jovem);
      return true;
    },
    busca:      function (a) { return !E.busca || textoBuscavel(a).indexOf(norm(E.busca)) >= 0; },
    faixa:      function (a) { return !E.faixa.length || E.faixa.indexOf(a.faixa) >= 0; },
    duracao:    function (a) { return !E.duracao || duracaoMin(a) <= E.duracao; },
    tela:       function (a) { return !E.tela.length || E.tela.indexOf(a.tela) >= 0; },
    formato:    function (a) { return !E.formato.length || E.formato.indexOf(a.formato) >= 0; },
    preparo:    function (a) { return !E.preparo.length || E.preparo.indexOf(a.preparo) >= 0; },
    grupo:      function (a) { return !E.grupo.length || E.grupo.indexOf(a.grupo) >= 0; },
    eixo:       function (a) { return !E.eixo.length || E.eixo.indexOf(a.eixo) >= 0; },
    nivel:      function (a) { return !E.nivel || a.nivel === E.nivel; },
    situacao:   function (a) { return !E.situacao.length || E.situacao.some(function (s) { return arr(a.situacao).indexOf(s) >= 0; }); },
    contexto:   function (a) { return !E.contexto.length || E.contexto.some(function (c) { return arr(a.contexto).indexOf(c) >= 0; }); },
    selos:      function (a) { return !E.selos.length || E.selos.every(function (s) { return arr(a.selos).indexOf(s) >= 0; }); },
    disciplina: function (a) { return !E.disciplina.length || E.disciplina.some(function (d) { return arr(a.disciplinas).indexOf(d) >= 0; }); }
  };

  function ordenar(lista) {
    var lst = lista.slice();
    if (E.ordem === 'duracao') {
      lst.sort(function (x, y) { return duracaoMin(x) - duracaoMin(y) || x.n - y.n; });
    } else if (E.ordem === 'preparo') {
      var peso = { nenhum: 0, baixo: 1, medio: 2, alto: 3 };
      lst.sort(function (x, y) { return peso[x.preparo] - peso[y.preparo] || x.n - y.n; });
    } else {
      lst.sort(function (x, y) {
        var fx = T.faixa[x.faixa].ordem - T.faixa[y.faixa].ordem;
        return fx !== 0 ? fx : x.n - y.n;
      });
    }
    return lst;
  }

  /* excetoCampo permite perguntar "quantos resultados eu teria se marcasse
     esta opção", sem que o próprio campo se auto-exclua. */
  function filtrar(excetoCampo) {
    return ATIV.filter(function (a) {
      for (var k in PREDICADOS) {
        if (k === excetoCampo) continue;
        if (!PREDICADOS[k](a)) return false;
      }
      return true;
    });
  }

  function resultados() { return ordenar(filtrar()); }

  /* Quantos resultados a opção `valor` do campo `campo` produziria. */
  function contarOpcao(campo, valor) {
    var base = filtrar(campo);
    return base.filter(function (a) {
      if (campo === 'faixa')      return a.faixa === valor;
      if (campo === 'tela')       return a.tela === valor;
      if (campo === 'formato')    return a.formato === valor;
      if (campo === 'preparo')    return a.preparo === valor;
      if (campo === 'grupo')      return a.grupo === valor;
      if (campo === 'eixo')       return a.eixo === valor;
      if (campo === 'situacao')   return arr(a.situacao).indexOf(valor) >= 0;
      if (campo === 'contexto')   return arr(a.contexto).indexOf(valor) >= 0;
      if (campo === 'selos')      return arr(a.selos).indexOf(valor) >= 0;
      if (campo === 'disciplina') return arr(a.disciplinas).indexOf(valor) >= 0;
      if (campo === 'duracao')    return duracaoMin(a) <= valor;
      return true;
    }).length;
  }

  /* Qual filtro ativo é o culpado por zerar o resultado. Vira sugestão. */
  function culpado() {
    var campos = ['busca', 'colecao', 'perfil', 'duracao', 'nivel'].concat(MULTI);
    for (var i = 0; i < campos.length; i++) {
      var k = campos[i];
      var vazio = (k === 'duracao' || k === 'nivel' || k === 'colecao' || k === 'perfil' || k === 'busca')
        ? !E[k] : !E[k].length;
      if (vazio) continue;
      if (filtrar(k).length > 0) return k;
    }
    return null;
  }

  function ativos() {
    var n = MULTI.reduce(function (s, k) { return s + E[k].length; }, 0);
    return n + (E.duracao ? 1 : 0) + (E.colecao ? 1 : 0) + (E.nivel ? 1 : 0) + (E.busca ? 1 : 0);
  }

  /* ----------------------------------------------------------- componentes */
  /* Cada opção mostra quantos resultados ela daria. Zero fica desabilitado:
     a pessoa nunca chega a uma tela vazia por caminho que a interface ofereceu. */
  function chip(campo, valor, rotulo) {
    var on = E[campo].indexOf(valor) >= 0;
    var q = contarOpcao(campo, valor);
    var mortoAttr = (!on && q === 0) ? ' disabled data-zero="1"' : '';
    return '<button type="button" class="jp-chip" data-campo="' + esc(campo) + '" data-valor="' + esc(valor) + '"' +
      ' aria-pressed="' + on + '"' + mortoAttr + '>' + esc(rotulo) +
      '<span class="jp-chip-n">' + q + '</span></button>';
  }

  function chips(campo, mapa, ordem) {
    var chaves = ordem || Object.keys(mapa);
    return chaves.map(function (k) {
      var r = mapa[k]; r = (r && r.rotulo) ? r.rotulo : r;
      return chip(campo, k, r);
    }).join('');
  }

  function grupoFiltro(titulo, html, dica) {
    return '<div class="jp-grupo"><div class="jp-grupo-t">' + esc(titulo) +
      (dica ? '<em>' + esc(dica) + '</em>' : '') + '</div><div class="jp-chips">' + html + '</div></div>';
  }

  /* Barra do que está aplicado agora, com × individual em cada item. */
  function barraAtivos() {
    var itens = [];
    function add(rotulo, campo, valor) {
      itens.push('<button type="button" class="jp-ativo" data-remover="' + esc(campo) + '"' +
        (valor != null ? ' data-valor="' + esc(valor) + '"' : '') + '>' +
        esc(rotulo) + '<span aria-hidden="true">&times;</span>' +
        '<span class="jp-sr">remover filtro</span></button>');
    }
    if (E.busca) add('“' + E.busca + '”', 'busca');
    if (E.colecao) { var c = colecaoPorId(E.colecao); if (c) add(c.icone + ' ' + c.rotulo, 'colecao'); }
    if (E.perfil) add(T.perfil[E.perfil].rotulo, 'perfil');
    if (E.duracao) {
      var d = T.duracao.filter(function (x) { return x.valor === E.duracao; })[0];
      add(d ? d.rotulo : E.duracao + ' min', 'duracao');
    }
    if (E.nivel) add('etapa ' + E.nivel, 'nivel');
    var mapas = {
      faixa: T.faixa, situacao: T.situacao, contexto: T.contexto, tela: T.tela,
      formato: T.formato, preparo: T.preparo, grupo: T.grupo, eixo: T.eixos, selos: T.selos
    };
    MULTI.forEach(function (k) {
      E[k].forEach(function (v) {
        var r = k === 'disciplina' ? v : (mapas[k] && mapas[k][v]);
        r = (r && r.rotulo) ? r.rotulo : r;
        add(r || v, k, v);
      });
    });
    if (!itens.length) return '';
    return '<div class="jp-ativos"><span class="jp-ativos-t">Filtrando por</span>' + itens.join('') +
      '<button type="button" class="jp-limpa-mini" data-acao="limpar">limpar tudo</button></div>';
  }

  function selosHTML(a) {
    return arr(a.selos).map(function (s) {
      return '<span class="jp-selo jp-selo-' + esc(s) + '">' + esc(T.selos[s].rotulo) + '</span>';
    }).join('');
  }

  /* ------------------------------------------------------------ frase-cenário */
  function slot(campo, mapa, vazio, ordem) {
    var chaves = ordem || Object.keys(mapa);
    var sel = E[campo].length === 1 ? E[campo][0] : '';
    var o = '<option value="">' + esc(vazio) + '</option>' + chaves.map(function (k) {
      var r = mapa[k]; r = (r && r.rotulo) ? r.rotulo : r;
      return '<option value="' + esc(k) + '"' + (k === sel ? ' selected' : '') + '>' + esc(r) + '</option>';
    }).join('');
    return '<span class="jp-slot"><select data-slot="' + esc(campo) + '" aria-label="' + esc(vazio) + '">' + o + '</select></span>';
  }

  function slotDuracao() {
    var o = '<option value="">qualquer tempo</option>' + T.duracao.map(function (d) {
      return '<option value="' + d.valor + '"' + (E.duracao === d.valor ? ' selected' : '') + '>' + esc(d.rotulo) + '</option>';
    }).join('');
    return '<span class="jp-slot"><select data-slot="duracao" aria-label="duração">' + o + '</select></span>';
  }

  /* Quatro linhas, cada uma com ícone e rótulo próprio. Lê como conversa,
     não como formulário, e continua sendo um formulário por baixo. */
  function linhaBusca(icone, rotulo, controle) {
    return '<div class="jp-busca-lin">' +
      '<span class="jp-busca-ic" aria-hidden="true">' + icone + '</span>' +
      '<span class="jp-busca-rot">' + esc(rotulo) + '</span>' +
      controle + '</div>';
  }

  function frase() {
    var faixas = Object.keys(T.faixa).filter(function (f) { return f !== 'familia'; });
    var rotFaixa = E.perfil === 'responsavel' ? 'com quem eu vou conversar'
                 : E.perfil === 'estudante'   ? 'a minha idade'
                 : 'a turma é de';
    var rotTema  = E.perfil === 'estudante' ? 'quero investigar' : 'quero trabalhar';
    var listaFaixa = E.perfil === 'responsavel' ? null : faixas;

    return linhaBusca('⏱️', 'tenho', slotDuracao()) +
           linhaBusca('👧', rotFaixa, slot('faixa', T.faixa, 'qualquer idade', listaFaixa)) +
           linhaBusca('💻', 'quero uma atividade', slot('tela', T.tela, 'com ou sem tela')) +
           linhaBusca('🎯', rotTema, slot('situacao', T.situacao, 'qualquer assunto'));
  }

  /* ------------------------------------------------------------ tela busca */
  function telaBusca() {
    var res = resultados(), n = ativos();

    var portas = Object.keys(T.perfil).map(function (k) {
      var p = T.perfil[k];
      var q = ATIV.filter(function (a) {
        if (k === 'educador') return arr(a.contexto).indexOf('escola') >= 0;
        if (k === 'responsavel') return arr(a.contexto).indexOf('casa') >= 0;
        return !!(a.versoes && a.versoes.jovem);
      }).length;
      return '<button type="button" class="jp-porta" data-porta="' + esc(k) + '" aria-pressed="' + (E.perfil === k) + '">' +
        '<span class="jp-porta-ic" aria-hidden="true">' + p.icone + '</span>' +
        '<span class="jp-porta-t">' + esc(p.promessa) + '</span>' +
        '<span class="jp-porta-d">' + esc(p.detalhe) + '</span>' +
        '<span class="jp-porta-n">' + esc(p.rotulo) + ' &middot; ' + q + ' atividades</span></button>';
    }).join('');

    var colecoes = T.colecoes.map(function (c) {
      var q = contarColecao(c);
      if (!q) return '';
      return '<button type="button" class="jp-col" data-colecao="' + esc(c.id) + '" aria-pressed="' + (E.colecao === c.id) + '">' +
        '<span class="jp-col-ic" aria-hidden="true">' + c.icone + '</span>' +
        '<span class="jp-col-t">' + esc(c.rotulo) + '</span>' +
        '<span class="jp-col-r">' + esc(c.resumo) + '</span>' +
        '<span class="jp-col-n">' + q + ' atividade' + (q === 1 ? '' : 's') + '</span></button>';
    }).join('');

    var faixasSemFamilia = Object.keys(T.faixa).filter(function (f) { return f !== 'familia'; });

    var filtros =
      '<div class="jp-filtros">' +
        '<button type="button" class="jp-filtros-cab" data-acao="abrir-filtros" aria-expanded="' + E.filtrosAbertos + '">' +
          '<span>Filtros detalhados' + (n ? ' &middot; ' + n + ' ativo' + (n > 1 ? 's' : '') : '') + '</span>' +
          '<span aria-hidden="true">' + (E.filtrosAbertos ? '&minus;' : '+') + '</span>' +
        '</button>' +
        (E.filtrosAbertos ?
        '<div class="jp-filtros-corpo">' +
          '<p class="jp-filtros-dica">O número em cada opção é quantas atividades ela deixa. ' +
          'Opções apagadas ficariam sem resultado com o que já está marcado.</p>' +
          grupoFiltro('Faixa etária e ano escolar', chips('faixa', T.faixa)) +
          grupoFiltro('Situação real', chips('situacao', T.situacao), 'o que trouxe você aqui') +
          grupoFiltro('Onde vai ser usada', chips('contexto', T.contexto)) +
          grupoFiltro('Tela', chips('tela', T.tela)) +
          grupoFiltro('Formato', chips('formato', T.formato)) +
          grupoFiltro('Duração', T.duracao.map(function (d) {
            var on = E.duracao === d.valor, q = contarOpcao('duracao', d.valor);
            return '<button type="button" class="jp-chip" data-campo="duracao" data-valor="' + d.valor + '"' +
              ' aria-pressed="' + on + '"' + ((!on && q === 0) ? ' disabled data-zero="1"' : '') + '>' +
              esc(d.rotulo) + '<span class="jp-chip-n">' + q + '</span></button>';
          }).join(''), 'inclui a versão curta') +
          grupoFiltro('Disciplina', T.disciplina.map(function (d) {
            return chip('disciplina', d, d);
          }).join('')) +
          grupoFiltro('Preparação necessária', chips('preparo', T.preparo)) +
          grupoFiltro('Tamanho do grupo', chips('grupo', T.grupo)) +
          grupoFiltro('Eixo de aprendizado', chips('eixo', T.eixos)) +
          grupoFiltro('Selos', chips('selos', T.selos), 'combinam entre si') +
        '</div>' : '') +
      '</div>';

    /* O card vende o que a criança vai compreender, não a mecânica do jogo.
       Professor escolhe atividade pelo aprendizado, não pelo formato. */
    var cards = res.length ? res.map(function (a) {
      return '<button type="button" class="jp-card" data-ficha="' + esc(a.id) + '">' +
        '<span class="jp-card-t">' + esc(a.titulo) + '</span>' +
        '<span class="jp-card-meta">' +
          '<span><span aria-hidden="true">📚</span> ' + esc(T.faixa[a.faixa].rotulo) + '</span>' +
          '<span><span aria-hidden="true">⏱️</span> ' + esc(duracaoCurtaTexto(a)) + '</span>' +
          '<span><span aria-hidden="true">🎲</span> ' + esc((a.formatoDetalhe || T.formato[a.formato]).toLowerCase()) + '</span>' +
        '</span>' +
        '<span class="jp-card-insight"><span class="jp-card-lamp" aria-hidden="true">💡</span>' +
          esc(a.insightCurto || a.insight) + '</span>' +
        '<span class="jp-card-pe">' +
          '<span class="jp-selos">' + selosHTML(a) + '</span>' +
          '<span class="jp-bncc-selo" title="Alinhada à BNCC"><span aria-hidden="true">📖</span> BNCC</span>' +
        '</span>' +
      '</button>';
    }).join('') : '';

    /* Estado vazio que resolve em vez de lamentar: aponta o filtro culpado
       e diz quantas atividades voltam se ele sair. */
    var vazio;
    if (res.length) {
      vazio = '';
    } else {
      var culpa = culpado();
      var rotulosCampo = {
        busca: 'a busca por texto', colecao: 'a coleção', perfil: 'a porta de entrada',
        duracao: 'o tempo disponível', nivel: 'a etapa de aprendizado', faixa: 'a faixa etária',
        situacao: 'a situação', contexto: 'o local de uso', tela: 'o filtro de tela',
        formato: 'o formato', disciplina: 'a disciplina', preparo: 'a preparação',
        grupo: 'o tamanho do grupo', eixo: 'o eixo', selos: 'os selos'
      };
      vazio = '<div class="jp-vazio"><strong>Essa combinação não existe no banco ainda.</strong>' +
        (culpa
          ? '<p>Se você soltar <b>' + esc(rotulosCampo[culpa] || culpa) + '</b>, voltam ' +
            filtrar(culpa).length + ' atividades.</p>' +
            '<div class="jp-vazio-acoes">' +
            '<button type="button" class="jp-btn jp-btn-p" data-remover="' + esc(culpa) + '">Soltar ' +
            esc(rotulosCampo[culpa] || culpa) + '</button>' +
            '<button type="button" class="jp-btn jp-btn-o" data-acao="limpar">Recomeçar</button></div>'
          : '<p>Solte um filtro para ver o que existe.</p>' +
            '<div class="jp-vazio-acoes"><button type="button" class="jp-btn jp-btn-p" data-acao="limpar">Recomeçar</button></div>') +
        '<p class="jp-vazio-nota">O banco tem ' + ATIV.length + ' atividades e cresce a cada lote. ' +
        'A seção <b>Como o aprendizado evolui</b>, abaixo, mostra o que ainda está em produção.</p></div>';
    }

    var colecaoAtiva = E.colecao ? colecaoPorId(E.colecao) : null;

    return '<div class="jp-wrap">' +
      '<header class="jp-hero">' +
        '<div class="jp-super">Juventude Privada</div>' +
        '<h1>Banco de Atividades e Ferramentas Educacionais</h1>' +
        '<p class="jp-hero-sub">Atividades prontas para desenvolver pensamento crítico, privacidade, ' +
          'inteligência artificial e uso responsável da tecnologia, da Educação Infantil ao Ensino Médio.</p>' +
        '<p class="jp-hero-frase">Hoje uma criança pode aprender a proteger seus dados brincando.</p>' +
      '</header>' +

      '<div class="jp-portas">' + portas + '</div>' +

      '<div class="jp-cenario">' +
        '<h2>Encontre uma atividade</h2>' +
        '<p class="jp-cenario-sub">Escolha a idade, o tempo disponível e o tema. Nós encontramos uma atividade pronta para aplicar.</p>' +
        '<div class="jp-busca">' + frase() + '</div>' +
        '<div class="jp-cenario-acoes">' +
          '<button type="button" class="jp-btn jp-btn-p" data-acao="rolar">Ver ' + res.length +
            ' atividade' + (res.length === 1 ? '' : 's') + '</button>' +
          (ativos() || E.perfil ? '<button type="button" class="jp-btn jp-btn-s" data-acao="limpar">Recomeçar</button>' : '') +
        '</div>' +
      '</div>' +

      '<section class="jp-secao">' +
        '<h2>Explore por tema</h2>' +
        '<p class="jp-lede">Uma atividade pode aparecer em mais de uma coleção. As contagens são do que já existe hoje.</p>' +
        '<div class="jp-cols">' + colecoes + '</div>' +
      '</section>' +

      '<div class="jp-busca-texto">' +
        '<label class="jp-sr" for="jp-q">Buscar por palavra</label>' +
        '<span class="jp-lupa" aria-hidden="true">🔎</span>' +
        '<input id="jp-q" type="search" class="jp-input" placeholder="Buscar por palavra, tema, disciplina ou código da BNCC" ' +
          'value="' + esc(E.busca) + '" autocomplete="off">' +
        (E.busca ? '<button type="button" class="jp-input-x" data-remover="busca" aria-label="Limpar busca">&times;</button>' : '') +
      '</div>' +

      filtros +

      barraAtivos() +

      '<div class="jp-barra" id="jp-resultados">' +
        '<span class="jp-conta">' +
          (colecaoAtiva ? '<span aria-hidden="true">' + colecaoAtiva.icone + '</span> ' + esc(colecaoAtiva.rotulo) + ': ' : '') +
          res.length + ' atividade' + (res.length === 1 ? '' : 's') +
          '<em> de ' + ATIV.length + ' no banco</em></span>' +
        '<span class="jp-ordenar">' +
          '<label for="jp-ord">Ordenar por</label>' +
          '<select id="jp-ord" data-slot="ordem">' +
            ['faixa|idade', 'duracao|menor tempo primeiro', 'preparo|menos preparo primeiro']
              .map(function (o) {
                var v = o.split('|');
                return '<option value="' + v[0] + '"' + (E.ordem === v[0] ? ' selected' : '') + '>' + v[1] + '</option>';
              }).join('') +
          '</select>' +
        '</span>' +
      '</div>' +

      (res.length ? '<div class="jp-grade">' + cards + '</div>' : vazio) +

      secaoProgressao() +

      '<section class="jp-secao jp-recebe">' +
        '<h2>O que você recebe</h2>' +
        '<p class="jp-lede">Toda atividade, sem exceção, vem completa.</p>' +
        '<ul class="jp-checks">' +
          ['Roteiro passo a passo, minuto a minuto',
           'Materiais prontos para imprimir, com o texto das cartas e o gabarito',
           'Perguntas para conduzir a discussão',
           'O que o adulto NÃO deve dizer dar',
           'Adaptação para casa e versão para o jovem fazer sozinho',
           'Alinhamento a uma habilidade da BNCC',
           'Critério claro de aprendizagem',
           'Versão sem tela, e versão curta para quando o tempo apertar'
          ].map(function (t) { return '<li><span aria-hidden="true">✔</span> ' + esc(t) + '</li>'; }).join('') +
        '</ul>' +
        '<p class="jp-recebe-nota">Nenhuma atividade pede dado real, relato pessoal, senha, imagem ou acesso a contas. ' +
        'Todos os casos e personagens são fictícios, de propósito.</p>' +
      '</section>' +

      '<details class="jp-bncc-caixa">' +
        '<summary><span aria-hidden="true">📖</span> Como funciona o alinhamento à BNCC</summary>' +
        '<div class="jp-bncc-caixa-corpo">' +
          '<p>Cada atividade indica uma habilidade principal e, no máximo, uma secundária. Os códigos citados são da ' +
          '<b>BNCC Computação</b> e foram conferidos no documento oficial do MEC, um a um.</p>' +
          '<p>A BNCC Computação começa no 1º ano do Ensino Fundamental. Por isso as atividades de 4 a 5 anos não recebem ' +
          'código, e são alinhadas aos campos de experiência da Educação Infantil, com um código-ponte indicado para ' +
          'quem aplicar em turma de 1º ano.</p>' +
          '<p>Como segunda camada de qualidade, cada ficha aponta também uma competência do ' +
          '<i>AI Competency Framework for Students</i>, da UNESCO.</p>' +
        '</div>' +
      '</details>' +
    '</div>';
  }

  function secaoProgressao() {
    var M = T.marcosProgressao;

    var linhas = Object.keys(T.eixos).map(function (k) {
      var eixo = T.eixos[k];
      var passos = eixo.niveis.map(function (txt, i) {
        var nivel = i + 1;
        var quantas = ATIV.filter(function (a) { return a.eixo === k && a.nivel === nivel; }).length;
        var vazio = quantas ? '' : ' data-vazio="1" disabled';
        var seta = i < eixo.niveis.length - 1 ? '<span class="jp-seta" aria-hidden="true">↓</span>' : '';
        return '<div class="jp-passo">' +
          '<button type="button" class="jp-passo-b" data-eixo="' + esc(k) + '" data-nivel="' + nivel + '"' + vazio + '>' +
            '<span class="jp-passo-ic" aria-hidden="true">' + M[i].icone + '</span>' +
            '<span class="jp-passo-txt">' + esc(txt) + '</span>' +
            '<span class="jp-passo-n">' + (quantas ? quantas + (quantas === 1 ? ' atividade' : ' atividades') : 'em produção') + '</span>' +
          '</button>' + seta + '</div>';
      }).join('');

      return '<article class="jp-eixo">' +
        '<h3 class="jp-eixo-nome">' + esc(eixo.rotulo) + '</h3>' +
        '<p class="jp-eixo-promessa">' + esc(eixo.promessa) + '</p>' +
        '<div class="jp-passos">' + passos + '</div>' +
      '</article>';
    }).join('');

    var legenda = M.map(function (m) {
      return '<span class="jp-leg"><span aria-hidden="true">' + m.icone + '</span> ' +
        esc(m.rotulo) + '<em>' + esc(m.o_que) + '</em></span>';
    }).join('');

    return '<section class="jp-secao jp-prog">' +
      '<h2>Como o aprendizado evolui</h2>' +
      '<p class="jp-lede">Não adianta repetir "proteja seus dados" em cinco faixas etárias. Cada tema cresce junto ' +
      'com a criança, e a atividade de 15 anos parte de onde a de 5 anos parou.</p>' +
      '<div class="jp-legenda">' + legenda + '</div>' +
      '<div class="jp-eixos">' + linhas + '</div>' +
      '<p class="jp-prog-nota">Clique em qualquer etapa para ver as atividades dela. As etapas marcadas como ' +
      '<b>em produção</b> ainda não têm atividade publicada, e é exatamente assim que a gente decide o próximo lote.</p>' +
    '</section>';
  }

  /* ------------------------------------------------------------- tela ficha */
  function bloco(titulo, corpo, cls) {
    if (!corpo) return '';
    return '<div class="jp-bloco"><div class="jp-bloco-t">' + esc(titulo) + '</div>' +
      (cls ? '<div class="' + cls + '">' + corpo + '</div>' : corpo) + '</div>';
  }

  function bnccHTML(a) {
    var b = a.bncc || {}, out = '';
    function linha(rot, o) {
      if (!o) return '';
      return '<div class="jp-bncc-lin"><span class="jp-bncc-cod">' + esc(o.codigo) + '</span>' +
        '<span style="font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:#6b7280">' + esc(rot) + '</span>' +
        '<div style="margin-top:4px">' + esc(o.texto) + '</div></div>';
    }
    if (b.campo) out += '<div class="jp-bncc-lin"><b style="color:#273975">Educação Infantil.</b> ' + esc(b.campo) + '</div>';
    if (b.nota) out += '<div class="jp-bncc-lin" style="color:#6b7280">' + esc(b.nota) + '</div>';
    /* Cada código sai uma vez só, com o rótulo certo. A ficha de Educação
       Infantil não tem principal: nela a ponte é o alinhamento de referência. */
    out += linha('Habilidade principal', b.principal);
    out += linha(b.principal ? 'Código-ponte para o 1º ano' : 'Código-ponte para turmas de 1º ano', b.ponte);
    out += linha('Habilidade secundária', b.secundaria);
    if (a.unesco) {
      out += '<div class="jp-bncc-lin" style="border-top:1px solid #e3e6ef;padding-top:10px;margin-top:10px">' +
        '<span style="font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:#6b7280">UNESCO, dimensão ' +
        esc(T.unesco[a.unesco.dimensao] || a.unesco.dimensao) + '</span>' +
        '<div style="margin-top:4px">' + esc(a.unesco.competencia) + '</div></div>';
    }
    return '<div class="jp-bncc">' + out + '</div>';
  }

  function versoesHTML(a) {
    var disp = [];
    if (a.versoes) {
      if (a.versoes.escola) disp.push(['escola', 'Na escola', a.versoes.escola]);
      if (a.versoes.familia) disp.push(['familia', 'Em casa', a.versoes.familia]);
      if (a.versoes.jovem) disp.push(['jovem', 'Versão jovem', a.versoes.jovem]);
    }
    if (!disp.length) return '';
    if (!disp.some(function (d) { return d[0] === E.versao; })) E.versao = disp[0][0];

    var abas = disp.map(function (d) {
      return '<button type="button" class="jp-aba" role="tab" data-versao="' + esc(d[0]) + '"' +
        ' aria-selected="' + (E.versao === d[0]) + '">' + esc(d[1]) + '</button>';
    }).join('');
    var atual = disp.filter(function (d) { return d[0] === E.versao; })[0];

    /* na impressão as três versões saem juntas, porque o kit impresso vai para
       a mão de quem não tem a tela na frente */
    var todas = disp.map(function (d) {
      return '<p style="margin-bottom:10px"><b style="color:#273975">' + esc(d[1]) + '.</b> ' + esc(d[2]) + '</p>';
    }).join('');

    if (!a.versoes.jovem && T.faixa[a.faixa] && !T.faixa[a.faixa].autonomia) {
      todas += '<p style="color:#6b7280;font-size:.9rem">Nesta faixa não existe versão autônoma. ' +
        'A criança participa sempre com um adulto.</p>';
    }

    return '<div class="jp-bloco"><div class="jp-bloco-t">Escola, casa e jovem</div>' +
      '<div class="jp-abas" role="tablist">' + abas + '</div>' +
      '<p class="jp-nao-imprime">' + esc(atual[2]) + '</p>' +
      (!a.versoes.jovem && T.faixa[a.faixa] && !T.faixa[a.faixa].autonomia
        ? '<p class="jp-nao-imprime" style="color:#6b7280;font-size:.9rem;margin-top:10px">Nesta faixa não existe ' +
          'versão autônoma. A criança participa sempre com um adulto.</p>' : '') +
      '<div class="jp-versao-print">' + todas + '</div></div>';
  }

  function imprimivelHTML(m, i) {
    var corpo = '';
    if (m.nota) corpo += '<div class="jp-imp-nota">' + esc(m.nota) + '</div>';
    if (m.itens) corpo += '<ol class="jp-imp-itens">' + m.itens.map(function (it) {
      return '<li>' + esc(it) + '</li>';
    }).join('') + '</ol>';
    if (m.corpo) corpo += '<pre>' + esc(m.corpo) + '</pre>';
    return '<div class="jp-imp jp-imp-material">' +
      '<button type="button" class="jp-imp-cab" data-imp="' + i + '" aria-expanded="false">' +
        '<span><b>' + esc(m.titulo) + '</b> <em style="font-style:normal;font-size:.72rem;text-transform:uppercase;' +
        'letter-spacing:.06em;color:#f09900;margin-left:8px">' + esc(m.tipo) + '</em></span>' +
        '<span aria-hidden="true">+</span>' +
      '</button>' +
      '<div class="jp-imp-corpo" hidden>' + corpo + '</div></div>';
  }

  function telaFicha(a) {
    var sens = T.sensibilidade[a.sensibilidade];
    var dados = [
      ['Faixa', T.faixa[a.faixa].rotulo + (T.faixa[a.faixa].escolar ? ', ' + T.faixa[a.faixa].escolar : '')],
      ['Duração', duracaoTexto(a)],
      ['Formato', a.formatoDetalhe || T.formato[a.formato]],
      ['Tela', T.tela[a.tela]],
      ['Grupo', T.grupo[a.grupo]],
      ['Preparação', T.preparo[a.preparo].rotulo + ', ' + T.preparo[a.preparo].detalhe],
      ['Onde usar', arr(a.contexto).map(function (c) { return T.contexto[c]; }).join(', ')],
      ['Tema', arr(a.situacao).map(function (s) { return T.situacao[s]; }).join(', ')],
      ['Eixo', T.eixos[a.eixo].rotulo + ', nível ' + a.nivel + ' de 5'],
      ['Disciplinas', arr(a.disciplinas).length ? arr(a.disciplinas).join(', ') : 'Uso doméstico']
    ].map(function (d) {
      return '<div class="jp-dado"><dt>' + esc(d[0]) + '</dt><dd>' + esc(d[1]) + '</dd></div>';
    }).join('');

    return '<div class="jp-wrap"><div class="jp-ficha">' +
      '<button type="button" class="jp-voltar" data-acao="voltar">&larr; Voltar ao banco</button>' +

      '<div class="jp-ficha-cab">' +
        '<div class="jp-ficha-n">Ficha ' + a.n + ' &middot; ' + esc(T.faixa[a.faixa].rotulo) + '</div>' +
        '<h1>' + esc(a.titulo) + '</h1>' +
        '<p class="jp-lede">' + esc(a.chamada) + '</p>' +
        '<div class="jp-selos" style="margin-top:14px">' + selosHTML(a) + '</div>' +
        '<dl class="jp-ficha-dados">' + dados + '</dl>' +
      '</div>' +

      (sens.aviso ? '<div class="jp-aviso"><b>Sensibilidade ' + esc(sens.rotulo.toLowerCase()) + '.</b> ' + esc(sens.aviso) + '</div>' : '') +

      '<div class="jp-ficha-acoes jp-nao-imprime">' +
        '<button type="button" class="jp-btn jp-btn-p" data-acao="imprimir">Imprimir ficha e kit</button>' +
        '<button type="button" class="jp-btn jp-btn-o" data-acao="copiar">Copiar link desta ficha</button>' +
      '</div>' +

      bloco('Como começar', '<p>' + esc(a.provocacao) + '</p>') +
      bloco('O que eles vão fazer', '<p>' + esc(a.missao) + '</p>') +
      bloco('O momento que muda tudo', '<p>' + esc(a.virada) + '</p>') +
      bloco('O que eles descobrem', esc(a.insight), 'jp-destaque') +
      bloco('Como isso aparece na vida real', '<p>' + esc(a.transferencia) + '</p>') +

      (a.roteiro ? bloco('Roteiro da aula', '<ol class="jp-roteiro">' + a.roteiro.map(function (r) {
        return '<li><b>' + esc(r.t) + '</b><span>' + esc(r.o) + '</span></li>';
      }).join('') + '</ol>') : '') +

      (a.comoEncurtar ? bloco('Se você tem menos tempo',
        '<p>' + esc(a.comoEncurtar) + '</p>', 'jp-destaque') : '') +

      versoesHTML(a) +

      (a.kit ? bloco('O que vem no material', '<ul class="jp-kit">' + a.kit.map(function (k) {
        return '<li><b>' + esc(k.nome) + '</b><em>' + esc(k.tipo) + '</em><div>' + esc(k.desc) + '</div></li>';
      }).join('') + '</ul>') : '') +

      (a.imprimiveis ? bloco('Material pronto para imprimir',
        '<p class="jp-nao-imprime" style="color:#6b7280;font-size:.9rem;margin-bottom:12px">' +
        'Abra para ler, ou use "Imprimir ficha e kit" e todo o material sai junto, cada peça em uma página.</p>' +
        a.imprimiveis.map(imprimivelHTML).join('')) : '') +

      (a.mediacao ? bloco('Como conduzir a conversa',
        '<p style="font-size:.86rem;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Perguntas que abrem a discussão</p>' +
        '<ul class="jp-lista">' + a.mediacao.perguntas.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
        '<p style="font-size:.86rem;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin:16px 0 6px">O que o adulto NÃO deve dizer</p>' +
        '<ul class="jp-lista jp-lista-evitar">' + a.mediacao.evitar.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>') : '') +

      bloco('Cuidados obrigatórios', esc(a.protecao), 'jp-protecao') +
      bloco('BNCC e UNESCO', bnccHTML(a)) +
      bloco('Como saber se funcionou', '<p>' + esc(a.evidencia) + '</p>') +

      '<div class="jp-print-rodape">Juventude Privada &middot; Banco de Atividades e Ferramentas Educacionais &middot; ' +
      'Ficha ' + a.n + ', ' + esc(a.titulo) +
      (window.JP.SITE ? ' &middot; ' + esc(window.JP.SITE) : '') + '</div>' +
    '</div></div>';
  }

  /* -------------------------------------------------------------- renderizar */
  function render(rolarTopo) {
    var a = E.ficha ? achar(E.ficha) : null;
    if (E.ficha && !a) E.ficha = null;
    raiz.innerHTML = a ? telaFicha(a) : telaBusca();
    escreverHash();
    if (rolarTopo) {
      var y = raiz.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y < 0 ? 0 : y, behavior: 'smooth' });
    }
  }

  /* ------------------------------------------------------------------ eventos */
  function ligar() {
    raiz.addEventListener('click', function (ev) {
      var el = ev.target.closest ? ev.target.closest('[data-acao],[data-ficha],[data-porta],[data-campo],[data-versao],[data-imp],[data-eixo],[data-colecao],[data-remover]') : null;
      if (!el || !raiz.contains(el)) return;

      if (el.dataset.remover) {
        var campo = el.dataset.remover;
        if (campo === 'busca') E.busca = '';
        else if (campo === 'duracao') E.duracao = null;
        else if (campo === 'nivel') E.nivel = null;
        else if (campo === 'colecao') E.colecao = null;
        else if (campo === 'perfil') E.perfil = null;
        else if (el.dataset.valor != null) alternar(campo, el.dataset.valor);
        else E[campo] = [];
        return render();
      }

      if (el.dataset.ficha) { E.ficha = el.dataset.ficha; E.versao = 'escola'; return render(true); }
      if (el.dataset.colecao) {
        E.colecao = (E.colecao === el.dataset.colecao) ? null : el.dataset.colecao;
        render();
        var res = document.getElementById('jp-resultados');
        if (res && E.colecao) res.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (el.dataset.porta) {
        E.perfil = (E.perfil === el.dataset.porta) ? null : el.dataset.porta;
        if (E.perfil === 'responsavel') E.versao = 'familia';
        else if (E.perfil === 'estudante') E.versao = 'jovem';
        else E.versao = 'escola';
        return render();
      }
      if (el.dataset.campo) {
        if (el.dataset.campo === 'duracao') {
          var v = parseInt(el.dataset.valor, 10);
          E.duracao = (E.duracao === v) ? null : v;
        } else {
          alternar(el.dataset.campo, el.dataset.valor);
        }
        return render();
      }
      if (el.dataset.versao) { E.versao = el.dataset.versao; return render(); }
      if (el.dataset.eixo) {
        E.eixo = [el.dataset.eixo];
        E.nivel = parseInt(el.dataset.nivel, 10);
        E.faixa = []; E.duracao = null; E.situacao = []; E.colecao = null;
        E.filtrosAbertos = true;
        render();
        var alvo = document.getElementById('jp-resultados');
        if (alvo) alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (el.dataset.imp != null) {
        var corpo = el.nextElementSibling, aberto = el.getAttribute('aria-expanded') === 'true';
        el.setAttribute('aria-expanded', String(!aberto));
        corpo.hidden = aberto;
        el.lastElementChild.innerHTML = aberto ? '+' : '&minus;';
        return;
      }

      switch (el.dataset.acao) {
        case 'abrir-filtros': E.filtrosAbertos = !E.filtrosAbertos; return render();
        case 'limpar':
          MULTI.forEach(function (k) { E[k] = []; });
          E.duracao = null; E.perfil = null; E.colecao = null; E.nivel = null;
          E.busca = ''; E.ordem = 'faixa';
          return render();
        case 'voltar': E.ficha = null; return render(true);
        case 'imprimir': return window.print();
        case 'rolar':
          var r = document.getElementById('jp-resultados');
          if (r) r.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        case 'copiar':
          var url = location.href;
          var fim = function (ok) {
            el.textContent = ok ? 'Link copiado' : 'Copie da barra de endereço';
            setTimeout(function () { el.textContent = 'Copiar link desta ficha'; }, 2200);
          };
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(function () { fim(true); }, function () { fim(false); });
          } else { fim(false); }
          return;
      }
    });

    raiz.addEventListener('change', function (ev) {
      var s = ev.target.closest ? ev.target.closest('[data-slot]') : null;
      if (!s) return;
      var campo = s.dataset.slot, v = s.value;
      if (campo === 'duracao') E.duracao = v ? parseInt(v, 10) : null;
      else if (campo === 'ordem') E.ordem = v || 'faixa';
      else E[campo] = v ? [v] : [];
      render();
    });

    /* Busca por texto. O render recria o DOM, então o foco e o cursor
       precisam ser devolvidos, senão a pessoa digita uma letra e perde o campo. */
    var timerBusca = null;
    raiz.addEventListener('input', function (ev) {
      if (!ev.target || ev.target.id !== 'jp-q') return;
      var valor = ev.target.value;
      clearTimeout(timerBusca);
      timerBusca = setTimeout(function () {
        E.busca = valor;
        render();
        var campo = document.getElementById('jp-q');
        if (campo) {
          campo.focus();
          try { campo.setSelectionRange(valor.length, valor.length); } catch (e) {}
        }
      }, 180);
    });

    window.addEventListener('hashchange', function () {
      if (escrevendoHash) return;
      MULTI.forEach(function (k) { E[k] = []; });
      E.duracao = null; E.perfil = null; E.ficha = null; E.colecao = null; E.nivel = null;
      E.busca = ''; E.ordem = 'faixa';
      lerHash(); render();
    });
  }

  /* -------------------------------------------------------------------- init */
  function iniciar() {
    raiz = document.getElementById('jp-banco');
    if (!raiz) return;
    if (!window.JP || !window.JP.TAXONOMIA || !window.JP.ATIVIDADES) {
      raiz.innerHTML = '<div class="jp-wrap"><div class="jp-vazio"><strong>O banco não carregou.</strong>' +
        'Os arquivos de dados não foram encontrados. Verifique a ordem dos scripts no embed.</div></div>';
      return;
    }
    T = window.JP.TAXONOMIA;
    ATIV = window.JP.ATIVIDADES;
    validarDados();
    lerHash();
    render();
    ligar();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();

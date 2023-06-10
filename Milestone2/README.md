# RECURSOS DO PROJETO

* HTML5
* JavaScript ECMA6+
* SASS
* CSS3
* Bootstrap 5.1
* React JS
* Node.js

# ESTRUTURA E ESTRUTURA SEMÂNTICA DO SITE

* Estrutura HTML: além de estar no conteúdo JSX, está no public.
.
└── public
    └── index.html

* CSS3/SCSS
.
├── scss
│   └── style.scss
└── css
    ├── style.min.css
    └── sytle.min.css.map

* Recursos Diversos
.
├── fonts
│   ├── Peddana-Regular.ttf
│   └── RussoOne-Regular.ttf
└── img
    ├── favicon.ico
    └── fundo.png

* Estrutura do React
.
├── Index.js (Chama routes/RootProvider.js)
└── Layer.js (Header/Conteúdo/Footer)
    ├── Header.js (Itens e Navegação)
    ├── Footer.js (Rodapé do Site)
    └── Conteudo (Main)
        ├── Autenticacao.js (Section)
        ├── Carrinho.js (Section)
        ├── Contato.js (Section)
        ├── Error.js (Section)
        ├── Home.js (Section)
        ├── Produtos.js (Section)
        │   └── Saudacoes.js 
        └── Produtos.js (Section)
            └── Card.js (Articles)

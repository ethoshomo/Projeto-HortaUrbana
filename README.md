
# <img src="Milestone1/img/fotor_2023-4-20_19_44_4.png" style="width: 20px;"> **Projeto-HortaUrbana**

<div align="right">
Carlos Filipe de Castro Lemos (12542630) <br>
João Gabriel Sasseron Roberto Amorim (12542564) <br>
Pedro Guilherme dos Reis Teixeira (12542477)
</div>

## 1. **Requisitos: Pessoas e Papéis**

* O sistema deve possuir 3 tipos de usuários:

    * _**Administrador**_: trata-se de um perfil único que é um super usuário do sistema, afinal é responsável pelo gerenciamento de produtores, clientes e dos produtos do website. O aplicativo já vem com uma conta de administração (usuário: admin@admin.com e senha: 123456 - a qual ainda não foi implementada).

    * _**Clientes**_: são usuários que acessam o website para fazer compras de produtos. É necessário que realizem o cadastro no sistema para comprar produtos dos produtores. 

    * _**Produtores**_: inicialmente se cadastram como consumidores e, após pedirem promoção ao administrador, são responsáveis pelo registro e gereciamento de seus produtos dentro do *e-commerce*.

>_**<center>Observações</center>**_
>* Os registros dos clientes devem incluir: **nome completo**, **id**, **telefone**, **email** e **endereço**. No banco de dados, iremos utilizar o **id** para fazer a diferenciação dos clientes. 
>* Os registros dos produtos devem incluir: **nome**, **foto**, **descrição**, **preço**, **quantidade** (em estoque) e **quantidade vendida**. Da mesma forma que o cliente, o **id** irá ser utilizado no banco de dados para identificação do produto.


## 2. **Requisitos: Descrição do Projeto**

Chamado `_Horta Urbana`, nosso projeto busca agir como uma loja digital com um filosofia similar a sites como a Amazon e iFood, porém com o diferencial de se aplicar ao escopo especializado de uma feira fisíca, como vegetais e verduras. 

De forma resumida, poderíamos descrever o fluxo da experiência em três frentes, cujas funcionalidades mais comuns são:

* A loja irá disponibilizar um espaço comercial, do tipo marketplace, de modo que os produtores de frutas e verduras possam vender seus produtos.

* Os produtores, com a autorização do administrador, terão a possibilidade de fazer o cadastro de seus produtos no sistema e gerenciar dados dos produtos.

* Os clientes, durante a operação de compra, selecionarão os produtos e a quantidade. Ao clicarem no botão comprar, o produto e a sua quantidade serão adicionados a um carrinho de compras. 

* Depois que todos os produtos forem selecionados, o cliente deverá finalizar a compra no carrinho. Nessa finalização da compra, o cliente deverá fornecer um número de cartão de crédito ou débito (qualquer número é aceito pelo sistema). 

>_**<center>Observações</center>**_
> * A quantidade de produto vendido será subtraída da quantidade em estoque e adicionada à quantidade vendida. 
> * Os carrinhos são esvaziados somente após o pagamento ou pela intervenção direta do produtor ou do administrador.

<center><img src="img_mk/diagrama.jpeg" width="500px" border='1'></center>


### 2.1 **Página Home**

Trata-se da primeira página que o usuário vê ao acessar o domínio do site. Essa página traz um layout composto de três partes: 

1) Header: o cabeçalho é constituído da barra de navegação, onde o usuário poderá fazer acesso à home, a lista de produtos ofertados, à autenticação no sistema e ao carrinho e de compras.

2) Outlet: trata-se do espaço destinado ao conteúdo do website.

3) Footer: trata-se do rodapé da página, onde o usuário poderá consultar informações de contato, políticas de funcionamento e outros.

A estrutura apresentada na página home será mantida em todas as demais páginas. Destaque-se que sua principal funcionalidade é receber bem o usuário para que ele possa iniciar uma jornada de compras. 

Nesse contexto, cogitou-se de disponibilizar um login automático no sistema. Porém, haverá necessidade de se estudar a viabilidade de fazer essa funcionalidade. Por enquanto, a página inicial está desenvolvida em HTML e CSS.

<center><img src="img_mk/home_pc.png" width="500px" border='1'></center>

### 2.2 **Página de Cadastro de Clientes**

Apresenta o formulário de cadastro. 

Aproveita-se a oportunidade para esclarecer que todos os usuários do website precisarão realizar o cadastro de clientes. Até mesmo os produtores precisam passar por esta etapa. Essa exigência é imposta para que o sistema de compras será preservado. 

Além disso, convém mencionar que são coletados dados como nome, endereço e telefone para que os produtos comprados possam ser entregues, porém também são coletadas informações de login (email e senha). 

Por fim, é de se esclarecer que a página está desenvolvida provisoriamente em HTML e CSS, bem como que o formulário ainda não está operacional.

<center><img src="img_mk/cadastro_pc.png" width="500px" border='1'></center>

### 2.3 **Página de Login**

A página de login apresenta um formulário simples onde são requisitados o e-mail e senha de um usuário ja cadastrado. Por meio dessa tela, o administrador, os produtores e os clientes podem acessar seus perfis. Ela está desenvolvida em HTML e CSS.

<center><img src="img_mk/login_pc.png" width="500px" border='1'></center>

### 2.4 **Lista de Produtos**
Trata-se da página onde é exibida uma lista de produtos que poderão ser pesquisados e accesados. 

Na imagem abaixo, apresenta-se a página sob a perspectiva do administrador o qual pode deletar e editar quaisquer produtos no site. Caso fosse acessada por um produtor, existiria apenas a possibilidade de alteração e deleção dos próprios produtos. Por fim, caso fosse acessada pelo cliente, este seria capaz apenas de visualizar, acessar e comprar produtos.

<center><img src="img_mk/listaprodutos_pc.png" width="500px" border='1'></center>


### 2.5 **Profile**
Uma pequena página de atalhos que permitem acesso rapido a várias areas do site. Ela é divida em 3 sessões: 

1) a primeira apresenta conteúdos gerais que todos os usuários tem acesso; 

2) a segunda adiciona utilidades para Produtores que permitem o cadastro de um produto e a visualização de todos os seus produtos cadastrados; 

3) a terceira adiciona utilidades únicas para os usuários que possuem um controle geral do site em si.

<center><img src="img_mk/profile_pc.png" width="500px" border='1'></center>

### 2.6 **Carrinho**
Trata-se da página onde podem ser vistos todos os produtos selecionados que o usuário tem intenção de comprar no momento. Ela apresenta a lista dos produtos em questão, seus preços indivíduais, o frete, o preço total, o método de pagamento e o endereço onde tais itens devem ser entregues.

<center><img src="img_mk/carrinho.jpg" width="500px" border='1'></center>

### 2.7 **Gerenciamento de Produto**
Trata-se de uma página de acesso restrito em que o administrador e os usuários podem realizar o cadastro de produtos. Nela é apresentada uma interface para coletar o nome, a descrição, o preço e a quantidade do produto. 

Como mencionado anteriormente (em lista de produtos), existirá a possibilidade de editar o produto nessa tela (como, por exemplo, a quantidade e a descrição do produto).

<center><img src="img_mk/CRUD_pc.png" width="500px" border='1'></center>


### 2.8 **Promoção de Consumidor à Produtor**
Inicialmente não existe uma interface específica para essa funcionalidade. A ideia inicial era de que o cliente que estivesse interessado na promoção devesse entrar em contato com o administrador. Porém, caso se mostre necessário, será criada uma página seguindo os mesmos padrões encontrados nas outras páginas.

### 2.9 **Responsividade e Marcação Semântica**
Adotou-se como requisito padrão o desenvolvimento de um website marcado pela responsividade, de modo que o usuário do sistema possa acessá-lo a partir de qualquer tipo de tela (celular, desktop, notebook ou smartv). Da mesma forma, utilizou-se TAGS HTML para realizar demarcações semânticas no código.


### 2.10 **Funcionalidade Especial**
Como funcionalidade especial, pretende-se construir um jogo para que os usuários possam usufruir de entretenimento gratuito. Ele irá consistir em uma tela onde haverá o pop de alfaces (em tamanhos e posições variadas). Assim, o usuário deverá clicar nelas para contabilizar uma pontuação. Caso haja ausência de cliques, ou decurso do tempo, o usuário perde a rodada. Pretende-se criar 3 níveis de dificuldade. Ainda não existe protótipo de apresentação e a ideia será amadurecida ao longo da elaboração do site.


## 3. **Comentários Sobre o Código**

## 4. **Plano de Teste**

## 5. **Resultados do Teste**

## 6. **Processos de Construção**

## 7. **Problemas**

## 8. **Comentários**



# <img src="Mielstone1/img/fotor_2023-4-20_19_44_4.png" style="width: 20px;"> **Projeto-HortaUrbana**

<div align="right">
Carlos Filipe de Castro Lemos (12542630) <br>
João Gabriel Sasseron Roberto Amorim (12542564) <br>
Pedro Guilherme dos Reis Teixeira (12542477)
</div>

## 1. **Requisitos**

* O sistema deve possuir 3 tipos de usuários:
    * Os **Administradores** são responsáveis por registrar/gerenciar produtores, clientes e serviços fornecidos. O aplicativo já vem com uma conta de adminstração.
    * Os **Clientes** são usuários que acessam o sistema para comprar produtos/serviços. 
    * Os **Produtores** são responsáveis por registrar/gerenciar os seus produtos dentro do *e-commerce*. O cargo é adquirido adquirido após uma avaliação do Cliente e permissão por um Adminstrador.
  
* Os registros dos Clientes inclui: **nome completo**, **id**, **telefone**, **email** e **endereço**. 
* Os registros dos serviços/produtos inclui: **nome**, **id**, **foto**, **descrição**, **preço**, **quantidade** (em estoque) e **quantidade vendida**.
* A loja deve vender produtos.
* Produtos vendidos: Os produtos são selecionados e sua quantidade escolhida é adicionada em um carrinho. Os produtos são comprados usando um número de cartão de cŕedito (qualquer número é aceito pelo sistema). A quantidade de produto vendido é subtraída da quantidade em estoque e adicionada à quantidade vendida. Carrinhos são esvaziados somente  após o pagamento ou pelos clientes.

## 2. **Descrição do Projeto**
Chamado Horta Urbana o nosso projeto busca agir como uma loja digital com um filosofia similar a sites como a Amazon e iFood, porém com o diferencial de se aplicar ao escopo especializado de produtos que um consumidor encontraria usualmente em uma feira fisíca, como vegetais e verduras. O próposito é que certos usuários(Clientes) possam obter a classificação de vendedor(Produtor) e oferecer seus diversos produtos, outros usuários (Que podem também ser outros Produtores) poderiam então selecionar os items que mais atraem sua atenção e os colocar no carrinho de compras. 
<a><img src="img_mk/diagrama.jpeg" s></a>


### 2.1 **Home**
A primeira página que um indivíduo vê ao acessar o link do site, sua função principal e guiar usuários para as telas de cadastro e/ou login mas também permite o acesso direto do perfil de um usuário caso o mesmo ja esteja logado. Ela está desenvolvida em html e css.
<a><img src="img_mk/home_pc.png"></a>

### 2.2 **Login**
Essa página primeiro apresenta que o cabeçalho e e rodapé vista na página "Home" será mantida como padrão em todas as outras. Ela apresenta um formulário simples onde são requisitados o e-mail e senha de um usuário ja cadastrado para que ele possa acessar o site em seu perfil. Ela está desenvolvida em html e css.
<a><img src="img_mk/login_pc.png"></a>


### 2.3 **Cadastro**
Apresenta o formulário de cadastro de um indivíduo, requisitando seu nome, endereço, telefone e informações de login. O endereço pode parecer não intuitivo como uma informação de cadastro porém assume-se que: Um usuário base (Cliente) necessitaria de tal informação para receber seus produtos por entrega, como todos os usuários que vendem produtos (Produtores) também são Clientes essa necessidade se extende a eles. Ela está desenvolvida em html e css.
<a><img src="img_mk/cadastro_pc.png"></a>


### 2.4 **Lista de Produtos**
A página onde produtos são pesquisados e accesados, na imagem um exemplo base é usado para mostrar quais categorias de dados o produto apresentaria. A imagem apresenta a página da perspectiva de um Administrador que poderia deletar e editar quaisquer produtos no site, um Produtor pelo o outro lado poderia faze-lo apenas para seus próprios produtos enquanto um Cliente é capaz apenas de visualizar e acessar produtos.
<a><img src="img_mk/listaprodutos_pc.png"></a>


### 2.5 **Profile**
Uma pequena página de atalhos que permitem acesso rapido a várias areas do site, ela é divida em 3 sessões: A primeira apresenta conteúdos gerais que todos os usuários tem acesso; A segunda adiciona utilidades para Produtores que permitem o cadastro de um produto e a visualização de todos os seus produtos cadastrados; A terceira adiciona utilidades únicas para os usuários que possuem um controle geral do site em si.
<a><img src="img_mk/profile_pc.png"></a>


### 2.6 **Carinho**
A página onde podem ser vistos todos os produtos cujo o usuário tem intenção de comprar no momento. Ela apresenta a lista dos produtos em questão, seus preços indivíduais, o frete, o preço total, o método de pagamento e o endereço onde tais itens devem ser entregues.
<a><img src="img_mk/carrinho.jpg"></a>


### 2.7 **CRUD de Produto**
Apresenta a interface de cadastro de um produto exigindo o nome, descrição, preço e quantidade do mesmo. Como mencionado previamente em 2.4 (Lista de Produtos) os Produtores também podem editar o produto nessa tela (Como por exemplo a quantidade disponível) ou simplesmente remove-le, completando a funcionalidade CRUD (Create, Read, Update and Delete).
<a><img src="img_mk/CRUD_pc.png"></a>


### 2.8 **Promoção de Consumidor à Produtor**
Inicialmente não há uma interface específica para essa funcionalidade, sendo imaginado que o Consumidor contataria um Administrador responsável por sua área e o mesmo simplesmente o garantiria as permissões necessárias. Porém, caso necessário, será criada uma seguindo os mesmos padrões encontrados nas outras.


## 3. **Comentários Sobre o Código**

## 4. **Plano de Teste**

## 5. **Resultados do Teste**

## 6. **Processos de Construção**

## 7. **Problemas**

## 8. **Comentários**


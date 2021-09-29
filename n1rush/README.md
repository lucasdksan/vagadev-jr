# :computer: Anotações do desenvolvimento do e-commerce R1_RUSH :computer: :

Para este teste, usarei React Js com Typescript, pois é a maneira que me sinto mais confortável para desenvolver qualquer projeto Web/Mobie.

# OBSERVAÇÃO IMPORTANTE:

Ao analisar a capacidade de resposta é sempre importante atualizar a guia para modificar as imagens do banner. Isso em relação às imagens para as versões mobile e desktop.

## :iphone: Mobile :iphone: :

No desenvolvimento do e-commerce, usei o método mobile-first. Esta linha de pensamento se concentra em começar a desenvolver a versão mobile primeiro. 

* #1 - Desenvolver o Header, Banner, Home e themes - [OK].
* #2 - Middle Banner #1 e #2, Shelf - [OK].
* #3 - Click Buy, Footer, Shelf e contextAPI - [OK].
* #4 - Dinâmica do site, Menu e pequenas modificações - [OK].
* #5 - Carrossel, botão contato, botão pesquisa e Responsividade- [OK].
* #6 - Resto da responsividade e passar o pente fino - [OK].
* #7 - Carrossel #2 e passar o pente fino novamente - [OK].

## :mega: Explicações de como funciona algumas dinâmicas :mega: :

->  Conforme solicitado, no cabeçalho clicando no ícone do hambúrguer aparecerá o menu. A estrutura deste menu foi dividida em dois arquivos, o primeiro é SideMenu.tsx e o segundo é Menu.tsx. SideMenu.tsx é responsável por animar o menu e sua interação com o ícone do hambúrguer. A sua comunicação é feita principalmente através da função handelToggle, onde ativa a função toggleActiveMenu, alterando assim o estado do menu. A função toggleActiveMenu foi declarada globalmente no arquivo SideMenu.tsx, portanto, para acessá-la, basta usar window.toggleActiveMenu. O arquivo Menu.tsx é o próprio menu móvel, contendo todos os estilos. Para que funcione corretamente, o SideMenu tem que "Receber" o Menu com as crianças.

-> Respondendo ao desafio extra, fiz uma dinâmica com os botões de contato, pesquisa e bolsa. Utilizando o movimento do framer, quando o usuário clicar em um deles, aparecerá uma “caixa” contendo as informações correspondentes ao botão clicado. Para o botão de contato, a caixa contém todas as redes sociais e formulários de contato desta loja (Whatsapp, Instagram, Facebook e E-mail). Escolhi esse caminho porque muitas empresas, atualmente, optam por utilizá-los para estabelecer um contato mais próximo e rápido com o cliente. O botão pesquisa direciona para a tela uma "caixa" com um simples input. Porém, no arquivo deixo a função handleSearch() que seria utilizada para pegar a informação do input e fazer a pesquisa no banco de dados e retornar ela para o cliente. Para o botão da bolsa coloquei mais uma coisa, quando o cliente clicar nele, uma caixa contendo as compras feitas será baixada e se ele não tiver feito nenhuma compra, coloquei uma animação dizendo que não há itens comprados.

-> O banner principal, neste caso o primeiro, era feito da seguinte forma:

* Fiz um componente que recebe a imagem, nome, valor e descrição para estruturar o banner.

* O arquivo Home.tsx contém todas as dinâmicas de troca de imagens.

* As dinâmicas são controladas pelas funções handleNextBanner() e handlePreviousBanner(), elas são ativadas quando um dos botões é clicado. Todas as informações do Banner ficam armazenadas no arquivo bannerData.ts, ele retorna um objeto e a partir daí, eu manipulo o Banner apenas mudando a posição do objeto.

-> Para comprar um item e de forma dinâmica alterar o valor da quantia no ícone da sacola, usei o ContextAPI. Utilizando o conceito de contextos do React, fiz o meu próprio que é responsável por confirmar a compra do item, contar os itens comprados, apresentar a caixa de luz no momento da compra, salvar os itens comprados em um array e retirar a caixa de luz. No arquivo ConfirmedBuy.tsx é possível ver uma interface e tipo declarados. O tipo é usado para permitir a existência do Array que contém os itens comprados. A interface é usada para definir quais tipos de informação estarão contidos em meu contexto. A função ProductUp() é responsável por fazer a adição ao fazer uma compra e acionar o lightbox. A função closeConfirmedBuy limpa a lightbox quando o usuário clica no botão. SetProductsListAdd() armazena as compras feitas pelo cliente em uma matriz. Essas funções são distribuídas para todos os componentes devido ao contextAPI, mas apenas alguns os usam. As constantes product e unituProducts contém, respectivamente, a quantidade de compras e quais itens foram compradas.

* A contante product é utilizada no balão perto da sacola que está no arquivo Header.tsx. (OBS.: É fiz uma condição que só aparece o balão quando o product é diferente de 0).

* O array unituProducts é utilizado na caixa de itens comprados que está no arquivo Header.tsx.

* As funções ProductUp e SetProductsListAdd são usadas no Card que contém o produt, elas pode ser encotradas no arquivo ShelfItem.tsx.

* A closeConfirmedBuy é utilizada no botão de fechar do lightbox que está no arquivo ClickBuy.tsx.

### :bulb: Ideias :bulb: : 

-> Usar o Context para a dinâmica de compra de produtos, exiba a quantidade de jogos no carrinho e exiba a tela de compra realizada com sucesso.

-> Usar framer-motion para fazer a animação do menu.

-> Colocar o MiddleBanner como componente.

-> Quando o usuário clica no ícone do contato, aparecerá uma caixa com as redes sociais (instagram, facebook e outras), e-mail e contato do whatsapp. Esta animação será semelhante ao menu da área de trabalho.

-> Colocar as informações dos banner na pasta data em um arquivo '.ts'.

-> Fatorar e organizar mais as informações do arquivo Home.ts e Home.tsx.

-> Colocar o Banner como componente.

-> Utilizar o Framer Motion para fazer o carrossel, poís a animação será mais simples com ela.

-> Utilizar cookies para armazenar as compras feitas?.
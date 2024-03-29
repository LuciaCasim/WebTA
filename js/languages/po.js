import animacionRequisito from './../requisitos.js';
import events from "./../events.js";

function translatePortuguese() {

    // NAV
    document.getElementById("nav-inscripcion").innerHTML  ="Inscrição";
    document.getElementById("nav-experiencias").innerHTML  ="Experiências";
    document.getElementById("nav-requisitos").innerHTML  ="Requisitos";
    document.getElementById("nav-legales").innerHTML  ="Perguntas Frequentes";

    // document.getElementById("popup").innerHTML =  String.raw`
    // <button id="close" class="popup__close">&times;</button>
    // <h3 class="h3">Até breve!</h3>
    // <p class="p">Graças a você, a Tesoros Argentinos teve um 2023 de muito sucesso.</p>
    // <p class="p">A Argentina se tornou o destino preferido de turistas de todo o mundo.</p>
    // <p class="p">Voltaremos em breve com novos benefícios!</p>
    // <button class="goldenButton hoverGoldenButton popup__button" id="popup__button">Aceitar</button>`;

  document.getElementById("main").innerHTML = String.raw`
  
    
  
    <!-- HOME -->
    <section class="home container-sm d-flex align-items-center" id="home" data-aos="fade-in" data-aos-easing="ease-in-out">
      <div class="row d-flex align-items-center">
        <div class="order-lg-2 col-lg-5 home__image">
          <img src="img\home__img.png" alt="Mulher segurando seu celular e festejando" class="img-fluid home__img">
        </div>
        <div class="order-lg-1 col-lg-5 offset-lg-1 home__text">
          <p class="p text-uppercase">Visit Argentina apresenta</p>
          <h1 class="h1">Tesoros <span>Argentinos</span></h1>
          <p class="p-big">Se você é um estrangeiro e viaja para a Argentina, você pode receber uma Gift Card de até <strong>200 US$</strong> para trocar por experiências durante a sua estadia.</p>
          <button class="goldenButton hoverGoldenButton" id="hero-button"><a href="#inscripcion">Preencher formulário</a></button>
        </div>
      </div>
    </section>
  
    <!-- STEPS -->
    <section class="steps container-sm" id="steps">
        <div class="steps__title row" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div class="col col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2">
            <h3 class="h2">Inscreva-se. Viaje. <br><span id="steps__highlight-1" data-annotate>Aproveite o seu </span><span id="steps__highlight-2" data-annotate>tesouro.</span></h3>
            <p class="p-big">Viva as melhores experiências de gastronomia, aventura, bem-estar e espetáculos que a Argentina tem a oferecer. <strong>Sem rifas: o procedimento é muito simples!</strong></p>
          </div>
          
        </div>
  
        <div class="row d-flex align-items-end steps__list" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
  
          <div class="order-lg-2 col-12 col-lg-6 col-xxl-5 offset-xxl-1 steps__image d-flex align-items-center justify-content-center">
            <img src="img\steps__image.png" alt="Mulher rindo e bebendo uma taça de vinho." class="img-fluid steps__img">
            <img src="img\steps__image-small.png" alt="Mulher rindo e bebendo uma taça de vinho." class="img-fluid steps__img-small">
          </div>
  
          <div class="order-lg-1 col-12 col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
  
                <div class="whiteButton steps__item steps__item-01">
                  <div class="purpleButton steps__indicator"><img class="steps__indicator-img" src="img/steps_inscripcion.svg" alt="Ícone de um lápis escrevendo em uma folha."><p class="steps__indicator-num">1</p></div>
                  <div>
                    <p class="p steps-p">Preencha o <u><a href="#inscripcion" id="steps-inscripcion">formulário</a></u> abaixo com os seus dados e detalhes da viagem. Quanto mais longa for a sua estadia, mais a sua gift card valerá a pena!</p>
                  </div>
                </div>
  
                <div class="whiteButton steps__item steps__item-02">
                  <div class="purpleButton steps__indicator"><img class="steps__indicator-img" src="img/steps_requisitos.svg" alt="Ícone de um til dentro de um círculo."><p class="steps__indicator-num">2</p></div>
                  <div>
                    <p class="p steps-p">Caso você cumpra os <u><a href="#requisitos" id="steps-requisitos">requisitos</a></u> será registrado na nossa plataforma, onde poderá ver os pontos da sua gift card e as experiências disponíveis.</p>
                  </div>
                </div>
  
                <div class="whiteButton steps__item">
                  <div class="purpleButton steps__indicator"><img class="steps__indicator-img" src="img\steps_regalo.svg" alt="Ícone de um presente."><p class="steps__indicator-num">3</p></div>
                  <div>
                    <p class="p steps-p">Uma vez na Argentina, seu vale-presente será validado automaticamente. <strong>Resgate seus pontos</strong> na plataforma para aproveitar os tesouros.</p>
                  </div>
                </div>   
          </div>
  
         
        </div>
    </section>
  
    <!-- INSCRIPCION -->
    <section class="inscripcion" id="inscripcion">  
      <div class="container-sm">
        <div class="row d-flex align-items-end">
          <div class="col-12 col-lg-6 col-xl-5 d-flex justify-content-center"><img src="img\inscripcion__image.png" alt="Mulher fazendo rafting." class="img-fluid inscripcion__img" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"></div>
          
          <div class="col-12 col-lg-6 offset-xl-1" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div class="inscripcion__header">
              <div class="inscripcion__title d-flex align-items-center">
                <img src="img\inscripcion_icon.svg" alt="Ícone de um lápis escrevendo em uma folha." class="inscripcion__icon">
                <h2 class="h2">Inscrição</h2>
              </div>
              <p class="p-big">Responda ao seguinte formulário anexando o seu <strong>bilhete e vouchers de hospedagem.</strong></p>
            </div>
            <div class="row">
              <div class="col-12 col-md-6 order-md-2 inscripcion__image-small d-flex align-items-center"><img src="img\inscripcion__image-small.png" alt="Mulher fazendo rafting." class="img-fluid inscripcion__img-small"></div>
  
              <div class="col-12 col-md-6 col-lg-12 order-md-1 whiteButton inscripcion__form-container d-flex align-items-center">
                  <div data-tf-widget="wkEKjahL" data-tf-inline-on-mobile data-tf-opacity="100" data-tf-iframe-props="title=formularioWeb_POR" data-tf-transitive-search-params data-tf-medium="snippet" style="width:90%;height:300px;margin:2rem auto;"></div><script src="//embed.typeform.com/next/embed.js"></script>            
              </div>
            </div>
            
            
          </div>
        </div>
      </div>  
      
    </section>
  
    <!-- EXPERIENCIAS -->
    <section class="experiencias container-sm" id="experiencias">
      <div class="experiencias__header" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div class="experiencias__title d-flex align-items-center justify-content-center">
          <img src="img\experiencias_icon.svg" alt="Ícone de um presente." class="experiencias__icon">
          <h2 class="h2 text-center">Experiências</h2>
        </div>
        <p class="p-big text-center">Temos mais de <strong>1500 opções</strong> em todo o país para você escolher a sua favorita.</p>
      </div>
  
  
      <div id="carouselExampleIndicators" class="carousel slide carousel-fade row" data-bs-ride="true" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">               
        <div class="carousel-inner">    
          
            <div class="carousel-container col col-xxl-8 offset-xxl-2 col-md-10 offset-md-1">
  
                <!-- GASTRONOMIA -->
              <div class="carousel-item active experiencias__item whiteButton">
                <div class="row d-flex align-items-center">
                  <div class="col-12 col-lg-6">
                    <div class="whiteButton experiencias__item-img experiencias__item-img-gastronomia">
                    </div>
                  </div>
  
                  <div class="col-12 col-lg-6 experiencias__item-text">
                    <div class="experiencias__item-category d-flex align-items-center">
                      <img src="img\gastronomia_icon.svg" alt="Ícone de um garfo e uma faca." class="experiencias__item-icon">
                      <h3 class="h3">Gastronomia</h3>
                    </div>
                    <p class="experiencias__item-p p">
                      A gastronomia argentina combina várias influências: a tradição dos povos originários e da culinária criolla, a influência da cultura europeia e o modernismo da cozinha de fusão que hoje está em seu auge de experimentação. Atreva-se a experimentar sabores que você nunca esquecerá!
                    </p>    
                </div>          
              </div>
            </div>
  
            <!-- BIENESTAR -->
            <div class="carousel-item experiencias__item whiteButton">
              <div class="row d-flex align-items-center">
                <div class="col-12 col-lg-6">
                  <div class="whiteButton experiencias__item-img experiencias__item-img-bienestar">
                  </div>
                </div>
  
                <div class="col-12 col-lg-6 experiencias__item-text">
                  <div class="experiencias__item-category d-flex align-items-center">
                    <img src="img\bienestar_icon.svg" alt="Ícone de uma pessoa meditando." class="experiencias__item-icon">
                    <h3 class="h3">Bem-estar</h3>
                  </div>
                  <p class="experiencias__item-p p">
                      As experiências de bem-estar contribuem para a desconexão do turbilhão diário. Na Argentina, temos uma ampla gama de opções que vão desde sessões de massagem, aulas de ioga e tratamentos estéticos, até dias de spa e atividades físicas relaxantes que podem ser feitas em toda a Argentina.
                  </p>    
              </div>          
            </div>
          </div>
  
          <!-- AVENTURA -->
          <div class="carousel-item experiencias__item whiteButton">
            <div class="row d-flex align-items-center">
              <div class="col-12 col-lg-6">
                <div class="whiteButton experiencias__item-img experiencias__item-img-aventura">
                </div>
              </div>
  
              <div class="col-12 col-lg-6 experiencias__item-text">
                <div class="experiencias__item-category d-flex align-items-center">
                  <img src="img\aventura_icon.svg" alt="Ícone de uma tenda." class="experiencias__item-icon">
                  <h3 class="h3">Aventura</h3>
                </div>
                <p class="experiencias__item-p p">
                  Na Argentina você vai encontrar o tipo de aventura que você quer de acordo com a sua personalidade. Se você gosta de ar, água, terra ou neve, a atividade ideal irá esperá-lo para estimular os sentidos e conectá-lo com a maravilhosa natureza argentina.
                </p>    
            </div>          
          </div>
        </div>
  
        <!-- ENTRETENIMIENTO -->
        <div class="carousel-item experiencias__item whiteButton">
          <div class="row d-flex align-items-center">
            <div class="col-12 col-lg-6">
              <div class="whiteButton experiencias__item-img experiencias__item-img-entretenimiento">
              </div>
            </div>
  
            <div class="col-12 col-lg-6 experiencias__item-text">
              <div class="experiencias__item-category d-flex align-items-center">
                <img src="img\entretenimiento_icon.svg" alt="Ícone de uma estrela." class="experiencias__item-icon">
                <h3 class="h3">Entretenimento</h3>
              </div>
              <p class="experiencias__item-p p">
                  Se algo nos caracteriza como argentinos, é a paixão pelo encontro. É por isso que temos uma ampla gama de propostas divertidas para você escolher a que se encaixa na sua medida e vivê-la da maneira argentina: ouvir uma banda de jazz, fazer uma aula inspiradora ou participar de uma experiência gourmet, entre outras.
              </p>    
          </div>          
        </div>
      </div>
          </div>
        </div>
  
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div> 
  
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  
    </section>
  
    <!-- REQUISITOS -->
    <section class="requisitos" id="requisitos">
      <div class="container-sm">
        <div class="requisitos__title d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <img src="img\inscripcion_icon.svg" alt="Ícone de um til dentro de um círculo." class="requisitos__icon">
          <h2 class="h2">Requisitos</h2>
        </div>
  
        <div class="whiteButton row d-flex align-items-center requisitos__container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
  
          <div class="requisito__card requisito-active col-12 col-lg-4">
            <div class="requisito__inner d-flex flex-column justify-content-center align-items-center">
              <div class="whiteButton requisito__image d-flex align-items-center justify-content-center">
                <img src="img\icon_nacionalidad.svg" alt="Ícone de um globo terrestre." class="requisito__img">
              </div>
              <div class="text-center requisito__text">
                <p class="requisito__p-small">Ser de nacionalidade</p>
                <p class="requisito__p-big">não Argentina</p>
              </div>
            </div>
          </div>
  
          <div class="requisito__card col col-12 col-lg-4">
            <div class="requisito__inner d-flex flex-column justify-content-center align-items-center">
              <div class="whiteButton requisito__image d-flex align-items-center justify-content-center">
                <img src="img\icon_edad.svg" alt="Ícone de um número 18 com um sinal de mais à sua direita." class="requisito__img">
              </div>
              <div class="text-center requisito__text">
                <p class="requisito__p-small">Ter mais de</p>
                <p class="requisito__p-big">18 anos</p>
              </div>
            </div>
          </div>
  
          <div class="requisito__card col col-12 col-lg-4">
            <div class="requisito__inner d-flex flex-column justify-content-center align-items-center">
              <div class="whiteButton requisito__image d-flex align-items-center justify-content-center">
                <img src="img\icon_estadia.svg" alt="Ícone de uma cama." class="requisito__img">
              </div>
              <div class="text-center requisito__text">
                <p class="requisito__p-small">Ter uma estadia mínima</p>
                <p class="requisito__p-big">de três noites</p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  
    <!-- LEGALES -->
 <section class="legales container-sm" id="preguntas">

    <div class="legales__title d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <img src="img\legales_icon.svg" alt="Un ícono de una balanza." class="legales__icon">
      <h2 class="h2">Perguntas Frequentes</h2>
    </div>

    <div class="row">
      <div class="legales__accordion col-12 col-lg-10 offset-lg-1" id="legales__accordion">

        <!-- ////////////    ITEM 1     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button h5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <span class="accordion-letter">1</span> O que é Tesoros Argentinos?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
             <p>Tesoros Argentinos é o programa que recompensa você por viajar para a Argentina, através de suas passagens do exterior e suas reservas de hospedagem.</p>
             <p>Consiste em uma gift card digital, com a qual você pode trocar pontos por experiências turísticas na plataforma web de Tesoros Argentinos.
              </p>

            </div>
          </div>
        </div>

        <!-- ////////////    ITEM 2     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <span class="accordion-letter">2</span> Quais são os prêmios?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
             <p>Nós lhe damos pontos para trocar por experiências turísticas, que você pode encontrar em nossa plataforma web. Temos um grande catálogo de mais de 1400 experiências para você aproveitar em sua viagem.</p>

              <p>Você receberá uma gift card digital na forma de acesso à plataforma exclusiva do programa de experiência Tesoros Argentinos.</p> 

            </div>
          </div>
        </div>

        <!-- ////////////    ITEM 3     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <span class="accordion-letter">3</span> Quais são os requisitos?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
              <p>Turistas estrangeiros maiores de 18 anos (não argentinos) que tenham uma estadia de pelo menos 3 noites podem participar do programa Tesoros Argentinos.</p>                 
            </div>
          </div>
        </div>

        <!-- ////////////    ITEM 4     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <span class="accordion-letter">4</span> Como posso participar?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
             <p>Antes de viajar, você deve preencher um formulário online com seus dados e recibos. Com esse procedimento simples você já participa de uma gift card digital.</p>
            </div>
          </div>
        </div>

        <!-- ////////////    ITEM 5     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <span class="accordion-letter">5</span> Se eu viajar com minha família, posso registrar todos os membros?
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
              <p>SIM. Cada pessoa com mais de 18 anos de idade pode enviar seu recibo, documento de viagem e seu correio eletrônico.</p>      
            </div>
          </div>
        </div>


        <!-- ////////////    ITEM 6     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <span class="accordion-letter">6</span> Como sou informado se eu entrei no Tesoros Argentinos?
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
              <p>Se você obteve a gift card, receberá um e-mail da caixa no-reply@pass.argentina.travel com seu nome de usuário e senha para entrar na plataforma web Tesoros Argentinos.</p>
              <p>Você deve acessar e preencher os dados para a criação da sua conta na plataforma.</p>
              <p>Depois de ter sua conta registrada, os pontos levarão até 72 horas para serem validados.</p>
            </div>
          </div>
        </div>


        <!-- ////////////    ITEM 7     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              <span class="accordion-letter">7</span> Já tenho minha conta, quando meus pontos são validados?
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
              <p>Após criar sua conta na plataforma web Tesoros Argentinos, em até 72 horas, seus pontos serão validados. A partir daí, você pode trocá-los pelas experiências publicadas.</p>
            </div>
          </div>
        </div>

      <!-- ////////////    ITEM 8     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingEight">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
          <span class="accordion-letter">8</span> Acessei a plataforma, mas não tenho pontos para trocar.
        </button>
      </h2>
      <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Depois de criar sua conta na plataforma web Tesoros Argentinos, seus pontos serão validados dentro de 48 a 72 hs.</p>
        </div>
      </div>
    </div>

    <!-- ////////////    ITEM 9     ///////////-->
    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingNine">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
          <span class="accordion-letter">9</span> Como faço para trocar meus pontos por experiências?
        </button>
      </h2>
      <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Na plataforma web de Tesoros Argentinos você pode ver as instruções para trocar cada experiência. Você pode escolher entre mais de 1400 experiências filtrando por tipo de experiência ou por província da Argentina.</p>
          <p>Lá você terá um botão para trocar os pontos pela experiência escolhida. Lembre-se que é <strong>obrigatório</strong> resgatar seus pontos para usar uma experiência.</p>
          <p>Algumas experiências exigem reservas. Depois de trocar seus pontos, você receberá os detalhes de contato da experiência para que possa reservar.</p>
          <p>Uma vez trocados, você receberá um e-mail com um código. Você precisará apresentar esse código para acessar a experiência ou reservar sua vaga. Lembre-se de indicar que você tem <strong>um código BIG BOX.</strong></p>
        </div>
      </div>
    </div>

     <!-- ////////////    ITEM 10     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingTen">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
          <span class="accordion-letter">10</span> Como devo reservar uma experiência?
        </button>
      </h2>
      <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Algumas experiências exigem reservas. Depois de trocar seus pontos, você receberá os detalhes de contato da experiência para que possa reservar.
        </p>
        </div>
      </div>
    </div>

    <!-- ////////////    ITEM 11     ///////////-->
    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingEleven">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
          <span class="accordion-letter">11</span> Ao ir para a experiência eles não identificam Tesoros Argentinos, o que devo fazer?
        </button>
      </h2>
      <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Algumas experiências podem se referir a Tesoros Argentinos pelo nome da tecnologia que usamos para o programa.</p>
          <p>Nesse caso, diga ao provedor de experiência que <strong>o código é "BIG BOX".</strong></p>
        </div>
      </div>
    </div>

     <!-- ////////////    ITEM 12     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingTwelve">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
          <span class="accordion-letter">12</span> Posso ganhar mais pontos?
        </button>
      </h2>
      <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Não, no momento não é possível conseguir mais pontos. Algumas experiências oferecem a oportunidade de adicionar mais serviços pagos, essas ofertas não dependem do programa Tesoros Argentinos.</p>
        </div>
      </div>
    </div>

    <!-- ////////////    ITEM 13     ///////////-->
    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingThirteen">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
          <span class="accordion-letter">13</span> Moro no exterior, mas tenho passagem aérea de aeroporto que fica dentro da Argentina, funciona para mim?
        </button>
      </h2>
      <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Somente são válidas as passagens aéreas que comprovem que o turista está viajando de um aeroporto/destino que não esteja dentro da Argentina.</p>
        </div>
      </div>
    </div>

     <!-- ////////////    ITEM 14     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingFourteen">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
          <span class="accordion-letter">14</span> Quais são os termos legais do programa?
        </button>
      </h2>
      <div id="collapseFourteen" class="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">

          <!-- CONDICIONES GENERALES -->
          <div>
            <p class="legal-title">A. Condições gerais</p>
            <p>1. O Instituto Nacional de Promoção Turística (doravante "INPROTUR") criou, por meio de sua Diretoria de Promoção Internacional, o programa chamado "TESOROS ARGENTINOS" (doravante, o "Programa") de alocação de pontos através dos consumos feitos exclusivamente por turistas estrangeiros que visitam a República Argentina (doravante "Usuário Turista"). Esses pontos podem ser utilizados exclusivamente no Programa, por meio de uma plataforma de troca criada para este fim pelo INPROTUR em conjunto com a empresa Bigbox S.A., CUIT 30-71109155-2. A plataforma de troca foi desenvolvida especialmente para o Programa.</p>
            <p> Os consumos feitos por turistas nacionais e ou pessoas jurídicas nacionais e estrangeiras está expressamente excluído do Programa.
            </p>
          </div>

          <br>
          <br>
          <!-- ADQUISION DE PUNTOS -->

          <div>
            <p class="legal-title">B. Adquisição de pontos</p>
            <p>1. Os Usuários Turistas que fizerem a compra de uma passagem ou pacote turístico para a República Argentina entre as datas de 01/01/2023 e 31/12/2023 ou até que o estoque disponível para o Programa esteja esgotado, receberão um "Gift Card" pessoal e intransferível para gastar apenas em território argentino durante sua estadia naquele país. Esse benefício será aplicado a passagens ou pacotes adquiridos em empresas de transporte e ou agências selecionadas pelo INPROTUR para promover o benefício.</p>

            <p>2. No caso da empresa fluvial Buquebus, o Programa será implementado apenas para os passageiros que adquirirem Pacotes Turísticos (Combo De Passagem e Hospedagem)</p>

            <p>
                3. Para acessar o Programa, quem comprar o ingresso ou pacote turístico nas datas estabelecidas deve ter uma nacionalidade diferente da argentina, uma vez que o Programa visa promover o turismo internacional na Argentina. Por essa razão, pessoas que só têm nacionalidade argentina não participarão do Programa.
            </p>

            <p>4. A aquisição acima mencionada de passagens entre as datas de 01/01/2023 e 31/12/2023 deve ter sido feita assim que a campanha com cada empresa correspondente for lançada. O benefício não é retroativo: pessoas que compraram antes de a empresa lançar a campanha publicitária, não participarão do Programa.</p>

            <p>5. O benefício do Programa será exibido na forma de pontos, que serão concedidos a partir da taxa de câmbio oficial entre o dólar americano e o peso argentino na data em que o INPROTUR envie os emails com o convite aos beneficiários, conforme estabelecido no ponto B.10.</p>

            <p>6. As razões acima mencionadas de acumulação de pontos podem ser modificadas a critério do INPROTUR. Frações de Pontos não serão computadas.</p>

            <p>7. The points accumulated in the Program do not constitute property of the tourist Users. The points are not transferable to any other person or entity or under any title or cause and may not be transferred to any other Program account, except with the express consent of INPROTUR.</p>

            <p>8. Os pontos acumulados no Programa não têm valor monetário e não podem ser trocados por dinheiro.</p>

            <p>9. Ao efetuar a compra da passagem durante as datas indicadas, a empresa emissora ou agência de turismo enviará ao INPROTUR os seguintes dados do turista que fez a compra: nome e sobrenome, email, data de entrada e saída para a República Argentina. Esses dados só serão compartilhados com o objetivo de prosseguir com a criação do Gift Card, a fim de atribuir os pontos obtidos no Programa, de acordo com o número de dias que a estadia do turista na República Argentina durar.</p>

            <p>10. O INPROTUR informará os Usuários Turistas por email sobre os pontos acumulados no Programa. Sem prejuízo disso, os Usuários Turistas poderão consultar seus Pontos através do site web de "Tesoros Argentinos".</p>
          </div>

          <br>
          <br>
          <!-- ACTIVACION DE PUNTOS Y VIGENCIA -->
          <div>
            <p class="legal-title">C. Ativação de pontos e validade</p>
              <p>1. Para poder trocar os Pontos, o Usuário Turista deve passar por duas instâncias. Antes de mais nada, ele terá que ser credenciado no site web de "Tesoros Argentinos", onde deverá preencher as seguintes informações para poder acessar e poder ver os benefícios oferecidos:</p>
                 
              <p>
                - Nome e sobrenome<br>
                - Data de nascimento<br>
                - Gênero<br>
                - País de nascimento<br>
                - País de residência<br>
                - Telefone<br>
                - Número do documento de identidade com o qual viajará para a Argentina<br>
                - Expectativas da viagem<br>
                - Canal através do qual conheceu o benefício<br>
              </p>
                         
              <p>2. O Site web "Tesoros Argentinos" estará disponível em três idiomas para que o turista possa selecionar o que preferir. Esses idiomas são: espanhol, português e inglês. O INPROTUR reserva-se o direito de oferecer mais idiomas se julgar necessário.</p>
              
             <p>3. Em segundo lugar, o Usuário Turista deve ativar seu benefício na chegada à República Argentina nos locais de ativação criados para este fim. Esse procedimento é inevitável: se o turista não ativar os pontos nesses locais, ele não poderá fazer uso do benefício.</p>
              
             <p>4. Os pontos possuem prazo de validade de 30 dias a partir da data em que a ativação é realizada nos locais de ativação física organizados pelo INPROTUR no território da República Argentina.</p>
             
             <p>5. Os pontos que não foram utilizados pelo Usuário Turista durante sua estadia na República Argentina, por qualquer motivo ou força maior, ou porque 30 dias se passaram desde a sua ativação, retornarão automaticamente ao INPROTUR para serem utilizados pelos novos beneficiários. Desta forma, uma vez que o prazo de 30 dias a partir de sua ativação em locais de ativação tenha terminado, o Usuário Turista ficará sem um saldo de pontos a seu favor.</p>
          </div>

          <br><br>
          <!-- UTILIZACIÓN DE PUNTOS -->
          <div>
              <p class="legal-title">D. Uso de pontos</p>
              <p> 1. O Usuário Turista poderá trocar os pontos por qualquer uma das Experiências oferecidas no Programa, desde que tenha o número de pontos necessários para essa atividade. As Experiências incluem e se limitam ao que está detalhado no site web de "Tesoros Argentinos" e não incluem custos de transferências, serviços extras, lavanderia, gorjetas, taxas sobre serviços ou impostos aplicáveis.</p>
               
              <p>2. O Usuário Turista (i) deve entrar em contato diretamente com o Provedor (usando os dados de contato fornecidos no Site web de "Tesoros Argentinos") e reservar a data em que deseja fazer uso da experiência; ou (ii) deve gerenciar a reserva da Experiência através do Site web de "Tesoros Argentinos", caso a referida opção esteja disponível para a experiência específica contratada. Nessa ocasião, o Usuário Turista deve fornecer o Código ao Provedor para que ele verifique sua validade e que o código possa ser utilizado para a Experiência selecionada. A data da reserva não pode ser posterior ao término do Prazo de Validade.</p>
               
               <p>3. Não obstante o exposto, o Usuário Turista pode entrar em contato com o Provedor e solicitar o cancelamento da reserva, que deve ser feita dentro do prazo indicado pelo Provedor no momento da realização da reserva.</p>
          </div>

          <br><br>

          <!-- OBLIGACIONES DEL USUARIO TURISTA -->
          <div>
          <p class="legal-title">E. Obrigações do Usuário Turista</p>
          <p>1. O Usuário Turista deve escolher a Experiência de seu interesse sob sua exclusiva responsabilidade, bem como deve entrar em contato com o Provedor e fazer as reservas correspondentes. A oferta pelo Provedor da Experiência em questão estará sujeita à sua disponibilidade, bem como às suas regras e políticas gerais, incluindo, mas não se limitando a regras e políticas relativas à admissão e permanência, segurança, cancelamentos, idade mínima e máxima, condição física, e aquelas que o INPROTUR e ou Bigbox e ou o Provedor poderiam estabelecer razoavelmente de tanto em tanto.</p>
          
          <p>2. O Usuário Turista assume a obrigação de se informar com antecedência das regras e ou políticas que podem ser exigidas pelo Provedor, e compromete-se a aceitar tais políticas e normas, bem como as condições remanescentes que possam ser razoavelmente exigidas por qualquer Provedor.</p>
            
            <p>3. Caso o Usuário Turista cancele voluntariamente a participação no Programa, todos os pontos acumulados no Programa serão automaticamente inutilizados até o término do período de ativação.</p>
            
            <p>4. Todos os Usuários Turistas aderidos ao Programa autorizam o INPROTUR a divulgar e ou divulgar suas imagens filmadas ou fotografadas na mídia e da forma que o INPROTUR julgar adequado, sem qualquer remuneração.</p>
        </div>
        <br><br>

        <!-- PRESTADORES DE EXPERIENCIAS Y BENEFICIOS -->
        <div>
          <p class="legal-title">F. Fornecedores de experiências e benefícios</p>
          <p>1. Os provedores são selecionados pelo Bigbox. O INPROTUR tem o poder de propor novos Provedores e novas Experiências. O INPROTUR também tem o poder de remover experiências e benefícios oferecidos em seu site web de "Tesoros Argentinos".</p>

          <p>2. A recusa de qualquer Provedor de oferecer ao Usuário Turista uma certa experiência para qualquer hipótese de não-observância de tais políticas e ou regras não será considerada pelo Usuário Turista como discriminação e ou não conformidade, e, portanto, não implicará qualquer responsabilidade de tal Provedor, INPROTUR ou Bigbox.</p>
        </div>

        <br><br>
        
        <!-- DISPOSICIONES GENERALES -->
        <div>
          <p class="legal-title">G. Disposições Gerais</p>
          <p>1. Os Pontos acumulados devem ser utilizados de acordo com as condições do Programa. O INPROTUR não se responsabiliza por passagens, acomodações, certificados ou vouchers perdidos, furtados, roubadas ou não utilizados.</p>
         <p>2. O INPROTUR reserva-se o direito de modificar, adicionar ou cancelar qualquer prêmio sem aviso prévio, bem como os pontos necessários para acessar cada um deles.</p>

          <p>3. O INPROTUR reserva-se o direito de cancelar o Programa ou modificar todos ou parte dos termos e condições dele a qualquer momento.</p>

          <p>4. Qualquer fraude ou abuso relacionado ao acúmulo de pontos, atribuído ao Usuário Turista, resultará na perda dos pontos acumulados, bem como no cancelamento da Conta do Programa.</p>

         <p>5. Todas as perguntas ou questões relativas ao Programa serão resolvidas pelo INPROTUR e ou Bigbox.</p>

          <p>6. O fato de o INPROTUR omitir a exigência de um determinado termo ou condição não constitui uma renúncia pelo INPROTUR do referido termo ou condição.</p>

          <p>7. A participação no Programa implica o conhecimento e a aceitação, por parte dos Usuários Turistas, de todas as condições estabelecidas nestes termos e condições. Estas Condições Gerais são de caráter vinculante e, em caso de não aceitá-las, o Usuário Turista deve abster-se de adquirir as Experiências e ou recebê-las dos Provedores e ou exercer de qualquer forma e com qualquer escopo os direitos inerentes à propriedade dos Códigos.</p>
        </div>
  
        </div>
      </div>
    </div>
    
    <!-- END OF ACORDION-->
      </div>
    </div>
  </section>
  
    <!-- FOOTER -->
  
    <footer class="footer" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div class="container footer__container">
  
        <div class="footer__logos">
          <div class="row">
            <div class="footer__logo logo__tesoros col-12 col-lg-6 col-xl-5 offset-xl-1 d-flex align-items-center justify-content-center">
              <img src="img\tesorosargentinos_logoblanco.svg" alt="Logotipo do Tesoros Argentinos." class="img-fluid">
            </div>
            <div class="footer__logo logo__visit col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-center justify-content-center">
              <p>Uma iniciativa do</p>
              <img src="img\visitArgentina_logo.svg" alt="Logotipo do Visit Argentina." class="img-fluid">
            </div>
          </div>
          
        </div>
  
        <div class="container footer__divider"></div>        
  
        <div class="footer__links ">
          <ul class="d-flex justify-content-center align-items-center footer__links_list">
            <li class="footer__link d-flex"><a href='#inscripcion' id="footer__link-inscripcion" class="whiteButton">Inscrição</a></li>
            <li class="footer__link d-flex"><a href='#experiencias'  id="footer__link-experiencias" class="whiteButton">Experiências</a></li>
            <li class="footer__link d-flex"><a href='#requisitos'  id="footer__link-requisitos" class="whiteButton">Requisitos</a></li>
            <li class="footer__link d-flex"><a href='#preguntas'  id="footer__link-legales" class="whiteButton">Perguntas Frequentes</a></li>
          </ul>
        </div>
  
        <div class="footer__social">
          <ul class="d-flex align-items-center justify-content-center footer__social_list">
            <li class="footer__social_icon"><a href="https://www.instagram.com/visitargentina/" target="_blank"><img class="footer__social_icon-img" src="img\instagram_icon.svg" alt="Ícone do Instagram."></a></li>
            <li class="footer__social_icon"><a href="https://www.facebook.com/visitarg/" target="_blank"><img class="footer__social_icon-img" src="img\facebook_icon.svg" alt="Ícone do Facebook."></a></li>
            <li class="footer__social_icon"><a href="https://twitter.com/visitargentina" target="_blank"><img class="footer__social_icon-img" src="img\twitter_icon.svg" alt="Ícone do Twitter."></a></li>
            <li class="footer__social_icon"><a href="https://www.tiktok.com/@visitargentina_" target="_blank"><img class="footer__social_icon-img" src="img\tiktok_icon.svg" alt="Ícone do TikTok."></a></li>
            <li class="footer__social_icon"><a href="https://www.youtube.com/channel/UC9w7aOZMl9a1l9boy4Y-xGg" target="_blank"><img class="footer__social_icon-img" src="img\youtube_icon.svg" alt="Ícone do YouTube icon."></a></li>
          </ul>
        </div>
      </div>
      
    </footer>`
  events();
}

export default translatePortuguese;
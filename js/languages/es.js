import animacionRequisito from './../requisitos.js';
import events from "./../events.js";


function translateSpanish() {
  // NAV
  document.getElementById("nav-inscripcion").innerHTML  ="Inscripción";
  document.getElementById("nav-experiencias").innerHTML  ="Experiencias";
  document.getElementById("nav-requisitos").innerHTML  ="Requisitos";
  document.getElementById("nav-legales").innerHTML  ="Preguntas Frecuentes";


  document.getElementById("main").innerHTML  =  String.raw`<!-- WHATSAPP WIDGET -->
  <div class="whatsapp_widget">
    <div class="whiteButton whatsapp_description">
      <p>¿Dudas? <span>¡Escribinos!</span></p>
    </div>
      <a class="purpleButton whatsapp_button" href="https://api.whatsapp.com/send?phone=5491122403532" target="_blank" rel="noopener noreferrer">
        <img src="img\whatsapp_icon.svg" alt="Icono de whatsapp">
      </a>       
  </div>
  

  <!-- HOME -->
  <section class="home container-sm d-flex align-items-center" id="home" data-aos="fade-in" data-aos-easing="ease-in-out">
    <div class="row d-flex align-items-center">
      <div class="order-lg-2 col-lg-5 home__image">
        <img src="img\home__img.png" alt="Mujer sosteniendo su celular y festejando" class="img-fluid home__img">
      </div>
      <div class="order-lg-1 col-lg-5 offset-lg-1 home__text">
        <p class="p text-uppercase">Visit Argentina presenta</p>
        <h1 class="h1">Tesoros <span>Argentinos</span></h1>
        <p class="p-big">Si sos extranjero y viajás a la Argentina, podés recibir una Gift Card de hasta <strong>200 USD</strong> para canjear por experiencias durante tu estadía.</p>
        <button class="goldenButton hoverGoldenButton" id="hero-button"><a href="#inscripcion">Completar formulario</a></button>
      </div>
    </div>
  </section>

  <!-- STEPS -->
  <section class="steps container-sm" id="steps">
      <div class="steps__title row" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div class="col col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2">
          <h3 class="h2">Inscribite. Viajá.<br><span id="steps__highlight-1" data-annotate>Disfrutá de tu </span><span id="steps__highlight-2" data-annotate>tesoro.</span></h3>
          <p class="p-big">Viví las mejores experiencias de gastronomía, aventura, bienestar y espectáculos que Argentina tiene para ofrecerte. <strong>Sin sorteos: ¡el procedimiento es muy sencillo!</strong></p>
        </div>
        
      </div>

      <div class="row d-flex align-items-end steps__list" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">

        <div class="order-lg-2 col-12 col-lg-6 col-xxl-5 offset-xxl-1 steps__image d-flex align-items-center justify-content-center">
          <img src="img\steps__image.png" alt="Mujer riendo y tomando una copa de vino" class="img-fluid steps__img">
          <img src="img\steps__image-small.png" alt="Mujer riendo y tomando una copa de vino" class="img-fluid steps__img-small">
        </div>

        <div class="order-lg-1 col-12 col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">

              <div class="whiteButton steps__item steps__item-01">
                <div class="purpleButton steps__indicator"><img class="steps__indicator-img" src="img/steps_inscripcion.svg" alt="Icono de un lápiz escribiendo en una hoja."><p class="steps__indicator-num">1</p></div>
                <div>
                  <p class="p steps-p">Completá el <u><a href="#inscripcion" id="steps-inscripcion">formulario</a></u> a continuación con tus datos y los detalles de tu viaje. Cuanto mayor sea tu estadía, ¡más valdrá tu giftcard!</p>
                </div>
              </div>

              <div class="whiteButton steps__item steps__item-02">
                <div class="purpleButton steps__indicator"><img class="steps__indicator-img" src="img/steps_requisitos.svg" alt="Icono de una tilde dentro de un círculo."><p class="steps__indicator-num">2</p></div>
                <div>
                  <p class="p steps-p">Si cumplís con los <u><a href="#requisitos" id="steps-requisitos">requisitos</a></u> serás dado de alta en nuestra plataforma, donde podrás ver los puntos de tu giftcard y las experiencias disponibles.</p>
                </div>
              </div>

              <div class="whiteButton steps__item">
                <div class="purpleButton steps__indicator"><img class="steps__indicator-img" src="img\steps_regalo.svg" alt="Icono de un regalo."><p class="steps__indicator-num">3</p></div>
                <div>
                  <p class="p steps-p">En Argentina, tu gift card se validará automáticamente. <strong>Canjeá tus puntos</strong> en la plataforma para disfrutar de los tesoros.</p>
                </div>
              </div>   
        </div>

       
      </div>
  </section>

  <!-- INSCRIPCION -->
  <section class="inscripcion" id="inscripcion">  
    <div class="container-sm">
      <div class="row d-flex align-items-end">
        <div class="col-12 col-lg-6 col-xl-5 d-flex justify-content-center"><img src="img\inscripcion__image.png" alt="Mujer haciendo rafting" class="img-fluid inscripcion__img" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"></div>
        
        <div class="col-12 col-lg-6 offset-xl-1" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div class="inscripcion__header">
            <div class="inscripcion__title d-flex align-items-center">
              <img src="img\inscripcion_icon.svg" alt="Un ícono de un lápiz completando un formulario." class="inscripcion__icon">
              <h2 class="h2">Inscripción</h2>
            </div>
            <p class="p-big">Respondé el siguiente formulario adjuntando tus comprobantes de <strong>pasaje y alojamiento.</strong></p>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 order-md-2 inscripcion__image-small d-flex align-items-center"><img src="img\inscripcion__image-small.png" alt="Mujer haciendo rafting" class="img-fluid inscripcion__img-small"></div>

            <div class="col-12 col-md-6 col-lg-12 order-md-1 whiteButton inscripcion__form-container d-flex align-items-center">
              <div  data-tf-widget="fK1dtQQG" data-tf-inline-on-mobile data-tf-opacity="100" data-tf-hide-headers data-tf-iframe-props="title=formularioWeb_ESP" data-tf-transitive-search-params data-tf-medium="snippet" style="width:90%;height:300px;margin:2rem auto;"></div><script src="//embed.typeform.com/next/embed.js"></script>
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
        <img src="img\experiencias_icon.svg" alt="Icono de un regalo." class="experiencias__icon">
        <h2 class="h2 text-center">Experiencias</h2>
      </div>
      <p class="p-big text-center">Tenemos más de <strong>1500 opciones</strong> a lo largo de todo el país para que elijas tu favorita.</p>
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
                    <img src="img\gastronomia_icon.svg" alt="Icono de un tenedor y un cuchillo." class="experiencias__item-icon">
                    <h3 class="h3">Gastronomía</h3>
                  </div>
                  <p class="experiencias__item-p p">
                    La gastronomía argentina combina diversos influjos: la tradición de los pueblos originarios y la cocina criolla, la influencia de la cultura europea y el modernismo de la cocina fusión que hoy se encuentra en su auge de experimentación. ¡Animate a probar sabores que nunca olvidarás!
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
                  <img src="img\bienestar_icon.svg" alt="Icono de una persona meditando." class="experiencias__item-icon">
                  <h3 class="h3">Bienestar</h3>
                </div>
                <p class="experiencias__item-p p">
                  Las experiencias de bienestar colaboran con la desconexión de la vorágine diaria. En Argentina contamos con una amplia gama de opciones que va desde sesiones de masajes, clases de yoga y tratamientos estéticos, hasta días de spa y actividades físicas relajantes que se pueden realizar en toda la Argentina.
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
                <img src="img\aventura_icon.svg" alt="Icono de una carpa." class="experiencias__item-icon">
                <h3 class="h3">Aventura</h3>
              </div>
              <p class="experiencias__item-p p">
                En Argentina encontrarás el tipo de aventura que deseas de acuerdo a tu personalidad. Si amas el aire, el agua, la tierra o la nieve, te esperará la actividad ideal para estimular los sentidos y conectar con la maravillosa naturaleza argentina. 
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
              <img src="img\entretenimiento_icon.svg" alt="Icono de una estrella." class="experiencias__item-icon">
              <h3 class="h3">Entretenimiento</h3>
            </div>
            <p class="experiencias__item-p p">
              Si algo nos caracteriza a los argentinos es la pasión por el encuentro. Por eso contamos con un amplio abanico de propuestas divertidas para que elijas la que se ajusta a tu medida y la vivas a la manera argentina: escuchar una banda de jazz, tomar una clase inspiradora o participar de una experiencia gourmet, entre otras.
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
        <img src="img\inscripcion_icon.svg" alt="Un ícono de un tick dentro de un círculo." class="requisitos__icon">
        <h2 class="h2">Requisitos</h2>
      </div>

      <div class="whiteButton row d-flex align-items-center requisitos__container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">

        <div class="requisito__card requisito-active col-12 col-lg-4">
          <div class="requisito__inner d-flex flex-column justify-content-center align-items-center">
            <div class="whiteButton requisito__image d-flex align-items-center justify-content-center">
              <img src="img\icon_nacionalidad.svg" alt="Ícono de un globo terráqueo." class="requisito__img">
            </div>
            <div class="text-center requisito__text">
              <p class="requisito__p-small">Ser de nacionalidad</p>
              <p class="requisito__p-big">no Argentina</p>
            </div>
          </div>
        </div>

        <div class="requisito__card col col-12 col-lg-4">
          <div class="requisito__inner d-flex flex-column justify-content-center align-items-center">
            <div class="whiteButton requisito__image d-flex align-items-center justify-content-center">
              <img src="img\icon_edad.svg" alt="Ícono de un número 18 con un signo de más a su derecha." class="requisito__img">
            </div>
            <div class="text-center requisito__text">
              <p class="requisito__p-small">Ser mayor de</p>
              <p class="requisito__p-big">18 años</p>
            </div>
          </div>
        </div>

        <div class="requisito__card col col-12 col-lg-4">
          <div class="requisito__inner d-flex flex-column justify-content-center align-items-center">
            <div class="whiteButton requisito__image d-flex align-items-center justify-content-center">
              <img src="img\icon_estadia.svg" alt="Ícono de una cama." class="requisito__img">
            </div>
            <div class="text-center requisito__text">
              <p class="requisito__p-small">Tener una estadía mínima</p>
              <p class="requisito__p-big">de tres noches</p>
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
      <h2 class="h2">Preguntas Frecuentes</h2>
    </div>

    <div class="row">
      <div class="legales__accordion col-12 col-lg-10 offset-lg-1" id="legales__accordion">

        <!-- ////////////    ITEM 1     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button h5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <span class="accordion-letter">1</span> ¿Qué es Tesoros Argentinos?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
             <p> Tesoros Argentinos es el programa que te premia por viajar a la Argentina, mediante tus pasajes desde el exterior y tus reservas por alojamiento. </p>
             <p>Consiste en una gift card digital, con la cual podrás cambiar puntos por experiencias turísticas en la plataforma web de Tesoros Argentinos.
              </p>

            </div>
          </div>
        </div>

        <!-- ////////////    ITEM 2     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <span class="accordion-letter">2</span> ¿En qué consisten los premios?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
             <p>Te regalamos puntos para canjear por experiencias turísticas, las cuales puedes encontrar en nuestra plataforma web. Tenemos un gran catálogo de más de 1400 experiencias para que disfrutes en tu viaje.</p>

              <p>Obtendrás una gift card digital en forma de acceso a la plataforma exclusiva del programa de experiencias de Tesoros Argentinos.</p> 

            </div>
          </div>
        </div>

        <!-- ////////////    ITEM 3     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <span class="accordion-letter">3</span> ¿Cuáles son los requisitos?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
              <p>Pueden participar de Tesoros Argentinos turistas extranjeros mayores de 18 años (no argentinos) que tengan una estadía de al menos 3 noches.</p>                 
            </div>
          </div>
        </div>

        <!-- ////////////    ITEM 4     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <span class="accordion-letter">4</span> ¿Cómo puedo participar?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
             <p>Antes de viajar, deberás completar un formulario online con tus datos y comprobantes. Con ese simple trámite ya participas por una gift card digital. </p>
            </div>
          </div>
        </div>

        <!-- ////////////    ITEM 5     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <span class="accordion-letter">5</span> Si viajo con mi familia, ¿puedo anotar a todos los integrantes?
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
              <p>SÍ. Cada persona mayor de 18 años podrá enviar su comprobante, documento de viaje y su mail particular.</p>      
            </div>
          </div>
        </div>


        <!-- ////////////    ITEM 6     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              <span class="accordion-letter">6</span> ¿Cómo me informan si entré a Tesoros Argentinos?
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
              <p>Si obtuviste la gift card, recibirás un mail desde la casilla no-reply@pass.argentina.travel con tu usuario y contraseña para ingresar a la plataforma web de Tesoros Argentinos.</p>
              <p>Deberás ingresar y completar los datos para la creación de tu cuenta en la plataforma.</p>
              <p>Una vez que tengas tu cuenta registrada, los puntos demorarán hasta 72 hs. en validarse.</p>
            </div>
          </div>
        </div>


        <!-- ////////////    ITEM 7     ///////////-->

        <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
          <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              <span class="accordion-letter">7</span> Ya tengo mi cuenta, ¿cuándo se validan mis puntos?
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#legales__accordion">
            <div class="accordion-body p">
              <p>Luego de crear tu cuenta en la plataforma web de Tesoros Argentinos, dentro de las 72 hs., se validarán tus puntos. A partir de ese momento, podrás canjearlos por las experiencias publicadas.</p>
            </div>
          </div>
        </div>

      <!-- ////////////    ITEM 8     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingEight">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
          <span class="accordion-letter">8</span> Accedí a la plataforma pero no tengo puntos para canjear.
        </button>
      </h2>
      <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Una vez que hayas creado tu cuenta en la plataforma web de Tesoros Argentinos, se validarán tus puntos entre las 48 hs. y 72 hs.</p>
        </div>
      </div>
    </div>

    <!-- ////////////    ITEM 9     ///////////-->
    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingNine">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
          <span class="accordion-letter">9</span> ¿Cómo canjeo mis puntos por experiencias?
        </button>
      </h2>
      <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>En la plataforma web de Tesoros Argentinos podrás ver las indicaciones para canjear cada experiencia. Podrás elegir entre las más de 1400 experiencias filtrando por tipo de experiencia o por provincia de Argentina.</p>
          <p>Allí tendrás un botón para canjear la experiencia. <strong>Es obligatorio canjear tus puntos en la plataforma para poder usarlas.</strong> </p>
          <p>Algunas experiencias requieren reservas. Una vez que canjees tus puntos, recibirás los datos de contacto de la experiencia para que puedas reservar.</p>
          <p>Una vez canjeada, recibirás un mail con un código. Deberás presentar ese código para acceder a la experiencia o reservar tu lugar. Recuerda indicar que tienes <strong>un código de BIG BOX.</strong></p>
        </div>
      </div>
    </div>

     <!-- ////////////    ITEM 10     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingTen">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
          <span class="accordion-letter">10</span> ¿Cómo debo reservar una experiencia?
        </button>
      </h2>
      <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Algunas experiencias requieren reservas. Una vez que canjees tus puntos, recibirás los datos de contacto de la experiencia para que puedas reservar.</p>
        </div>
      </div>
    </div>

    <!-- ////////////    ITEM 11     ///////////-->
    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingEleven">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
          <span class="accordion-letter">11</span> Al acudir a la experiencia no identifican a Tesoros Argentinos, ¿qué debo hacer?
        </button>
      </h2>
      <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Algunas experiencias pueden referirse a Tesoros Argentinos por el nombre de la tecnología que utilizamos para el programa.</p>
          <p>En este caso, indícale al prestador de la experiencia  que <strong>el código es de “BIG BOX”.</strong></p>
        </div>
      </div>
    </div>

     <!-- ////////////    ITEM 12     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingTwelve">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
          <span class="accordion-letter">12</span> ¿Puedo obtener más puntos?
        </button>
      </h2>
      <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>No, por el momento no es posible obtener más puntos. Algunas experiencias ofrecen la oportunidad de agregar más servicios pagos, estas ofertas no dependen del programa Tesoros Argentinos.</p>
        </div>
      </div>
    </div>

    <!-- ////////////    ITEM 13     ///////////-->
    <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
      <h2 class="accordion-header" id="headingThirteen">
        <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
          <span class="accordion-letter">13</span> Vivo en el exterior, pero tengo un ticket aéreo desde un aeropuerto que está dentro de Argentina, ¿me sirve?             
        </button>
      </h2>
      <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#legales__accordion">
        <div class="accordion-body p">
          <p>Solamente son válidos los tickets aéreos en los que consta que el turista viaja desde algún
            aeropuerto / destino que no se encuentra dentro de Argentina.</p>
        </div>
      </div>
    </div>

   <!-- ////////////    ITEM 14     ///////////-->
   <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
    <h2 class="accordion-header" id="headingFourteen">
      <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
        <span class="accordion-letter">14</span> ¿Cuáles son los términos legales del programa?
      </button>
    </h2>
    <div id="collapseFourteen" class="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#legales__accordion">
      <div class="accordion-body p">

          <!-- CONDICIONES GENERALES -->
          <div>
            <p class="legal-title">A. Condiciones Generales </p>
            <p> 1. El Instituto Nacional de Promoción Turística (en adelante "INPROTUR") creó, a través de su Dirección de Promoción Internacional, el programa denominado “TESOROS ARGENTINOS” (en adelante, el "Programa") de asignación de puntos a través de los consumos efectuados exclusivamente por los turistas extranjeros que visiten la República Argentina (en adelante "Usuario Turista"). Estos puntos podrán ser usados exclusivamente en el Programa, a través de una plataforma de canje creada a tal efecto por el INPROTUR junto a la empresa Bigbox S.A., CUIT 30-71109155-2. La plataforma de canje fue desarrollada especialmente para el Programa.</p>
            <p>
              Quedan expresamente excluidos del Programa los consumos efectuados por turistas nacionales y/o personas jurídicas nacionales y extranjeras.
            </p>
          </div>

          <br>
          <br>
          <!-- ADQUISION DE PUNTOS -->

          <div>
            <p class="legal-title">B. Adquisión de puntos</p>
            <p>1. Los Usuarios Turistas que efectúen la compra de un pasaje o paquete turístico con destino a la República Argentina entre las fechas 01/01/2023 e 31/12/2023 o hasta agotar el stock disponible para el Programa, recibirán una “Gift Card” personal e intransferible para gastar únicamente en territorio argentino durante su estadía en dicho país. Este beneficio se aplicará a los pasajes o paquetes comprados a empresas de transporte y/o agencias seleccionadas por INPROTUR para promocionar el beneficio.</p>

            <p>2. En caso de la empresa fluvial Buquebus, el Programa será implementado solamente para pasajeros que adquieran Paquetes Turísticos (combo de Pasaje y Hospedaje).</p>

            <p>
              3. Para poder acceder al Programa, los que compren el pasaje o paquete turístico en las fechas establecidas deben tener nacionalidad que no sea argentina, ya que el Programa está apuntado a fomentar el turismo internacional en Argentina.
              Por tal motivo, las personas que solamente posean nacionalidad argentina no participarán en el Programa.
            </p>

            <p>4. La mencionada compra de pasajes entre las fechas 01/01/2023 e 31/12/2023 tiene que haberse realizado una vez lanzada la campaña con cada empresa correspondiente. El beneficio no es retroactivo: las personas que hayan comprado antes de que la empresa lance la campaña publicitaria, no participarán del Programa.</p>

            <p>5. El beneficio del Programa se visualizará en forma de puntos, los cuales serán otorgados a partir del tipo de cambio oficial entre dólar estadounidense y peso argentino en la fecha en la que INPROTUR envíe los e-mails con la invitación a los beneficiarios, según lo establecido en el punto B.10.</p>

            <p>6. Las relaciones de acumulación de puntos mencionadas podrán ser modificadas a criterio del INPROTUR. No se computarán fracciones de Puntos.</p>

            <p>7. Los puntos acumulados en el Programa no constituyen propiedad de los Usuarios turistas. Los puntos no son transferibles a ninguna otra persona o entidad ni bajo ningún título o causa y tampoco podrán ser transferidos a ninguna otra cuenta del Programa, salvo expreso consentimiento de INPROTUR.</p>

            <p>8. Los puntos acumulados en el Programa no tienen valor monetario alguno y no podrán ser canjeados por dinero.</p>

            <p>9. Al efectuar la compra del pasaje durante las fechas indicadas, la empresa o agencia turística emisora enviará al INPROTUR los siguientes datos del turista que haya hecho la compra: nombre y apellido, correo electrónico, fecha de ingreso y egreso a la República Argentina. Solamente se compartirán esos datos a los efectos de proceder con la creación de su Gift Card para asignar así los puntos obtenidos en el Programa, según la cantidad de días que dure su estancia en la República Argentina.</p>

            <p>10. INPROTUR informará vía e-mail a los Usuarios Turistas sobre los puntos acumulados en el Programa. Sin perjuicio de ello, los Usuarios Turistas podrán consultar sus Puntos a través del Sitio Web de “Tesoros Argentinos”.</p>
          </div>

          <br>
          <br>
          <!-- ACTIVACION DE PUNTOS Y VIGENCIA -->
          <div>
            <p class="legal-title">C. Activación de los puntos y vigencia</p>
              <p>1. Para poder canjear los Puntos, el Usuario Turista deberá pasar por dos instancias. En primer lugar, tendrá que acreditarse en el Sitio Web de “Tesoros Argentinos”, en donde deberá completar los siguientes datos para poder acceder y poder ver los beneficios ofrecidos: </p>
                 
              <p>
                - Nombre y apellido<br>
                - Fecha de nacimiento<br>
                - Género<br>
                - País de nacimiento<br>
                - País de residencia<br>
                - Teléfono<br>
                - Número del documento de identidad con el que viajará a Argentina<br>
                - Expectativas del viaje<br>
                - Canal por el que se enteró del beneficio <br>
              </p>
                         
              <p>2. El Sitio Web de “Tesoros Argentinos” estará disponible en tres idiomas para que el turista pueda seleccionar el que prefiera. Estos idiomas son: castellano, portugués e inglés. INPROTUR se reserva la potestad de ofrecer más idiomas si lo considerara necesario.</p>
              
             <p> 3. En segundo lugar, el Usuario Turista deberá activar su beneficio al llegar a la República Argentina en las sedes de activación creadas a tal efecto. Este trámite es ineludible: si el turista no activa los puntos en estas sedes, no podrá hacer uso del beneficio.</p>
              
             <p> 4. Los puntos tienen un Plazo de Vigencia de 30 días desde la fecha en la que se realiza la activación en las sedes de activación físicas dispuestas por el INPROTUR en el territorio de la República Argentina. </p>
             
             <p> 5. Los puntos que no fueran utilizados por el Usuario turista durante su estadía en la República Argentina, por cualquier causa o fuerza mayor, o por haber transcurrido 30 días desde su activación, automáticamente regresarán al INPROTUR a los efectos de poder ser utilizados por nuevos beneficiarios. De esta forma, una vez finalizado el plazo de 30 días desde su activación en sedes de activación, el Usuario turista quedará sin saldo de puntos a su favor.</p>
          </div>

          <br><br>
          <!-- UTILIZACIÓN DE PUNTOS -->
          <div>
              <p class="legal-title">D. Utilización de puntos</p>
              <p> 1. El Usuario turista podrá cambiar los puntos por cualquiera de las Experiencias ofrecidas en el Programa, siempre y cuando cuente con la cantidad de puntos necesarios para dicha actividad. Las Experiencias incluyen y se limitan a lo detallado en el Sitio Web de “Tesoros Argentinos” y no incluyen costos de traslados, servicios extras, lavado de ropa, propinas, tasas sobre servicios ni tributos aplicables.</p>
               
              <p> 2. El Usuario Turista (i) deberá contactarse directamente con el Prestador (utilizando los datos de contacto proporcionados en el Sitio Web de “Tesoros Argentinos”) y reservar la fecha en la cual desea hacer uso de la experiencia; o (ii) deberá gestionar la reserva de la Experiencia a través del Sitio Web de “Tesoros Argentinos”, en el caso de que dicha opción esté disponible para la Experiencia específica contratada. En dicha oportunidad, el Usuario Turista deberá proporcionarle el Código al Prestador para que éste verifique su vigencia y que el mismo pueda ser utilizado para la Experiencia seleccionada. La fecha de la reserva no podrá ser posterior al vencimiento del Plazo de Vigencia.</p>
               
               <p>3. Sin perjuicio de lo anterior, el Usuario Turista podrá contactarse con el Prestador y solicitar la cancelación de la reserva, la cual deberá ser efectuada en el plazo que el Prestador le indique al momento de efectuar la reserva.</p>
          </div>

          <br><br>

          <!-- OBLIGACIONES DEL USUARIO TURISTA -->
          <div>
          <p class="legal-title">E. Obligaciones del usuario turista</p>
          <p>1. El Usuario Turista deberá escoger la Experiencia de su interés bajo su exclusiva responsabilidad, así como también deberá ocuparse de contactar al Prestador y realizar las reservas que correspondan. El ofrecimiento por parte del Prestador de la Experiencia de que se trate estará sujeto a su disponibilidad, así como a sus normas y políticas generales, incluyendo pero no limitándose a normas y políticas en materia de admisión y permanencia, seguridad, cancelaciones, edad mínima y máxima, condición física, y las que INPROTUR y/o Bigbox y/o el Prestador pudieran razonablemente establecer de tiempo en tiempo. </p>
          
          <p> 2. El Usuario Turista asume la obligación de informarse previamente de las normas y/o políticas que pudieran ser exigidas por el Prestador, y se compromete a aceptar tales políticas y normas, así como las restantes condiciones que pudieran ser razonablemente exigidas por cualquier Prestador. </p>
            
            <p>3. En caso de que el Usuario Turista voluntariamente cancele la participación en el Programa, todos los puntos acumulados en el Programa quedarán automáticamente inutilizados hasta la finalización del plazo de activación.</p>
            
            <p>4. Todos los Usuarios Turistas adheridos al Programa autorizan a INPROTUR a difundir y/o divulgar sus imágenes filmadas o fotografiadas en los medios y la forma que INPROTUR considere conveniente, sin retribución alguna.</p>
        </div>
        <br><br>

        <!-- PRESTADORES DE EXPERIENCIAS Y BENEFICIOS -->
        <div>
          <p class="legal-title">F. Prestadores de experiencias y beneficios</p>
          <p>1. Los Prestadores son seleccionados por Bigbox. INPROTUR tiene la potestad de proponer nuevos Prestadores y nuevas Experiencias. También INPROTUR tiene la potestad de quitar experiencias y beneficios ofrecidos en su Sitio Web de “Tesoros Argentinos”.</p>

          <p>2. El rechazo de cualquier Prestador a ofrecer al Usuario Turista una determinada Experiencia por cualquier hipótesis de inobservancia a tales políticas y/o normas no será considerada por el Usuario Turista como discriminación y/o incumplimiento, y por tanto no entrañará responsabilidad alguna de tal Prestador, INPROTUR o Bigbox.</p>
        </div>

        <br><br>

        <!-- DISPOSICIONES GENERALES -->
        <div>
          <p class="legal-title">G. Disposiciones Generales</p>
          <p>1. Los Puntos acumulados deben ser utilizados de acuerdo con las condiciones del Programa. INPROTUR no se hace responsable por pasajes, alojamientos, certificados o vouchers perdidos, hurtados, robados o no utilizados.</p>
         <p> 2. INPROTUR se reserva el derecho de modificar, agregar o cancelar cualquier premio sin previo aviso como así también los puntos necesarios para acceder a cada uno de ellos.</p>

          <p>3. INPROTUR se reserva el derecho de dejar sin efecto el Programa o de modificar total o parcialmente los términos y condiciones del mismo en cualquier momento.</p>

          <p>4. Cualquier fraude o abuso relacionado con la acumulación de puntos, atribuidos al Usuario turista, tendrá por resultado la pérdida de los puntos acumulados, así como la cancelación de la Cuenta del Programa.</p>

         <p> 5. Todas las preguntas o asuntos concernientes al Programa serán resueltos por INPROTUR y/o Bigbox.</p>

          <p>6. El hecho que INPROTUR omita la exigencia de un término o condición en particular, no constituye una renuncia por parte de INPROTUR a dicho término o condición.</p>

          <p>7. La participación en el Programa implica el conocimiento y aceptación, por los Usuarios Turistas, de todas las condiciones establecidas en estos términos y condiciones. Estas Condiciones Generales revisten carácter vinculante y, en caso de no aceptarlas, el Usuario Turista deberá abstenerse de adquirir las Experiencias y/o de recibirlas de los Prestadores y/o de ejercer de cualquier forma y con cualquier alcance los derechos inherentes a la titularidad de los Códigos.</p>
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
            <img src="img\tesorosargentinos_logoblanco.svg" alt="Logo Tesoros Argentinos" class="img-fluid">
          </div>
          <div class="footer__logo logo__visit col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-center justify-content-center">
            <p>Una iniciativa de</p>
            <img src="img\visitArgentina_logo.svg" alt="logo Visit Argentina" class="img-fluid">
          </div>
        </div>
        
      </div>

      <div class="container footer__divider"></div>        

      <div class="footer__links ">
        <ul class="d-flex justify-content-center align-items-center footer__links_list">
          <li class="footer__link d-flex"><a href='#inscripcion' id="footer__link-inscripcion" class="whiteButton">Inscripción</a></li>
          <li class="footer__link d-flex"><a href='#experiencias'  id="footer__link-experiencias" class="whiteButton">Experiencias</a></li>
          <li class="footer__link d-flex"><a href='#requisitos'  id="footer__link-requisitos" class="whiteButton">Requisitos</a></li>
          <li class="footer__link d-flex"><a href='#preguntas'  id="footer__link-legales" class="whiteButton">Preguntas Frecuentes</a></li>
        </ul>
      </div>

      <div class="footer__social">
        <ul class="d-flex align-items-center justify-content-center footer__social_list">
          <li class="footer__social_icon"><a href="https://www.instagram.com/visitargentina/" target="_blank"><img class="footer__social_icon-img" src="img\instagram_icon.svg" alt="Icono de Instagram"></a></li>
          <li class="footer__social_icon"><a href="https://www.facebook.com/visitarg/" target="_blank"><img class="footer__social_icon-img" src="img\facebook_icon.svg" alt="Icono de Facebook"></a></li>
          <li class="footer__social_icon"><a href="https://twitter.com/visitargentina" target="_blank"><img class="footer__social_icon-img" src="img\twitter_icon.svg" alt="Icono de Twitter"></a></li>
          <li class="footer__social_icon"><a href="https://www.tiktok.com/@visitargentina_" target="_blank"><img class="footer__social_icon-img" src="img\tiktok_icon.svg" alt="Icono de TikTok"></a></li>
          <li class="footer__social_icon"><a href="https://www.youtube.com/channel/UC9w7aOZMl9a1l9boy4Y-xGg" target="_blank"><img class="footer__social_icon-img" src="img\youtube_icon.svg" alt="Icono de Youtube"></a></li>
        </ul>
      </div>
    </div>
    

  </footer>`

  events();
}

export default translateSpanish;
import animacionRequisito from './../requisitos.js';
import events from "./../events.js";


function translateEnglish() {

   // NAV
   document.getElementById("nav-inscripcion").innerHTML  ="Enrolment";
   document.getElementById("nav-experiencias").innerHTML  ="Experiences";
   document.getElementById("nav-requisitos").innerHTML  ="Requirements";
   document.getElementById("nav-legales").innerHTML  ="FAQ";

  document.getElementById("main").innerHTML =  String.raw`<!-- WHATSAPP WIDGET -->
  <!-- <div class="whatsapp_widget">
    <div class="whiteButton whatsapp_description">
      <p>Questions? <span>Contact us!</span></p>
    </div>
      <a class="purpleButton whatsapp_button" href="https://api.whatsapp.com/send?phone=5491122403532" target="_blank" rel="noopener noreferrer">
        <img src="img\whatsapp_icon.svg" alt="Whatsapp icon">
      </a>       
  </div> -->

  <div class="whatsapp_widget">
        <div class="whiteButton whatsapp_description">
          <p>Questions? Contact us! <br><span> <a href="mailto:tesorosargentinos@argentina.travel" target="_blank">tesorosargentinos@argentina.travel</a> </span></p>
        </div>
          <!-- <a class="purpleButton whatsapp_button" href="https://api.whatsapp.com/send?phone=5491122403532" target="_blank" rel="noopener noreferrer">
            <img src="img\whatsapp_icon.svg" alt="Icono de whatsapp">
          </a>        -->
      </div>
  

  <!-- HOME -->
  <section class="home container-sm d-flex align-items-center" id="home" data-aos="fade-in" data-aos-easing="ease-in-out">
    <div class="row d-flex align-items-center">
      <div class="order-lg-2 col-lg-5 home__image">
        <img src="img\home__img.png" alt="Woman holding her mobile phone and celebrating." class="img-fluid home__img">
      </div>
      <div class="order-lg-1 col-lg-5 offset-lg-1 home__text">
        <p class="p text-uppercase">Visit Argentina presents</p>
        <h1 class="h1">Tesoros <span>Argentinos</span></h1>
        <p class="p-big">If you are a foreigner, and you are travelling to Argentina, you can get a Gift Card of up to <strong>USD 200</strong> to redeem for experiences during your stay.</p>
        <button class="goldenButton hoverGoldenButton" id="hero-button"><a href="#inscripcion">Complete form</a></button>
      </div>
    </div>
  </section>

  <!-- STEPS -->
  <section class="steps container-sm" id="steps">
      <div class="steps__title row" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div class="col col-lg-10 offset-lg-1 col-xxl-8 offset-xxl-2">
          <h3 class="h2">Sign up. Travel. <br><span id="steps__highlight-1" data-annotate>Enjoy your </span><span id="steps__highlight-2" data-annotate>treasure.</span></h3>
          <p class="p-big">Enjoy the best experiences of Argentina: gastronomy, adventure, wellness, and shows! <strong>No raffles: the steps are very simple!</strong></p>
        </div>
        
      </div>

      <div class="row d-flex align-items-end steps__list" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">

        <div class="order-lg-2 col-12 col-lg-6 col-xxl-5 offset-xxl-1 steps__image d-flex align-items-center justify-content-center">
          <img src="img\steps__image.png" alt="Woman laughing, holding a glass of wine." class="img-fluid steps__img">
          <img src="img\steps__image-small.png" alt="Woman laughing, holding a glass of wine." class="img-fluid steps__img-small">
        </div>

        <div class="order-lg-1 col-12 col-lg-6" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">

              <div class="whiteButton steps__item steps__item-01">
                <div class="purpleButton steps__indicator"><img class="steps__indicator-img" src="img/steps_inscripcion.svg" alt="Pencil icon writing on a sheet of paper."><p class="steps__indicator-num">1</p></div>
                <div>
                  <p class="p steps-p">Fill out the <u><a href="#inscripcion" id="steps-inscripcion">form</a></u> below with your information and the details of your trip. The longer you stay, the greater the amount of your Gift Card!</p>
                </div>
              </div>

              <div class="whiteButton steps__item steps__item-02">
                <div class="purpleButton steps__indicator"><img class="steps__indicator-img" src="img/steps_requisitos.svg" alt="Icon of a tick in a circle."><p class="steps__indicator-num">2</p></div>
                <div>
                  <p class="p steps-p">If you meet the <u><a href="#requisitos" id="steps-requisitos">requirements,</a></u> you will be registered on our platform, where you will be able to see the points on your Gift Card and the experiences available.</p>
                </div>
              </div>

              <div class="whiteButton steps__item">
                <div class="purpleButton steps__indicator"><img class="steps__indicator-img" src="img\steps_regalo.svg" alt="Icon of a gift."><p class="steps__indicator-num">3</p></div>
                <div>
                  <p class="p steps-p">Once in Argentina, your gift card will be validated automatically. <strong>Redeem your points</strong> on the platform to enjoy the treasures.</p>
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
              <img src="img\inscripcion_icon.svg" alt="Pencil icon writing on a sheet of paper." class="inscripcion__icon">
              <h2 class="h2">Enrolment</h2>
            </div>
            <p class="p-big">Fill in the form below, and attach your <strong>ticket and accommodation voucher.</strong></p>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 order-md-2 inscripcion__image-small d-flex align-items-center"><img src="img\inscripcion__image-small.png" alt="Woman rafting." class="img-fluid inscripcion__img-small"></div>

            <div class="col-12 col-md-6 col-lg-12 order-md-1 whiteButton inscripcion__form-container d-flex align-items-center">
                <div data-tf-widget="IgU7aBIJ" data-tf-inline-on-mobile data-tf-opacity="100" data-tf-iframe-props="title=formularioWeb_ENG" data-tf-transitive-search-params data-tf-medium="snippet" style="width:90%;height:300px;margin:2rem auto;"></div><script src="//embed.typeform.com/next/embed.js"></script>
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
        <img src="img\experiencias_icon.svg" alt="Icon of a gift." class="experiencias__icon">
        <h2 class="h2 text-center">Experiences</h2>
      </div>
      <p class="p-big text-center">Choose your favourite experience among <strong>1500 options</strong> across the country.</p>
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
                    <img src="img\gastronomia_icon.svg" alt="Icon of a fork and a knife." class="experiencias__item-icon">
                    <h3 class="h3">Gastronomy</h3>
                  </div>
                  <p class="experiencias__item-p p">
                    Argentinian gastronomy combines multiple influences: the tradition of native peoples and Creole cuisine, the influence of European culture, and the modernism of fusion cuisine that is today in a boom of experimentation. Come and try flavours that you will never forget!
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
                  <img src="img\bienestar_icon.svg" alt="Icon of a person meditating." class="experiencias__item-icon">
                  <h3 class="h3">Wellness</h3>
                </div>
                <p class="experiencias__item-p p">
                    Wellness experiences help you unwind from the daily whirlwind. In Argentina, we have a wide range of options, ranging from massage sessions, yoga classes and aesthetic treatments to spa days and relaxing physical activities across the whole country.
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
                <img src="img\aventura_icon.svg" alt="Icon of a tent." class="experiencias__item-icon">
                <h3 class="h3">Adventure</h3>
              </div>
              <p class="experiencias__item-p p">
                In Argentina, you can find the type of adventure you are looking for based on your personality. Whether you love the air, the water, the land, or the snow, here you will find the ideal activity to stimulate the senses and connect with Argentina’s wonderful nature.
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
              <img src="img\entretenimiento_icon.svg" alt="Icon of a star." class="experiencias__item-icon">
              <h3 class="h3">Entertainment</h3>
            </div>
            <p class="experiencias__item-p p">
                The passion for sharing is, for sure, Argentinians’ distinctive trait. That is why we have a wide range of fun options! You can choose one that suits you best and experience it in the Argentinian way: listen to a jazz band, take an inspiring class, or participate in a gourmet experience, among others.
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
        <h2 class="h2">Requirements</h2>
      </div>

      <div class="whiteButton row d-flex align-items-center requisitos__container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">

        <div class="requisito__card requisito-active col-12 col-lg-4">
          <div class="requisito__inner d-flex flex-column justify-content-center align-items-center">
            <div class="whiteButton requisito__image d-flex align-items-center justify-content-center">
              <img src="img\icon_nacionalidad.svg" alt="Icon of a globe." class="requisito__img">
            </div>
            <div class="text-center requisito__text">
              <p class="requisito__p-small">Non-Argentinian</p>
              <p class="requisito__p-big">nationality</p>
            </div>
          </div>
        </div>

        <div class="requisito__card col col-12 col-lg-4">
          <div class="requisito__inner d-flex flex-column justify-content-center align-items-center">
            <div class="whiteButton requisito__image d-flex align-items-center justify-content-center">
              <img src="img\icon_edad.svg" alt="Icon of a number 18 with a plus sign to its right." class="requisito__img">
            </div>
            <div class="text-center requisito__text">
              <p class="requisito__p-small">Must be</p>
              <p class="requisito__p-big">+18 years old</p>
            </div>
          </div>
        </div>

        <div class="requisito__card col col-12 col-lg-4">
          <div class="requisito__inner d-flex flex-column justify-content-center align-items-center">
            <div class="whiteButton requisito__image d-flex align-items-center justify-content-center">
              <img src="img\icon_estadia.svg" alt="Icon of a bed." class="requisito__img">
            </div>
            <div class="text-center requisito__text">
              <p class="requisito__p-small">Must stay at least</p>
              <p class="requisito__p-big">three nights</p>
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
       <h2 class="h2">FAQ</h2>
     </div>
 
     <div class="row">
       <div class="legales__accordion col-12 col-lg-10 offset-lg-1" id="legales__accordion">
 
         <!-- ////////////    ITEM 1     ///////////-->
 
         <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
           <h2 class="accordion-header" id="headingOne">
             <button class="accordion-button h5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <span class="accordion-letter">1</span> What is the Tesoros Argentinos Programme?
             </button>
           </h2>
           <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#legales__accordion">
             <div class="accordion-body p">
              <p>Tesoros Argentinos is the programme that rewards you for travelling to Argentina by submitting your tickets from abroad and your accommodation reservation.</p>
              <p>It is a digital gift card with points that you can redeem for tourist experiences on the Tesoros Argentinos web platform.
               </p>
 
             </div>
           </div>
         </div>
 
         <!-- ////////////    ITEM 2     ///////////-->
 
         <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
           <h2 class="accordion-header" id="headingTwo">
             <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <span class="accordion-letter">2</span> What are the prizes?
             </button>
           </h2>
           <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#legales__accordion">
             <div class="accordion-body p">
              <p>You will have points to redeem for tourist experiences, which you can find on our web platform. We have a large catalog of more than 1,400 experiences that you can enjoy on your trip.</p>
 
               <p>You will get a digital gift card to access the exclusive platform of the Tesoros Argentinos experiences programme.</p> 
 
             </div>
           </div>
         </div>
 
         <!-- ////////////    ITEM 3     ///////////-->
 
         <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
           <h2 class="accordion-header" id="headingThree">
             <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <span class="accordion-letter">3</span>  Which are the requirements?
             </button>
           </h2>
           <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#legales__accordion">
             <div class="accordion-body p">
               <p>Foreign (i.e., non-Argentinian) tourists over 18 years of age who stay in the country for at least 3 nights can participate in Tesoros Argentinos.</p>                 
             </div>
           </div>
         </div>
 
         <!-- ////////////    ITEM 4     ///////////-->
 
         <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
           <h2 class="accordion-header" id="headingFour">
             <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
               <span class="accordion-letter">4</span> How can I participate?
             </button>
           </h2>
           <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#legales__accordion">
             <div class="accordion-body p">
              <p>Before travelling, you must complete an online form with your information and reservation vouchers. As simply as that: after completing it, you will be participating for a digital gift card.</p>
             </div>
           </div>
         </div>
 
         <!-- ////////////    ITEM 5     ///////////-->
 
         <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
           <h2 class="accordion-header" id="headingFive">
             <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
               <span class="accordion-letter">5</span>  If I travel with my family, can I sign up every family member?
             </button>
           </h2>
           <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#legales__accordion">
             <div class="accordion-body p">
               <p>Yes! Each person over 18 years of age can send their voucher, travel documents, and private email.</p>      
             </div>
           </div>
         </div>
 
 
         <!-- ////////////    ITEM 6     ///////////-->
 
         <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
           <h2 class="accordion-header" id="headingSix">
             <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
               <span class="accordion-letter">6</span> How do I know if I got in the Tesoros Argentinos Programme?
             </button>
           </h2>
           <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#legales__accordion">
             <div class="accordion-body p">
               <p>If you got the gift card, you will receive an email from no-reply@pass.argentina.travel with your username and password to access the Tesoros Argentinos web platform.</p>
               <p>Sing up and complete the information to create your account on the platform.</p>
               <p>Once your account is registered, the points will be validated within 72 hours. </p>
             </div>
           </div>
         </div>
 
 
         <!-- ////////////    ITEM 7     ///////////-->
 
         <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
           <h2 class="accordion-header" id="headingSeven">
             <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
               <span class="accordion-letter">7</span> I already have my account. When will my points be validated?
             </button>
           </h2>
           <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#legales__accordion">
             <div class="accordion-body p">
               <p>After creating your account on the Tesoros Argentinos web platform, your points will be validated within 72 hours. From that moment, you will be able to redeem them for the experiences on the platform.</p>
             </div>
           </div>
         </div>
 
       <!-- ////////////    ITEM 8     ///////////-->
      <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
       <h2 class="accordion-header" id="headingEight">
         <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
           <span class="accordion-letter">8</span> I accessed the platform, but I have no points to redeem
         </button>
       </h2>
       <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#legales__accordion">
         <div class="accordion-body p">
           <p>Once you have created your account on the Tesoros Argentinos web platform, your points will be validated within 48 to 72 hours.</p>
         </div>
       </div>
     </div>
 
     <!-- ////////////    ITEM 9     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
       <h2 class="accordion-header" id="headingNine">
         <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
           <span class="accordion-letter">9</span> How do I redeem my points for experiences?
         </button>
       </h2>
       <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#legales__accordion">
         <div class="accordion-body p">
           <p>On the Tesoros Argentinos web platform, you will see the instructions to redeem the points for experiences. You can choose among more than 1400 experiences filtering by type of experience or by province.</p>
           <p>There will be a button to click on to choose the experience. It is <strong>mandatory</strong> to redeem your points to be able to access an experience. </p>
           <p>Some experiences require booking in advance. Once you redeem your points, you will receive the contact details for that experience so you can book it.</p>
           <p>Once redeemed, you will receive an email with a code. You must present that code to access the experience or book your place. Remember to say that you have <strong>a BIG BOX code.</strong></p>
         </div>
       </div>
     </div>
 
      <!-- ////////////    ITEM 10     ///////////-->
      <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
       <h2 class="accordion-header" id="headingTen">
         <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
           <span class="accordion-letter">10</span> How can I book an experience?
         </button>
       </h2>
       <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#legales__accordion">
         <div class="accordion-body p">
           <p>Some experiences require booking in advance. Once you redeem your points, you will receive the contact details for that experience so you can book it.
         </p>
         </div>
       </div>
     </div>
 
     <!-- ////////////    ITEM 11     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
       <h2 class="accordion-header" id="headingEleven">
         <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
           <span class="accordion-letter">11</span> When getting to the experience, they do not identify Tesoros Argentinos. What should I do?
         </button>
       </h2>
       <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#legales__accordion">
         <div class="accordion-body p">
           <p>Some experiences may refer to Tesoros Argentinos by the name of the technology we use for the programme.</p>
           <p>In this case, tell the experience provider that <strong>you have a “BIG BOX” code.</strong></p>
         </div>
       </div>
     </div>
 
      <!-- ////////////    ITEM 12     ///////////-->
      <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
       <h2 class="accordion-header" id="headingTwelve">
         <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
           <span class="accordion-letter">12</span> Can I get more points?
         </button>
       </h2>
       <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#legales__accordion">
         <div class="accordion-body p">
           <p>No, it is not possible to get more points at the moment. Some experiences offer the possibility of adding more paid services; these do not depend on the Tesoros Argentinos programme.</p>
         </div>
       </div>
     </div>

     <!-- ////////////    ITEM 13     ///////////-->
     <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
       <h2 class="accordion-header" id="headingThirteen">
         <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
           <span class="accordion-letter">13</span>I live abroad, but I have a flight ticket from an airport in Argentina, is it valid?       
         </button>
       </h2>
       <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#legales__accordion">
         <div class="accordion-body p">
           <p>Flight tickets are only valid if they prove that the tourist travels from any airport/destination that is not inside Argentina.
           </p>
         </div>
       </div>
     </div>
 
      <!-- ////////////    ITEM 14     ///////////-->
      <div class="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
       <h2 class="accordion-header" id="headingFourteen">
         <button class="accordion-button collapsed h5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
           <span class="accordion-letter">14</span> Which are the legal terms of the program?
         </button>
       </h2>
       <div id="collapseFourteen" class="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#legales__accordion">
         <div class="accordion-body p">
 
           <!-- CONDICIONES GENERALES -->
           <div>
             <p class="legal-title">A. General Conditions</p>
             <p>1. The National Institute for Tourism Promotion (hereinafter "INPROTUR") created, through its Directorate of International Promotion, the program called "TESOROS ARGENTINOS" (hereinafter, the "Program") for assigning points through the consumption made exclusively by foreign tourists visiting the Argentine Republic (hereinafter "Tourist User"). These points may be used exclusively in the Program, through an exchange platform created for this purpose by INPROTUR together with the company Bigbox S.A., CUIT 30-71109155-2. The exchange platform was developed especially for the Program.</p>
             <p>The consumptions made by national tourists and/or national and foreign legal entities are expressly excluded from the Program.
             </p>
           </div>
 
           <br>
           <br>
           <!-- ADQUISION DE PUNTOS -->
 
           <div>
             <p class="legal-title">B. Acquisition of points</p>
             <p>1. Tourist Users who make the purchase of a ticket or tourist package to the Argentine Republic between the dates 01/01/2023 and 12/31/2023 or until the stock available for the Program runs out, will receive a “Gift Card ” personal and non-transferable to spend only in the Argentine territory during your stay in that country. This benefit will apply to tickets or packages purchased from transport companies and/or agencies selected by INPROTUR to promote the benefit.</p>
 
             <p>2. In the case of the Buquebus river company, the Program will be implemented only for passengers who purchase Tourist Packages (combo of Ticket and Lodging).</p>
 
             <p>
                 3. In order to access the Program, those who buy the ticket or tourist package on the established dates must have a nationality other than Argentina, since the Program is aimed at promoting international tourism in Argentina. For this reason, people who only have Argentine nationality will not participate in the Program.
             </p>
 
             <p>4. The aforementioned purchase of tickets between the dates 01/01/2023 and 12/31/2023 must have been made once the campaign was launched with each corresponding company. The benefit is not retroactive: people who have bought before the company launches the advertising campaign will not participate in the Program.</p>
 
             <p>5. The benefit of the Program will be displayed in the form of points, which will be awarded based on the official exchange rate between the US dollar and the Argentine peso on the date INPROTUR sends the e-mails with the invitation to the beneficiaries, according to what is established in point B.10.</p>
 
             <p>6. The aforementioned points accumulation ratios may be modified at the discretion of INPROTUR. Fractions of Points will not be computed.</p>
 
             <p>7. The points accumulated in the Program do not constitute property of the tourist Users. The points are not transferable to any other person or entity or under any title or cause and may not be transferred to any other Program account, except with the express consent of INPROTUR.</p>
 
             <p>8. The points accumulated in the Program have no monetary value and cannot be exchanged for money.</p>
 
             <p>9. When making the purchase of the ticket during the indicated dates, the issuing tourist company or agency will send INPROTUR the following data of the tourist who has made the purchase: name and surname, email, date of entry and exit to the Argentine Republic. This data will only be shared for the purpose of proceeding with the creation of your Gift Card to assign the points obtained in the Program, according to the number of days that your stay in the Argentine Republic lasts.</p>
 
             <p>10. INPROTUR will inform the Tourist Users via e-mail about the points accumulated in the Program. Notwithstanding the foregoing, Tourist Users may consult their Points through the “Argentine Treasures” Website.</p>
           </div>
 
           <br>
           <br>
           <!-- ACTIVACION DE PUNTOS Y VIGENCIA -->
           <div>
             <p class="legal-title">C. Activation of points and validity</p>
               <p>1. In order to redeem the Points, the Tourist User must go through two instances. In the first place, you will have to accredit yourself on the “Argentine Treasures” Website, where you must complete the following information to be able to access and see the benefits offered:</p>
                  
               <p>
                 - Name and surname <br>
                 - Date of birth <br>
                 - Gender <br>
                 - Country of birth <br>
                 - Country of residence <br>
                 - Telephone <br>
                 - Number of the identity document with which you will travel to Argentina<br>
                 - Trip expectations<br>
                 - Channel through which you found out about the benefit<br>
               </p>
                          
               <p>2. The “Tesoros Argentinos” Website will be available in three languages ​​so that tourists can select the one they prefer. These languages ​​are: Spanish, Portuguese and English. INPROTUR reserves the right to offer more languages ​​if it deems it necessary.</p>
               
              <p>3. Secondly, the Tourist User must activate their benefit upon arrival in the Argentine Republic at the activation centers created for this purpose. This procedure is unavoidable: if the tourist does not activate the points in these venues, he will not be able to use the benefit.</p>
               
              <p>4. The points have a Term of Validity of 30 days from the date on which the activation is made in the physical activation sites arranged by INPROTUR in the territory of the Argentine Republic.</p>
              
              <p>5. The points that were not used by the tourist User during their stay in the Argentine Republic, for any reason or force majeure, or because 30 days have elapsed since their activation, will automatically return to INPROTUR in order to be used by new beneficiaries. In this way, once the period of 30 days has elapsed since its activation in activation venues, the tourist User will be left without a balance of points in his favor.</p>
           </div>
 
           <br><br>
           <!-- UTILIZACIÓN DE PUNTOS -->
           <div>
               <p class="legal-title">D. Use of points</p>
               <p>1. The tourist User may exchange the points for any of the Experiences offered in the Program, as long as he has the number of points necessary for said activity. The Experiences include and are limited to what is detailed on the "Argentine Treasures" Website and do not include transportation costs, extra services, laundry, tips, service fees or applicable taxes.</p>
                
               <p>2. The Tourist User (i) must contact the Provider directly (using the contact information provided on the “Tesoros Argentinos” Website) and reserve the date on which they wish to use the experience; or (ii) must manage the reservation of the Experience through the Website of "Argentine Treasures", in the event that said option is available for the specific Experience contracted. On said occasion, the Tourist User must provide the Code to the Provider so that it can verify its validity and that it can be used for the selected Experience. The date of the reservation may not be after the expiration of the Term of Validity.</p>
                
                <p>3. Notwithstanding the foregoing, the Tourist User may contact the Provider and request the cancellation of the reservation, which must be made within the period indicated by the Provider at the time of making the reservation./p>
           </div>
 
           <br><br>
 
           <!-- OBLIGACIONES DEL USUARIO TURISTA -->
           <div>
           <p class="legal-title">E. Obligations of the Tourist User</p>
           <p>1. The Tourist User must choose the Experience of interest to him under his exclusive responsibility, as well as taking care of contacting the Provider and making the corresponding reservations. The offer by the Provider of the Experience in question will be subject to its availability, as well as its general rules and policies, including but not limited to rules and policies regarding admission and permanence, security, cancellations, minimum age and maximum, physical condition, and those that INPROTUR and/or Bigbox and/or the Provider could reasonably establish from time to time.</p>
           
           <p>2. The Tourist User assumes the obligation to be previously informed of the rules and/or policies that may be required by the Provider, and agrees to accept such policies and rules, as well as the remaining conditions that may be reasonably required by any Provider. </p>
             
             <p>3. In the event that the Tourist User voluntarily cancels participation in the Program, all the points accumulated in the Program will be automatically unused until the end of the activation period.</p>
             
             <p>4. All Tourist Users adhered to the Program authorize INPROTUR to disseminate and/or disclose their filmed or photographed images in the media and in the manner that INPROTUR deems appropriate, without any compensation.</p>
         </div>
         <br><br>
 
         <!-- PRESTADORES DE EXPERIENCIAS Y BENEFICIOS -->
         <div>
           <p class="legal-title">F. Providers of experiences and benefits</p>
           <p>1. Providers are selected by Bigbox. INPROTUR has the power to propose new Providers and new Experiences. INPROTUR also has the power to remove experiences and benefits offered on its "Argentine Treasures" Website.</p>
 
           <p>2. The refusal of any Provider to offer the Tourist User a certain Experience for any hypothesis of non-compliance with such policies and/or regulations will not be considered by the Tourist User as discrimination and/or non-compliance, and therefore will not entail any responsibility for such Provider, INPROTUR or Bigbox.</p>
         </div>
 
         <br><br>
         
         <!-- DISPOSICIONES GENERALES -->
         <div>
           <p class="legal-title">G. General Provisions</p>
           <p>1. The accumulated Points must be used in accordance with the conditions of the Program. INPROTUR is not responsible for lost, stolen, stolen or unused tickets, accommodation, certificates or vouchers.</p>
          <p>2. INPROTUR reserves the right to modify, add or cancel any prize without prior notice, as well as the points necessary to access each of them.</p>
 
           <p>3. INPROTUR reserves the right to nullify the Program or to totally or partially modify its terms and conditions at any time.</p>
 
           <p>4. Any fraud or abuse related to the accumulation of points, attributed to the tourist User, will result in the loss of the accumulated points, as well as the cancellation of the Program Account.</p>
 
          <p>5. All questions or matters concerning the Program will be resolved by INPROTUR and/or Bigbox.</p>
 
           <p>6. The fact that INPROTUR omits the requirement of a term or condition and in particular, it does not constitute a waiver by INPROTUR of said term or condition.</p>
 
           <p>7. Participation in the Program implies knowledge and acceptance, by the Tourist Users, of all the conditions established in these terms and conditions. These General Conditions are binding and, in case of not accepting them, the Tourist User must refrain from acquiring the Experiences and/or receiving them from the Providers and/or from exercising in any way and with any scope the rights inherent to the ownership of the codes.</p>
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
            <img src="img\tesorosargentinos_logoblanco.svg" alt="Visit Argentina Logo." class="img-fluid">
          </div>
          <div class="footer__logo logo__visit col-12 col-lg-6 col-xl-5 d-flex flex-column align-items-center justify-content-center">
            <p>An initiative of</p>
            <img src="img\visitArgentina_logo.svg" alt="Tesoros Argentinos logo." class="img-fluid">
          </div>
        </div>
        
      </div>

      <div class="container footer__divider"></div>        

      <div class="footer__links ">
        <ul class="d-flex justify-content-center align-items-center footer__links_list">
          <li class="footer__link d-flex"><a href='#inscripcion' id="footer__link-inscripcion" class="whiteButton">Enrolment</a></li>
          <li class="footer__link d-flex"><a href='#experiencias'  id="footer__link-experiencias" class="whiteButton">Experiences</a></li>
          <li class="footer__link d-flex"><a href='#requisitos'  id="footer__link-requisitos" class="whiteButton">Requirements</a></li>
          <li class="footer__link d-flex"><a href='#preguntas'  id="footer__link-legales" class="whiteButton">FAQ</a></li>
        </ul>
      </div>

      <div class="footer__social">
        <ul class="d-flex align-items-center justify-content-center footer__social_list">
          <li class="footer__social_icon"><a href="https://www.instagram.com/visitargentina/" target="_blank"><img class="footer__social_icon-img" src="img\instagram_icon.svg" alt="Instagram icon."></a></li>
          <li class="footer__social_icon"><a href="https://www.facebook.com/visitarg/" target="_blank"><img class="footer__social_icon-img" src="img\facebook_icon.svg" alt="Facebook icon."></a></li>
          <li class="footer__social_icon"><a href="https://twitter.com/visitargentina" target="_blank"><img class="footer__social_icon-img" src="img\twitter_icon.svg" alt="Twitter icon."></a></li>
          <li class="footer__social_icon"><a href="https://www.tiktok.com/@visitargentina_" target="_blank"><img class="footer__social_icon-img" src="img\tiktok_icon.svg" alt="TikTok icon."></a></li>
          <li class="footer__social_icon"><a href="https://www.youtube.com/channel/UC9w7aOZMl9a1l9boy4Y-xGg" target="_blank"><img class="footer__social_icon-img" src="img\youtube_icon.svg" alt="YouTube icon."></a></li>
        </ul>
      </div>
    </div>
    

  </footer>`

  events();
}

export default translateEnglish;
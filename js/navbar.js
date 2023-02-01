  // NAVBAR
  
  document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    function paddingTop () {
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
    }
    
    paddingTop();
    window.addEventListener('resize', function(){
      if (document.querySelector('.navbar-collapse').classList.contains('show')) {
        document.querySelector('.navbar-collapse').classList.remove('show'); 
      }
        paddingTop();
    })
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;

      }); 
    }
   
  }); 

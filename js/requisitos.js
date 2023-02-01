function animacionRequisito() {
       
    window.setInterval(function () {
        let requisitos_list = document.querySelectorAll(".requisito__card");
    
        for (let i = 0; i < requisitos_list.length; i++) { 
        
            if (requisitos_list[i].classList.contains('requisito-active')) {
    
                requisitos_list[i].classList.remove('requisito-active'); 
    
                if (i < 2 ) {
                    requisitos_list[i+1].classList.add('requisito-active');
                    return;
                } else {
                    requisitos_list[0].classList.add('requisito-active');
                    return;
                }
            }
        }
    }, 2500);
}


export default animacionRequisito;






 function quoteAppear() {
     let quote = document.querySelector('.quote-disappear');
     let distance = quote.getBoundingClientRect().top;
    
     let windowHeight = window.innerHeight / 1.2;

     if(distance < windowHeight){
        quote.classList.add('quote-appear')
     }
 }

 function quoteAppear2() {
    let quote = document.querySelector('.quote-disappear2');
    let distance = quote.getBoundingClientRect().top;
   
    let windowHeight = window.innerHeight / 1.2;

    if(distance < windowHeight){
       quote.classList.add('quote-appear2')
    }
}

window.addEventListener('scroll', quoteAppear);
window.addEventListener('scroll', quoteAppear2);
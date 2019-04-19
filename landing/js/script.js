





class MasterEffect {
   constructor(effect) {
    this.effect = effect;
    
     this.appear = document.querySelector('.quote-disappear');

     this.distance = effect.getBoundingClientRect().top;
     
     this.windowHeight = window.innerHeight / 1.2;

   }
   fadeIn() {
       
    if(this.distance < this.windowHeight + window.scrollY){
       this.effect.classList.add('quote-appear')
    }
   }
}

let effects = Array.from(document.querySelectorAll('.quote-disappear'));  // 1


effects = effects.map(effect => new MasterEffect(effect)); // 2


window.addEventListener('scroll', () => checkMe()); // 3

function checkMe() {
 effects.map(item => {
     item.fadeIn()
 })
}
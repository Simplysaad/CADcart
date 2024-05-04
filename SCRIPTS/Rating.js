const ratingBox =  document.querySelector('#ratingBox');
const ratingStars = document.querySelectorAll('.rating-star');
const interpret = document.querySelector('#rating-interpret');
console.log(ratingStars);

ratingStars.forEach((star, index) => {
    star.addEventListener("click", ()=>{
        ratingStars.forEach((star, i)=>{
            if (i <= index) {
                ratingStars[i].classList.add('selected');
                

                switch (index) {
                    case 0:
                        interpret.innerHTML = "tell us how we can improve";
                      break;
                    case 1:
                    interpret.innerHTML = "that's better";
        break;
    case 2:
        interpret.innerHTML = "nice";
        break;
    case 3:
        interpret.innerHTML = "Excellent";
        break;
    case 4:
        interpret.innerHTML = "Fantabulous";
        break;
    default:
        interpret.innerHTML = "please rate this";
        break;
}
            } else {
                ratingStars[i].classList.remove('selected');
            }
            
        });
       
    });   
    
});


// for (let j = 0; j <= i; j++) {
//  //console.log(ratingStars[j]);
 
// }
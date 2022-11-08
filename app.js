const submitting = document.querySelector('.submit');
const firstContainer = document.querySelector('.min-container');
const secondContainer = document.querySelector('.thanks-popup');
const choosen = document.querySelector('.chosen');
const rating = document.querySelectorAll('.rate');
secondContainer.style.display = 'none';
const ratingn= document.querySelectorAll('.rate-pargrapgh');
rating.forEach((rate) => {
    rate.addEventListener("click", ()=> {
        removeactive();
        rate.classList.add('active');
        
       
    });
})
function removeactive(){
    rating.forEach((rate) => {
        rate.classList.remove('active');

    })
}

submitting.addEventListener("click", function (){
   firstContainer.classList.add('hide');
   secondContainer.style.display = 'flex';
});




ratingn.forEach((pargrapgh)  => {
    pargrapgh.addEventListener("click",() => {
       
        choosen.innerHTML=" "+ pargrapgh.innerHTML
    })
}) 
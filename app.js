const submitting = document.querySelector('.submit');


const rating = document.querySelectorAll('.rate');

rating.forEach((rate) => {
    rate.addEventListener("click", function() {
        removeactiveClass();
        rate.classList.add('active');
        
       
    });
})
submitting.addEventListener("click", function(){ alert("Hello World!"); });


function removeactiveClass(){
    rating.forEach((rate) =>{
        rate.classList.remove('active');

    })
}

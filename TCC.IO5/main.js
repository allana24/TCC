var like = document.querySelectorAll('.card')

document.addEventListener('click', function(e){
    let classlike = e.target; 
    console.log(classlike)

    if (classlike.classList.contains('fa-heart')){
        classlike.classList.toggle('fa-solid');
    }
})

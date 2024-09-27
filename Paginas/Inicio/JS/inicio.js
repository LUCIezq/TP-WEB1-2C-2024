const contador__carrito = document.getElementById('cart-count');
const courses = document.querySelectorAll('.lesson__item');
let count = 0;




courses.forEach(course => {

    const button = course.querySelector('.lesson__item-button');

    button.addEventListener('click', e => {
        count++;
        contador__carrito.textContent = count;
    })

})
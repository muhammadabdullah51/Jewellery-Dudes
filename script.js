const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nav = document.querySelector('#navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
    
}
if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
    
}



const mainImg = document.querySelector('#mainImg');
        const smallImg = document.querySelectorAll('.small-img');

        smallImg.forEach((img, index) => {
            img.onclick = () => {
                mainImg.src = img.src;
            };
        });

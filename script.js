//Nav bar responsive
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay')
    
    burger.addEventListener('click', () => {
    
        //Toogle nav
        menu.classList.toggle('nav-active');
    
        //Burger Animation
        burger.classList.toggle('active');

        //Overlay 
        if (menu.classList.contains('nav-active')) {
            overlay.style.display = 'block'
        } else {
            overlay.style.display = 'none'
        }

        overlay.addEventListener('click', () => {
            burger.classList.remove('active');
            menu.classList.remove('nav-active');
            overlay.style.display = 'none'
        })

        //Item list
        const ulChild = document.querySelector('.nav-links').children

        for (let i = 0; i < ulChild.length; i++) {
            let li = ulChild[i];
            li.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('nav-active');
                overlay.style.display = 'none'
            })
        }
    })
}

navSlide()
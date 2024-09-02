document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-animation');

    const scrollHandler = () => {
        const scrollY = window.scrollY;

        scrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + scrollY;
            const elementHeight = element.clientHeight;

            if (scrollY + window.innerHeight > elementTop && scrollY < elementTop + elementHeight) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); 
});





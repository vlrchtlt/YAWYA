document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    
    function adjustHeader() {
        let found = false;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2 && !found) {
                if (section.id === 'home') {
                    header.classList.remove('white', 'photo', 'black');
                } else if (section.classList.contains('white-bg')) {
                    header.classList.add('white');
                    header.classList.remove('photo', 'black');
                } else if (section.classList.contains('photo-bg')) {
                    header.classList.add('photo');
                    header.classList.remove('white', 'black');
                } else if (section.classList.contains('black-bg')) {
                    header.classList.add('black');
                    header.classList.remove('white', 'photo');
                }
                found = true;
            }
        });

        if (window.scrollY > sections[0].offsetHeight) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }

    document.addEventListener('scroll', adjustHeader);
    adjustHeader(); // Initial check when page loads

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

let cadena = 0;
const myName = '< Rafael Chung />';
const typeSpd = 100;

// Type Name
function typeWriter() {
    if (cadena < myName.length) {
        document.getElementById("typeName").innerHTML += myName.charAt(cadena);
        cadena++;
        setTimeout(typeWriter, typeSpd);
    }
}

const imageUrls = [
    { url: './img/tecnologias/flask-light.svg', name: 'Flask' },
    { url: './img/tecnologias/sqlite.svg', name: 'SQLite' },
    { url: './img/tecnologias/mariadb.svg', name: 'MariaDB' },
    { url: './img/tecnologias/tailwindcss.svg', name: 'Tailwind CSS' },
    { url: './img/tecnologias/spring.svg', name: 'Spring Boot' },
    { url: './img/tecnologias/vue.svg', name: 'Vue.js' },
    { url: './img/tecnologias/mysql.svg', name: 'MySQL' },
    { url: './img/tecnologias/java.svg', name: 'Java' },
    { url: './img/tecnologias/typescript.svg', name: 'TypeScript' },
    { url: './img/tecnologias/bootstrap.svg', name: 'Bootstrap' },
    { url: './img/tecnologias/react.svg', name: 'React' },
    { url: './img/tecnologias/css.svg', name: 'CSS' },
    { url: './img/tecnologias/html5.svg', name: 'HTML5' },
    { url: './img/tecnologias/javascript.svg', name: 'JavaScript' },
    { url: './img/tecnologias/python.svg', name: 'Python' },
];

const slideshowImages = [
    { url: 'img/proyectos/desafio.png', type: 'image' },
    { url: 'img/proyectos/home.png', type: 'image' },
    { url: 'img/proyectos/niveles.png', type: 'image' },
    { url: 'img/proyectos/ranking.png', type: 'image' }
];

window.onload = function () {
    typeWriter();

    // Handle technologies images
    const marqueeContent = document.querySelector('.marquee-content');
    const tooltip = document.getElementById('tech-name');

    imageUrls.forEach(item => {
        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.name;
        img.addEventListener('mouseover', (event) => {
            marqueeContent.style.animationPlayState = 'paused';
            tooltip.textContent = item.name;
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 10}px`; // Ajustar la posición horizontal
            tooltip.style.top = `${event.pageY + 10}px`;  // Ajustar la posición vertical
        });

        img.addEventListener('mouseout', () => {
            marqueeContent.style.animationPlayState = 'running';
            tooltip.style.display = 'none';
        });

        marqueeContent.appendChild(img);
    });

    // Handle slideshow
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowImages.forEach((item, index) => {
        const element = document.createElement(item.type === 'video' ? 'video' : 'img');
        if (item.type === 'video') {
            element.src = item.url;
            element.controls = true;
            element.style.width = '100%';
        } else {
            element.src = item.url;
            element.style.width = '100%';
        }
        slideshowContainer.appendChild(element);
    });

    // Add slideshow functionality (basic)
    let currentIndex = 0;
    const slides = slideshowContainer.children;
    
    function showSlide(index) {
        Array.from(slides).forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos
};

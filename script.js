// Inicializar Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'es', // Idioma base de la página
            includedLanguages: 'ar,zh-CN,en,fr,ru,es', // Idiomas permitidos
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false, // No mostrar automáticamente el widget
        },
        'google_translate_element'
    );
}

//Mesa directiva
// Seleccionar el botón y el contenedor de imágenes
const toggleButton = document.getElementById("toggle-gallery");
const imageGallery = document.getElementById("image-gallery");

// Alternar la visibilidad del contenedor de imágenes al hacer clic
toggleButton.addEventListener("click", () => {
    if (imageGallery.style.display === "none" || imageGallery.style.display === "") {
        imageGallery.style.display = "grid"; // Mostrar la galería
        toggleButton.textContent = "Ocultar"; // Cambiar texto del botón
    } else {
        imageGallery.style.display = "none"; // Ocultar la galería
        toggleButton.textContent = "¡Conócenos!"; // Cambiar texto del botón
    }
});


// Configuración del Swiper
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, // Hace que sea un carrusel infinito
});

// Contacto EmailJS
emailjs.init("NqVfrdyarRX1n-JDw");
        
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
        
    const serviceID = "service_cdw5pzi";
    const templateID = "template_nwr5glb";
        
    emailjs.sendForm(serviceID, templateID, this).then(
        () => alert("Mensaje enviado con éxito!"),
        (err) => alert("Error al enviar el mensaje: " + JSON.stringify(err))
    );
});

// Nuevo carrusel Noticias y Eventos
const customSwiper = new Swiper('.swiper-custom', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, // Hacer el carrusel infinito
    spaceBetween: 30, // Separación entre slides
});

// Abrir y cerrar el modal
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");

// Abrir modal al hacer clic en el botón
openModalButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar modal al hacer clic en la "x"
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
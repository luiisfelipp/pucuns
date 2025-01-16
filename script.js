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

// Configuración del Swiper
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, // Hace que sea un carrusel infinito
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


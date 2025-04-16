const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,

    autoplay: {
        delay: 5000, // tempo entre os slides em milissegundos (3000 = 3 segundos)
        disableOnInteraction: false, // continua rodando mesmo se o usuário interagir
    },

    // Se quiser navegação
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Se quiser paginador
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

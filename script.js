document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const openButton = card.querySelector(".openCardButton");
        const closeButton = card.querySelector(".closeCardButton");

        openButton.addEventListener("click", () => {
            card.classList.add("open");
            card.classList.remove("closing");
            document.body.style.overflow = "hidden"; // Bloquea el scroll cuando se abre la carta
        });

        closeButton.addEventListener("click", () => {
            card.classList.add("closing");
            setTimeout(() => {
                card.classList.remove("open");
                card.classList.remove("closing");
                document.body.style.overflow = "hidden"; // Evita desplazamiento al cerrar
            }, 700);
        });
    });
});

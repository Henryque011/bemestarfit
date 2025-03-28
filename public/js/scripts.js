<script>
    document.addEventListener("DOMContentLoaded", function () {
        const {CountUp} = window;

    function startCounters() {
            const counter1 = new CountUp("counter1", 9, {duration: 2, separator: '' });
    const counter2 = new CountUp("counter2", 2000, {duration: 3, separator: '.' });
    const counter3 = new CountUp("counter3", 20, {duration: 2, separator: '' });

    if (!counter1.error) {
        counter1.start();
    counter2.start();
    counter3.start();
            } else {
        console.error(counter1.error);
            }
        }

        // Verifica se os contadores estão visíveis na tela
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.disconnect(); // Para de observar depois de ativar
            }
        });
        });

    const counterContainer = document.querySelector(".counter-container");
    if (counterContainer) {
        observer.observe(counterContainer);
        } else {
        console.error("Elemento .counter-container não encontrado.");
        }
    });
</script>

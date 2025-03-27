// Importa CountUp.js (caso esteja usando módulo ES6)
const { CountUp } = window;

// Inicializa os contadores
const counter1 = new CountUp("counter1", 9, { duration: 2, separator: '' });
const counter2 = new CountUp("counter2", 2000, { duration: 3, separator: '.' });
const counter3 = new CountUp("counter3", 20, { duration: 2, separator: '' });

// Inicia a contagem assim que a página carregar
if (!counter1.error) {
    counter1.start();
    counter2.start();
    counter3.start();
} else {
    console.error(counter1.error);
}
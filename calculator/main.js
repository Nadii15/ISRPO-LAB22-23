import { Calculator } from './calculator.js';
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    const calc = new Calculator(display);
    calc.init(buttons);
});
import { randomNumber } from '../index.js';
import { check } from '../index.js';

export const makeProgression = (step = randomNumber()) =>{
    let startNumber = randomNumber();
    let mas = [];
    for (let i = 0; i<10;i+=1){
        let nextNumber = startNumber += step;
        mas.push(nextNumber);
    }
    let index = Math.floor(Math.random() * mas.length);
    let hiddenNumber = mas[index];
    console.log(hiddenNumber);
    mas[index] = '..';
    console.log(mas);
    check(makeProgression, 'Dima', hiddenNumber);
}
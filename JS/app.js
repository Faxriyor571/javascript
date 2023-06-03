//56-dars topshiriq
// 'use strict'
// //o'zgruvchilar
// const clavish1 = document.querySelector('.clavish1')
// const clavish2 = document.querySelector('.clavish2')
// const number1 = document.querySelector('.number1')
// const number2 = document.querySelector('.number2')
// const bigclavish = document.querySelector('.bigclavish')
// const eventNumber = document.querySelector('.form-select')

// // rangli sonlar


// // 1-o'yinchi
// clavish1.addEventListener('click', () => {
//     number1.setAttribute('style', 'color: green')
//     number1.textContent++
// }
// );
// //2-o'yinchi
// clavish2.addEventListener('click', () => {
//     number2.setAttribute('style', 'color: green')
//     number2.textContent++
// })
// //tozolovchi knopka
// bigclavish.addEventListener('click', () => {
//  number1.textContent = 0;
//  number1.setAttribute('style', 'color:black')
//  number2.textContent = 0;
//  number2.setAttribute('style', 'color:black')
// })


// eventNumber.addEventListener('change', ()=> { 
//         number1.textContent = 0;
//         number1.setAttribute('style', 'color:black')
//         number2.textContent = 0;
//         number2.setAttribute('style', 'color: black')
//     }) 

//67 -dars
// 'user strict'
//   const hours = document.querySelector('.paragrf')
//   const minimonth = document.querySelector('.miniParagrfMonth')
//   const miniYear = document.querySelector('.miniParagrfYear')
//   const hour = document.querySelector('.hour')
//   const minut = document.querySelector('.minutes')
//   const second = document.querySelector('.secundes')

// setInterval(() => {
//     //tepada turuvchi oy bn yil
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const monthh = new Date();
// let month = months[monthh.getMonth()];
// const day = monthh.getDate()
// minimonth.textContent = day +' '+' '+ month 
// miniYear.textContent = monthh.getFullYear()

// //time at the moment
//    hour.textContent = monthh.getDate() < 10 ? '0' + monthh.getDate() : monthh.getDate()
//    minut.textContent = monthh.getMinutes() < 10 ? '0' + monthh.getMinutes() : monthh.getMinutes()
//    second.textContent = monthh.getSeconds() < 10 ? '0' + monthh.getSeconds() : monthh.getSeconds()

// }, 600);









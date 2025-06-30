// let myName = prompt("Введите имя"); //Окно для ввода имени.
// document.writeln(`Имя: ${myName}`);
// currentYear = 2025;
// let index = 0;
// document.writeln(`<h1>Список пользователя</h1>`);

// //Первый пользователь
// let userName1 = prompt("Введите имя первого пользователя");
// let userYear1 = Number(prompt("Введите год рождения первого пользователя"));
// let userAge1 = currentYear - userYear1;
// index++;//Это тоже самое, что и index + 1 - называется ИНКРЕМЕНТ(прибавление к значению переменной единицы)
// document.writeln(`<p>${index})<strong>${userName1}</strong>, год рождения: ${userYear1}, возраст: ${userAge1}</p>`);

// //Второй пользователь
// let userName2 = prompt("Введите имя второго пользователя");
// let userYear2 = Number(prompt("Введите год рождения второго пользователя"));
// let userAge2 = currentYear - userYear2;
// index++;
// document.writeln(`<p>${index})<strong>${userName2}</strong>, год рождения: ${userYear2}, возраст: ${userAge2}</p>`);

// //Третий пользователь
// let userName3 = prompt("Введите имя третьего пользователя");
// let userYear3 = Number(prompt("Введите год рождения третьего пользователя"));
// let userAge3 = currentYear - userYear3;
// index++;
// document.writeln(`<p>${index})<strong>${userName3}</strong>, год рождения: ${userYear3}, возраст: ${userAge3}</p>`);

/*------------------------Задание 1.---------------------------*/
// document.writeln("<h1>Адрес пользователя</h1>");
// let userName = prompt("Введите имя");
// let userCity = prompt("Введите город");
// let userStreet = prompt("Введите улицу");
// let userHome = prompt("Введите номер дома");
// let userApartment = prompt("Введите номер квартиры");
// document.writeln(`<p>Имя: <strong>${userName}</strong></p><p>Город: <strong>${userCity }</strong></p><p>Улица: <strong>${userStreet}</strong></p><p>Дом: <strong>${userHome}</strong></p><p>Квартира: <strong>${userApartment}</strong></p>`)

/*------------------------Задание 2.---------------------------*/
// document.writeln('<h1 class="main-title">Список покупок</h1>')
// document.writeln('<ul class="product-list">')

// let index = 0 // Счетчик порядкового номера
// let totalPrice = 0 // Суммарная стоимость

// // Товар 1
// index = index + 1
// let product1 = prompt(`Введите название товара ${index}`) // Название товара
// let productPrice1 = Number(prompt(`Введите стоимость товара: "${product1}"`))// Стоимость товара.
// totalPrice = totalPrice + productPrice1

// document.writeln(`<li class="product-item">
//                   ${index}) <strong>${product1}</strong>,
//                   стоимоть: <strong>${productPrice1}</strong>
//                 </li>`)

// Товар 2
// index = index + 1
// let product2 = prompt(`Введите название товара ${index}`) // Название товара
// let productPrice2 = Number(prompt(`Введите стоимость товара: "${product2}"`)) // Стоимость товара.
// totalPrice = totalPrice + productPrice2

// document.writeln(`<li class="product-item">
//                   ${index}) <strong>${product2}</strong>,
//                   стоимоть: <strong>${productPrice2}</strong>
//                 </li>`)

// // Товар 3
// index = index + 1
// let product3 = prompt(`Введите название товара ${index}`) // Название товара
// let productPrice3 = Number(prompt(`Введите стоимость товара: "${product3}"`)) // Стоимость товара.
// totalPrice = totalPrice + productPrice3

// document.writeln(`<li class="product-item">
//                   ${index}) <strong>${product3}</strong>,
//                   стоимоть: <strong>${productPrice3}</strong>
//                 </li>`)

// document.writeln("</ul>")

// // Суммарная стоимость
// document.writeln(`<p class="total-price">Суммарная стоимость: <strong>${totalPrice}</strong></p>`)

/*------------------------Задание 3.---------------------------*/
document.writeln("<h1>Расчёт дохода водителей в таксопарке</h1>")
let index = 0 ;

index = index + 1;
let name1 = prompt(`Введите имя водителя ${index}`);        //Водитель 1
let surname1 = prompt(`Введите фамилию водителя ${index}`);
let salaryMonth1 = Number(prompt(`Сколько ${name1} ${surname1} обработал заказов в месяц?`));
let incomeMonth1 = Number(prompt(`Какой доход ${name1} ${surname1} получил в месяц?`));

let averageCost1 = incomeMonth1 / salaryMonth1;
console.log(averageCost1);

index = index + 1;
let name2 = prompt(`Введите имя водителя ${index}`);        //Водитель 2
let surname2 = prompt(`Введите фамилию водителя ${index}`);
let salaryMonth2 = Number(prompt(`Сколько ${name2} ${surname2} обработал заказов в месяц? `));
let incomeMonth2 = Number(prompt(`Какой доход ${name2} ${surname2} получил в месяц? `));

let averageCost2 = incomeMonth2 / salaryMonth2;
console.log(averageCost2);

index = index + 1;
let name3 = prompt(`Введите имя водителя ${index}`);        //Водитель 3
let surname3 = prompt(`Введите фамилию водителя ${index}`);
let salaryMonth3 = Number(prompt(`Сколько ${name3} ${surname3} обработал заказов в месяц?`));
let incomeMonth3 = Number(prompt(`Какой доход ${name3} ${surname3} получил в месяц?`));

let averageCost3 = incomeMonth3 / salaryMonth3;
console.log(averageCost3);     //Средняя стоимость поездки

let averageIndicator = ((salaryMonth1 + salaryMonth2 + salaryMonth3) / 3);//Среднее количество поездок всех водителей
let averageIncome = ((incomeMonth1 + incomeMonth2 + incomeMonth3) / 3);// Средний доход всех водителей в месяц

console.log(averageIncome);
console.log(averageIndicator);



 
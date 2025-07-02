// let userName = "Яна"; - уже не нужна при вызова функции
// let index = 0;

// {
//     let age = 17;
//     index++
//     console.log(index, userName, age);
// }

// {
//     let age = 18;
//     index++
//     console.log(index, userName, age);
// }



// function hello(userName, age) {
//     index++
//     console.log(index, userName, age);
// }

// userName = "Андрей";
// hello();//Запуск функции и Вызов функции

// userName = "Настя";
// hello();

// userName = "Ян";
// hello();

// let userName = prompt("Введите ваше имя"); можно сократить, смотреть ниже
// hello(prompt("Введите ваше имя"), 40);
// hello(prompt("Введите ваше имя"), 37);// hello("Настя" ,37);
// hello(prompt("Введите ваше имя"), 5);// hello("Ян", 5);
// let index = 0;
// let currentYear = 2025;
// let middleAge = 0;
// let middleHeight = 0;

// document.writeln("<h1>Список студентов</h1>");

// function printStudent(studentName = "", studentYear = 0, height = 0, faculty = ""){
    // let studentName = "Андрей"; //Это можно удалить после вызова функции, прописываются в функции.
    // let studentYear = 1985;
    // let height = 183;
    // let faculty = "Исторический";
//     let age = currentYear - studentYear;
//     middleAge = middleAge + age;
//     middleHeight = middleHeight + height;
//     index++;
//     document.writeln(`
//         <p>${index})<strong>${studentName}</strong>, 
//         возраст: <strong>${age}</strong>, 
//         рост: <strong>${height}</strong>, 
//         факультет: <strong>${faculty}</strong></p>
//     `); 
// }

// printStudent("Яна", 2006, 166, "Языковой");
// printStudent("Оля", 1997, 169, "Лицевой");
// printStudent("Таня", 2000, 166, "Горловой");

// document.writeln("<hr>");
// document.writeln(`<p>Средний возраст: <strong>${middleAge / index}</strong> средний рост: <strong>${middleHeight / index}</strong></p>`);
// {
//     let studentName = "Андрей";
//     let studentYear = 1985;
//     let height = 183;
//     let faculty = "Исторический";
//     let age = currentYear - studentYear;
//     index++;
//     document.writeln(`
//         <p>${index})<strong>${studentName}</strong>, 
//         возраст: <strong>${age}</strong>, 
//         рост: <strong>${height}</strong>, 
//         факультет: <strong>${faculty}</strong></p>
//     `);
// }

/*-------------------------Задание 1.-----------------------*/
// Исправьте код так, что бы в консоле не было ошибок и в документ браузера выводился верный результат. А именно список товаров с нумерацией, весом и общим весом всех товаров.

document.writeln("<h1>Список товаров</h1>");

document.writeln("<ul>");

let index = 0;
let totalWeight = 0;

// Товар 1
{
  index++
  let weight = Number(prompt(`Введите вес товара ${index}`));
  totalWeight = totalWeight + weight;

  document.writeln(`<li>
                    Товар ${index}) вес: <strong>${weight}</strong> кг
                  </li>`);
}

// Товар 2
{
  index++
  let weight = Number(prompt(`Введите вес товара ${index}`));
  totalWeight = totalWeight + weight;

  document.writeln(`<li>
                    Товар ${index}) вес: <strong>${weight}</strong> кг
                  </li>`);
}

// Товар 3
{
  index++
  let weight = Number(prompt(`Введите вес товара ${index}`));
  totalWeight = totalWeight + weight;

  document.writeln(`<li>
                    Товар ${index}) вес: <strong>${weight}</strong> кг
                  </li>`);
}

document.writeln("</ul>")

document.writeln('<hr>')
document.writeln(`<p>Общий вес товаров: ${totalWeight} кг</p>`);

/*----------------------------Задание 2.-------------------------*/

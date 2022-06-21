// 1* Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61


let age_2 = 18 // Создать переменную “age_2” и присвоить ей значение 18
let age_3 = 60 // Создать переменную “age_3” и присвоить ей значение 60

const ChekAge = function (age){

if (age < age_2) // Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
{
    console.log("You don't have access cause your age is" + " " + age  + " " + "It's less then age_2")
}

 else if (age >= age_2 && age < age_3) // Если age >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
{
    console.log("Welcome")
}

else if (age > age_3) // Если age  > age_3, вывести в консоль “Keep calm and look Culture channel”.
{
console.log("Keep calm and look Culture channel")
}
else {
    console.log("Technical work") // Иначе выводите “Technical work”
}
}

ChekAge(17)
ChekAge(18)
ChekAge(61)



// 2*Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. 
// И если он не Number - кидалась ошибка

let age_2 = 18 // Создать переменную “age_2” и присвоить ей значение 18
let age_3 = 60 // Создать переменную “age_3” и присвоить ей значение 60

const ChekAge = function (age){

if (typeof (age) === 'number'){

    if (age < age_2) // Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
    {
    console.log("You don't have access cause your age is" + " " + age  + " " + "It's less then age_2")
    }

    else if (age >= age_2 && age < age_3) // Если age >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
    {
    console.log("Welcome")
    }

    else if (age > age_3) // Если age  > age_3, вывести в консоль “Keep calm and look Culture channel”.
    {
    console.log("Keep calm and look Culture channel")
    }
    else {
    console.log("Technical work") // Иначе выводите “Technical work”
    }
    }
else {
    console.log('Not an integer value')
}
}


ChekAge(17)
ChekAge(18)
ChekAge(60)
ChekAge(61)
ChekAge('61')



// 3**Преобразовать 2* таким образом, чтобы значение '2'
//  (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


let age_2 = 18 // Создать переменную “age_2” и присвоить ей значение 18
let age_3 = 60 // Создать переменную “age_3” и присвоить ей значение 60

const ChekAge = function (age){

if (age && !isNaN(age)){

    if (age < age_2) // Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
    {
    console.log("You don't have access cause your age is" + " " + age  + " " + "It's less then age_2")
    }

    else if (age >= age_2 && age < age_3) // Если age >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
    {
    console.log("Welcome")
    }

    else if (age > age_3) // Если age  > age_3, вывести в консоль “Keep calm and look Culture channel”.
    {
    console.log("Keep calm and look Culture channel")
    }
    else {
    console.log("Technical work") // Иначе выводите “Technical work”
    }
    }
else {
    console.log('Not an integer value')
}
}

ChekAge(17)
ChekAge(18)
ChekAge(60)
ChekAge(61)
ChekAge('61')
ChekAge('bbbbb')
ChekAge('')
ChekAge('0')



// 4**Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt 
// в привязанной верстке

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script src="./hw_1!.js"></script>
// </body>
// </html>

  let age_2 = 18 // Создать переменную “age_2” и присвоить ей значение 18
  let age_3 = 60 // Создать переменную “age_3” и присвоить ей значение 60

const ChekAge = function (age){

if (age && !isNaN(age)){

    if (age < age_2) // Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
    {
    alert("You don't have access cause your age is" + " " + age  + " " + "It's less then age_2")
    }

    else if (age >= age_2 && age < age_3) // Если age >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
    {
    alert("Welcome")
    }

    else if (age > age_3) // Если age  > age_3, вывести в консоль “Keep calm and look Culture channel”.
    {
    alert("Keep calm and look Culture channel")
    }
    else {
    alert("Technical work") // Иначе выводите “Technical work”
    }
else {
    alert('Not an integer value')
}
}

let a = prompt('Enter your age')

ChekAge(a)

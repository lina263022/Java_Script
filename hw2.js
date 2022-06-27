
// 1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, 
// начиная со степени 1

// 1-й вариант
i=1
while (i <=10)
{const result = Math.pow (2,i);
console.log ('result =', result)
i++ ;
}

// 2-й вариант
for (let i=1; i<11; i++){
    console.log(2**i)
}


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function step (counter) {
    for (let i=1; i<=counter; i++){
        console.log(2**i)
    }

}
step(10);

// // 2.Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее


let result = '';
let emoji = ':-)';

for(let i=1; i<6; i++){
    result = result + emoji
    console.log(result)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

let result = ''
function emoji(str, numberOfRows) {
    for(let i=1; i<= numberOfRows; i++){
      result = result + str
console.log(result)
}

}
emoji(':-)', 5);


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: Слово (word) состоит из  (число) гласных и (число) согласных букв

   function getWordStructure(word) {
    const vowels ='aeiou'.split('');
    const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');

    let vowelsCount = 0;
    let consonantsCount = 0;   

for(const char of word.toLowerCase()){
  if(vowels.includes(char)) vowelsCount++
  else if(consonants.includes(char)) consonantsCount++
}
console.log(`В слове ${word} : ${vowelsCount} гласных и ${consonantsCount} согласных букв`)
        }

  getWordStructure('Case');
  getWordStructure('case');
  getWordStructure('Check-list');



// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

   function palindrom(word){
    word = word.toLowerCase();
    return word ==word.split('').reverse().join('');
}
console.log(palindrom('Abba'))


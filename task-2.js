// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
// приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

const calculateEngravingPrice = function (message, pricePerWord) {
    let words = message.split(' ');
    let totalPrice = 0;
    for (let i = 0; i < words.length; i++) {
        totalPrice = (i + 1) * pricePerWord;
    }
    return totalPrice;

  };
  

  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10,));   
  console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20,)); 
  
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); 
  console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); 
  
// 1. получить два числа от пользователя и вывести сумму.

// function sum(num1, num2){
//     return num1 + num2
// }

// const num1 = Number.parseFloat(prompt("Enter a first num:"));
// const num2 = Number.parseFloat(prompt("Enter a second num:"));
// alert(`Result ${num1} + ${num2} = ${sum(num1, num2).toFixed(2)}`);

//2.

// const answer = confirm("Вам хорошо живется?");
// if (answer){
//     alert("Тогда мы идем к вам.");
// } else {
//     alert("Ну вы держитесь там.");
// }

// 4.

function getMaxEvenElement(arr){
    maxElement = arr[0];
    for (let index = 0; index < arr.length; index = index + 2) {
        if (arr[index] > maxElement){
            maxElement = arr[index];
        } 
    }
    return maxElement;
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0]));
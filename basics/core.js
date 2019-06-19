//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n)
{
    return (num ^ 0) === num;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() 
{
	let a = 2;
	let b = 20;
	let arr = [];
	let number = 0;

	for (let i = 0; i <= ((b - a)/2); i++)
	{
		number += 2;
		arr.push(number);
	}

	return (arr);
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) 
{
	let S = 0;

	for (let i = 1; i < n + 1; i++)
		S += i;

	return (S);
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) 
{
	if (n == 1)
		return 1;
	else
		return (n + recSumTo(n-1));
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) 
{
	let F = 0;

	for (let i = 1; i < n + 1; i++)
		F *= i;

	return(S);
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) 
{
	if ((n & (n - 1)) == 0)
		return (`${n} is binary!`);
	else return (`${n} is not binary`);
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) 
{
    let numbers = [0, 1, 1];

    if (n > 2)
    {
        for (let i = 0; i < n - 2; i++)
        {
            numbers[0] = numbers[1];
            numbers[1] = numbers[2];
            numbers[2] = numbers[0] + numbers[1];
        }
        return numbers[2];
    }

    else if (n == 2)
        return numbers[2];
    else if (n == 1)
        return numbers[1];
    else if (n == 0)  
		return numbers[0]; 
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}

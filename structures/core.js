//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str)
{
	return (str.charAt(0).toUpperCase() + slice(1);
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) 
{
	return (n > str.length) ? str : str.slice(0, n) + '...';
}
  
//Определите, пуст ли объект
function isEmpty(obj)
{
	for (let key in obj)
    	return false;

	return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) 
{
	for (var key in obj)
	{
		if (isFinite(obj[key]) == true) 
		obj[key] *= 2;
	}

	return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) 
{
  var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

	return result;
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) 
{
	reverse = str.split('').reverse().join('');
	return (reverse == str) ? return('It is a palindrom!') : ('Unfortunetaly, it is not a palindrom')
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};

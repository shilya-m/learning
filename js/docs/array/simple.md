# Массивы
[mdnWeb](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
 - [indexOf](#indexOf) - поиск элемента
 - [join](#join) - объединяет элементы массива в строку
 - [splice](#splice) - изменяет массив удаляя/добавляя элементы
 - [slice](#slice) - копия подмассива (старт, конец)
 - [push](#push) - добавление элемента в конец массива
 - [pop](#pop) - удаление последнего элемента
 - [shift](#shift) - удаление первого элемента
 - [unshift](#unshift) - добавление в начало массива

[продолжение](./advanced.md) 

indexOf(searchElement[, fromIndex]) - поиск элемента начиная с индекса
<a name='indexOf'><a>
```javascript
    const ar = [1,2,3,1,3]
    ar.indexOf(5) === -1
    ar.indexOf(2) === 1
```
  
join([separator]) - объединяет все элементы массива в строку
<a name='join'><a>
```javascript
    const ar = [1,2,3]
    ar.join('-') === '1-2-3'
```

splice(start[, deleteCount[, item1[, item2[, ...]]]]) - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые с позиции start
<a name='splice'><a>
```javascript
    const ar = [1,2,3,4,5]
    ar.splice(3,1,4) // удалили один элемент на позиции три и добавили в конец 4
    // ar === [1,2,3,5,4]
    ar.splice(1) // удаление всех элементов, начиная с индекса 1
    // ar === [1]
```

slice([begin[, end]]) - возвращает новый массив, содержащий копию части исходного массива. начиная с символа begin не доходя до символа с индексом end. По умолчанию begin=0, end=length
<a name='slice'><a>
```javascript
    const ar = [1,2,3,4,5]
    const ar0 = ar.slice(2) //
    const ar1 = ar.slice(2,4) // [3,4]
    // ar1: [3,4,5]
```

push(element1, ..., elementN) - добавляет один или более элементов в конец массива и возвращает новую длину массива
<a name='push'><a>
```javascript
    const ar = [1,2,3]
    const newLength = ar.push(0) // ar = [1,2,3,0], newLength = 4
```
<a name='pop'><a>

pop() - удаляет последний элемент из массива и возвращает его значение.
<a name='pop'><a>
```javascript
    const ar = [1,2,3]
    const lastElem = ar.pop() // lastElem === 3
```

Метод shift() удаляет первый элемент из массива и возвращает его значение
<a name='shift'><a>
```javascript
    const ar = [1,2,3]
    const firstElem = ar.shift() // firstElem === 1
```

unshift(element1[, ...[, elementN]]) - добавляет один или более элементов в начало массива и возвращает новую длину массива
<a name='unshift'><a>
```javascript
    const ar = [1,2,3]
    ar.unshift(-2, -1) // ar: [-2,-1,1,2,3]
```

---
[ещё про массивы](./advanced.md)  
[на главную](../readme.md)
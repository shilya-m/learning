# Числа
## Форматы записи чисел
```javascript
    x = 18      // 10-чная
    x = 0b10010 // 2-чная
    x = 0o22    // 8-чная
    x = 0x12    // 16-чная
    x = 1n      // BigInt
    x = 1e3     // 1000
    x = 1e-3    // 0.001
```
## Проблемы с точностью
```javascript
    0.1 + 0.2 === 0.3   // false
    0.1 + 0.2 === 0.30000000000000004 // true
```

## Константы
    Number.MAX_SAFE_INTEGER === 9007199254740991
    Number.MIN_SAFE_INTEGER === -9007199254740991
    Infinity == 1/0
    NaN == 56 + '32x'
    Number.POSITIVE_INFINITY === Infinity
    0.1 + 0.2 < 0.3 + Number.EPSILON

## Базовые операции

### +, -, *, /, %, **
```javascript
    8 % 3 === 2    // остаток от деления
    2 ** 3 === 8   // возведение в степень
```

### parseInt, parseFloat
```javascript
    parseInt('54px') === 54
    parseInt(3.99) === 3
    parseFloat('3.66.3') === 3.66
```

### toString(n) - перевод в n-чную систему, результат строка
```javascript
    8..toString(2) === '1000' // перевод в 2-ую систему
```

### toFixed(n) - округление до n знаков после запятой, результат строка
```javascript
    8..toFixed(2) === '8.00' 
    8.3421.toFixed(2) === '8.34'
```

### isNaN(x) - проверка является ли x - NaN
```javascript
    56 + '32x' === NaN // false
    isNaN(56 + '32x')  // true
    isNaN('hello')     // true
    isNaN(23)          // false
    isNaN(Infinity)    // false

```

### isFinite(x) - проверка является ли x - конечным числом
```javascript
    1/0 === Infinity 
    isFinite(1/0) === false
    isFinite(1/99) === true
```

## Библиотека Math

### Math.random()) - случайной число: 0<=x<1
```javascript
    Math.random()
```   

### Math.floor(), Math.round(), Math.ceil(), Math.trunc() - округление
```javascript
    Math.round(4.5) === 4.5
    Math.floor(4.6) === 4
    Math.ceil(4.4) === 5
```    

### Math.max(v1, v2, ..), Math.min(v1, v2, ..)  поиск максимального/минимального значения
```javascript
    Math.max(-2, 0, 2) === 2
    Math.min(-2, 0, 2) === -2
```   
---
[на главную](../readme.md)


# Типы данных
В javascript 6 типов данных:  
 - Number
 - String
 - Boolean
 - Object
 - null
 - undefined

Но есть две неточности у функции typeof  
```javascript
typeof( null ) === 'undefined'
typeof( a=>a ) === 'function'
```

Есть ещё значение NaN, типа number - означает Not a Number
```javascript
Number('a34x8') === NaN
typeof( NaN ) === 'number'
```

---
[на главную](../readme.md)
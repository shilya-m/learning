# Функции

варианты определения
 - Function Construction
    ```javascript
        new Function( 'a', 'b', 'return a-b')
    ```
 - Function Declaration
    ```javascript
        function test1(a,b){
            return a-b;
        }
    ```
 - Function Expression
    ```javascript
        var test1 = function(a,b){
            return a-b;
        }
    ```
 - function* expression / function* declaration
    ```javascript
        var zz = function* (){
            yield '1'
            yield '2'
            yield '4'
        }()
        zz.next()
        zz.next()
    ```
 - Arrow functions (can be expression or declaration)
    ```javascript
        const test1 = (a,b) => {a-b}
    ```
 - Function generators
    ```javascript
        var GeneratorFunction = Object.getPrototypeOf(function(){}).constructor
        var g = new GeneratorFunction('a', 'b', 'return a-b');
        console.log( g(10,2) ); // 8
    ```
 - Inside Object
    ```javascript
        const language = {
            show() {
                console.log('show current', this.current);
            },
            show2: function(){
                console.log('show2 current', this.current);
            }
        };
    ```
 - Getter/Setter
    ```javascript
        const language = {
            set current(name) {
                this._current = name;
            },
            get current(){
                return this._current;
            }
        };
    ```


**Замечание**: функции, объявленные как **_Function Declaration_**, создаются интерпретатором до выполнения кода, поэтому их можно вызвать до объявления.


---
[на главную](../readme.md)
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const products = [
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55},
    {name: 'Product 3', quantity: 22, price: 35},
];

function validationNumber (massege){
    do{
        number = prompt(massege)
    } while (isNaN(+number) || number === '');
    number = Number(number)
    return number;
};

function findBetween (array) {
    let min = validationNumber('Please enter first number');
    let max = validationNumber('Please enter second number');
    function isBetween (min, max){
        return function (currentNumber){
            return currentNumber >= min && currentNumber <= max;
        };
    };
    return array.filter(isBetween(min, max))
}
// console.log(findBetween(someArray))

function calculator () {
    function validationOperation (massege){
        do{
            number = +prompt(massege)
        }while (!(number > 0 && number < 6))
        return number;
    };
    let option = validationOperation('Please choose operation:\n1 - addition;\n2 -subtraction;\n3 - multiplication;\n4 - division;\n5 - exponentiation');
    let a = validationNumber('Please enter first number');
    let b = validationNumber('Please enter second number');

    function calculation(option){
        switch (option){
            case 1:
                return function(a){
                    return function(b){
                        return a + b;
                    };
                };
            case 2:
                return function(a){
                    return function(b){
                        return a - b;
                    }
                }
            case 3:
                return function(a){
                    return function(b){
                        return a * b;
                    }
                }
            case 4:
                return function(a){
                    return function(b){
                        return a / b;
                    }
                }
            case 5:
                return function(a){
                    return function(b){
                        return Math.pow(a, b)
                    }
                }
        };
    };
    return calculation(option)(a)(b);
}
// console.log(calculator())

function sortByField (fieldName, sortType){
    if (sortType === 'asc'){
        return (a, b) => a[fieldName] > b[fieldName] ? 1: -1;
    }else if (sortType === 'desc'){
        return (a, b) => a[fieldName] > b[fieldName] ? -1: 1;
    };
};
// console.log(products.sort(sortByField('price', 'desc')))
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
 
function sayHello() {
    document.getElementById('hello').innerText = 'Hello world';
}

    
    function calculate() {
        
        const number1 = parseFloat(document.getElementById('number1').value);
        const operation = document.getElementById('operation').value;
        const number2 = parseFloat(document.getElementById('number2').value);
        const resultDisplay = document.getElementById('result');
        let result;

       
        if (isNaN(number1) || isNaN(number2)) {
            resultDisplay.textContent = "Zadej obě čísla!";
            return;
        }

        
        switch (operation) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                
                if (number2 === 0) {
                    resultDisplay.textContent = "Nelze dělit nulou!";
                    return;
                }
                result = number1 / number2;
                break;
            default:
                resultDisplay.textContent = "Neznámá operace!";
                return;
        }

        
        resultDisplay.textContent = "Výsledek: " + result;
    }

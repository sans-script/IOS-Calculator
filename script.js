// Seleciona o elemento de exibição
let display = document.getElementById('display');
// Inicializa a expressão atual como uma string vazia
let currentExpression = '';

// Função para adicionar um número à expressão atual
function displayNumber(num) {
    
    // Adiciona o número ou a vírgula decimal à expressão atual
    currentExpression += num;
    updateDisplay(); // Atualiza a exibição
}



// Função para adicionar o operador de multiplicação à expressão atual
function displayOperatorTimes() {
    // Verifica se o último caractere da expressão é um número
    if (/\d$/.test(currentExpression)) {
        // Adiciona o novo operador à expressão
        currentExpression += '<i class="fa-solid fa-x text-[20px] mt-3"></i>';
        updateDisplay(); // Atualiza a exibição
    }
}

// Função para adicionar o operador de divisão à expressão atual
function displayOperatorDivide() {
    // Verifica se o último caractere da expressão é um número
    if (/\d$/.test(currentExpression)) {
        // Adiciona o novo operador à expressão
        currentExpression += '<i class="fa-solid fa-divide text-[20px] mt-3"></i>';
        updateDisplay(); // Atualiza a exibição
    }
}

// Função para adicionar um operador à expressão atual
function displayOperator(operator) {
    // Verifica se a expressão está vazia ou se o último caractere é um operador
    if (currentExpression === '' || /[+\-*\/]$/.test(currentExpression)) {
        return; // Não faz nada se as condições não forem atendidas
    } else {
        // Verifica se a expressão já contém algum número
        if (/\d/.test(currentExpression)) {
            currentExpression += operator; // Adiciona o operador à expressão
            updateDisplay(); // Atualiza a exibição
        }
    }
}

// Função para limpar a exibição
function clearDisplay() {
    currentExpression = ''; // Reseta a expressão atual para uma string vazia
    updateDisplay(); // Atualiza a exibição
}

// Função para atualizar a exibição com a expressão atual
function updateDisplay() {
    display.innerHTML = currentExpression; // Atualiza a exibição com a expressão atual
}

// Função para calcular o resultado da expressão atual
function calculate() {
    // Cria uma cópia da expressão atual
    let expressionForCalculation = currentExpression;

    // Substitui os ícones pelos operadores correspondentes
    expressionForCalculation = expressionForCalculation.replace(/<i class="fa-solid fa-divide text-\[20px\] mt-3"><\/i>/g, '/');
    expressionForCalculation = expressionForCalculation.replace(/<i class="fa-solid fa-x text-\[20px\] mt-3"><\/i>/g, '*');

    // Avalia a expressão com os operadores substituídos
    let result = eval(expressionForCalculation);
    display.textContent = result; // Exibe o resultado na exibição
    currentExpression = result.toString();
    // Atualiza a expressão atual com o resultado
}

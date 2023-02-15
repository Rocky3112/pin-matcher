function getPin(){
    const pin = generatePin();

    const pinString = pin +'';
    if(pinString.length == 4){
        return pin;
    }
    else{
       return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
     
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousNumberField = typedNumberField.value;
    if(isNaN( number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousNumberField.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        
        const newNumberField = previousNumberField + number;
        typedNumberField.value = newNumberField;
    }
})
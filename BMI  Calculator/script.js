'use strict'

document.getElementById('calculatebtn').addEventListener('click', function () {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    if (isNaN(weight) && isNaN(height) && height == 0) {
        document.getElementById('result').textContent = 'please enter a valid value'
        return
    }
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2)
    var interpretation
    if (bmi < 18.5) {
        interpretation = 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = 'Normal Weight'

    } else if (bmi >= 25 && bmi <= 29.9) {
        interpretation = 'Overweight'

    } else {
        interpretation = 'Obese'
    }

    document.getElementById('result').textContent = `Your BMI is ${bmi} and you are ${interpretation}`
})

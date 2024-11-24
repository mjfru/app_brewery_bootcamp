/*
! BMI Calculator
BMI = weight(kg) / height * height (meters * meters)
*/

let bmiCalculator = (weight, height) => {
  return result = Math.round(weight / (height ** 2));
}

console.log(bmiCalculator(73, 1.77));
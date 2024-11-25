/*
! Advanced BMI Calculator
BMI = weight(kg) / height * height (meters * meters)
*/

let bmiCalculator = (weight, height) => {
  const result = Math.round(weight / height ** 2);

  if (result < 18.5) {
    return "Your BMI is " + result + ", so you are underweight.";
  }

  if (result > 18.5 && result < 24.9) {
    return "Your BMI is " + result + ", so you have a normal weight.";
  } 
  
  else {
    return "Your BMI is " + result + ", so you are overweight.";
  }
};

// console.log(bmiCalculator(60, 2));

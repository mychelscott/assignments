// JAVASCRIPT BASICS EXERCISE 1 
let accessibilityMatters= {
    title: 'Why Accessibility Matters in UI UX Design',
    date: 'May 25, 2023',
    description: 'Accessibility is a word that is often thrown around in the design field. As a UI/UX Designer, you might have heard this word a few times and you might wonder why its important.'
  }
  // variable storing first title HTML element
  let accessibilityMattersTitle = 
  document.getElementById('accessibilityMattersTitle');
  // variable storing first date HTML element
  let accessibilityMattersDate = document.getElementById ('accessibilityMattersDate'); 
  // variable storing first description HTML element
  let accessibilityMattersDescription = document.getElementById ('accessibilityMattersDescription');
  
  // using article's title property to assign the 'textContent property of the 'title' variable
  accessibilityMattersTitle.textContent = accessibilityMatters.title;
  // using article's date property to assign the 'textContent property of the 'date' variable
  accessibilityMattersDate.textContent = accessibilityMatters.date;
  // using article's description property to assign the 'textContent property of the 'description' variable
  accessibilityMattersDescription.textContent = accessibilityMatters.description;
  
  let bestPractices = {
    title: 'Accessibility Best Practices - What to Remember When Building Accessible Web Apps',
    date: 'December 16, 20222',
    description: 'Think about the last site you built, or your favorite site. Are you confident that anyone can use your site and perform the critical actions it requires? Have you considered folks with motor disabilities, visual disabilities, cognitive disabilities, and auditory disabilities?'
  }
  
  let bestPracticesTitle = document.getElementById('bestPracticesTitle');
  let bestPracticesDate = document.getElementById ('bestPracticesDate');
  let bestPracticesDescription = document.getElementById ('bestPracticesDescription');
  
  bestPracticesTitle.textContent = bestPractices.title;
  bestPracticesDate.textContent = bestPractices.date;
  bestPracticesDescription.textContent = bestPractices.description;

  // JAVASCRIPT BASICS EXERCISE 2
  function calculate(){
    let firstOperand = Number(document.getElementById("firstOperand").value);
    let operator = document.getElementById ("operators").value;
    let secondOperand = Number(document.getElementById("secondOperand").value);
    let resultSpan = document.getElementById("result");
      let resultNum = null;
      
    switch (operator) {
      case 'add':
        resultNum = firstOperand + secondOperand;
        resultSpan.innerHTML = resultNum;
        break;
      case 'subtract':
        resultNum = firstOperand - secondOperand;
        resultSpan.innerHTML = resultNum;
        break;
      case 'multiply':
        resultNum = firstOperand * secondOperand;
        resultSpan.innerHTML = resultNum;
        break;
      case 'divide':
        resultNum = firstOperand / secondOperand;
        resultSpan.innerHTML = resultNum;
        break;
      case 'exponent':
        resultNum = Math.pow(firstOperand, secondOperand);
        resultSpan.innerHTML = resultNum;
        break;
      case 'modulo':
        resultNum = firstOperand % secondOperand;
        resultSpan.innerHTML = resultNum;
        break;
      default:
        alert('No operator found!')
      }
    }
    
    let button = document.getElementById("button");
    button.addEventListener ('click', calculate);

    // JAVASCRIPT BASICS EXERCISE 3
    function compare(){
      let firstOperand = Number(document.getElementById("firstOperand").value);
      let operator = document.getElementById ("operators").value;
      let secondOperand = Number(document.getElementById("secondOperand").value);
      let resultSpan = document.getElementById("result");
        let resultNum = null;
      
      switch (operator) {
        case 'greater than':
         if (firstOperand > secondOperand) {
           resultSpan.innerHTML = "true";
         }
        else {
          resultSpan.innerHTML = "false";
        }
          break;
        case 'less than':
         if (firstOperand < secondOperand) {
           resultSpan.innerHTML = "true";
         }
         else {
           resultSpan.innerHTML = "false";
         }
          break;
        case 'not equal to':
          if (firstOperand != secondOperand) {
            resultSpan.innerHTML = "true";
          }
          else {
            resultSpan.innerHTML = "false";
          }
          break;
        default:
          alert('No operator found!')
        }
      }
      
      let button = document.getElementById("button");
      button.addEventListener ('click', compare);
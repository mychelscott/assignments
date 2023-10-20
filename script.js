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
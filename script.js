AOS.init();
import formConfig from './formConfig.js';

const welcomeButton = document.querySelector('#welcome-bar-button');
const welcomeBar = document.querySelector('.welcome-bar');
const inputName = document.querySelector(".form__field");
const answers = {};
let name = '';

inputName.addEventListener('input', function() {
   inputName.value = inputName.value.charAt(0).toUpperCase() + inputName.value.slice(1).toLowerCase();

   if (inputName.value.length > 2) {
      welcomeButton.style.opacity = '1';
      welcomeButton.style.visibility = 'visible';
      return;
   }

   welcomeButton.style.opacity = '0';
   welcomeButton.style.visibility = 'hidden';

   return;
});

welcomeButton.addEventListener('click', function() {
   name = inputName.value;
   name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
   answers["Name"] = name;
   welcomeBar.innerHTML = `
      <h1 class="welcome-bar__title welcome-bar__title-name" data-aos="fade-right">Cześć ${name}, miło Cię widzieć!</h1> 
      <h2 class="welcome-bar__title welcome-bar__title-desc" data-aos="fade-left" data-aos-delay="250">Na początek, wybierz rodzaj zgłoszenia!</h2>`;
   welcomeButton.style.display = 'none';
   generateButtons();
});

const generateButtons = () => {
   const formElement = document.getElementById('dynamicForm');
   let currentStep = 'start';
   const answers = [];
 
   function createFormStep(step) {
      const stepData = formConfig[step];
      const formGroup = document.createElement('div');
      formGroup.setAttribute('data-aos', 'fade-up');
      formGroup.setAttribute('data-aos-delay', '500');
      formGroup.classList.add('form__group-questions');
      formGroup.style.display = stepData.display;
      formGroup.classList.add(`form__group-questions--${stepData.style}`)

      const questionLabel = document.createElement('label');
      questionLabel.classList.add('questions');
      questionLabel.textContent = stepData.question;
      formGroup.appendChild(questionLabel);
      
      if (stepData.type === 'input') {
         const input = document.createElement('input');
         input.type = 'text';
         input.classList.add('form__field-question');
         input.name = step;
         input.required = true;
         formGroup.appendChild(input);
   
         if (stepData.lastQuestion) { 
            const button = document.createElement('button');
            button.type = 'button';
            button.classList.add('button--question');
            button.textContent = 'Podsumowanie zgłoszenia';
            formGroup.appendChild(button);
      
            button.onclick = () => handleOptionSelect('finish', input);
         }
      }
      
      stepData.options.forEach(option => {
         const button = document.createElement('button');
         button.type = 'button';
         button.classList.add('button--question');
         button.textContent = option.text;
         button.onclick = () => handleOptionSelect(option.next);
         formGroup.appendChild(button);
      });
 
      formElement.innerHTML = '';
      formElement.appendChild(formGroup);

      if (step !== 'start') {
         welcomeBar.style.transform = 'translateY(-100%)';
         welcomeBar.style.opacity = 0.3;
         document.querySelector('.welcome-bar__title-name ').style.marginBottom = '20px';
         document.querySelector('.welcome-bar__title-name ').style.marginTop = '0';
         document.querySelector('.welcome-bar__title-desc').style.display = 'none';
      }
   }
 
   function handleOptionSelect(nextStep, answer) {
      if (!nextStep) {
         // Finish
         return;
      }
      currentStep = nextStep;
      createFormStep(nextStep);
   }
 
   createFormStep(currentStep);
};

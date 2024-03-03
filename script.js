AOS.init();

const subjectObject = {
   "Online": {
      "Czego dotyczy twoja potrzeba?": ["Zakupy online", "Wyszukanie produktu", "Rezerwacja", "Reklamacja", "Research wakacji", "Research fachowców", "Inne"]
   },
   "W terenie": {
      "W jakim mieście?": {
         "Warszawa": {
            "Zakupy": {
               question: "W jakim sklepie należy wykonać zakupy? Możesz wpisać jego nazwę lub konretny adres.",
               showInput: true,
               nextQuestion: {
                  question: "Co nleży kupić? Wypisz wszystkie produkty, które potrzebujesz.",
                  showInput: true,
                  nextQuestion: {
                     question: "Gdzie należy je dostarczyć?",
                     showInput: true,
                     nextQuestion: {
                        question: "Na kiedy ich potrzebujesz?",
                        showInput: false,
                        nextQuestion: ["Dziś", "Jutro", "Wybierz dzień", "Dowolnie", "Jak najszybciej", "Nie ma pośpiechu"]
                     }
                  }
               }
            },
            "Sprawy urzędowe": {
               uestion: "Co to jest za sprawa?",
               showInput: false,
               nextQuestion: ["Tematy związane z pojazdem", "Sprawy związane z meldunkiem", "Inne"]
            },
            "Odbiór zamówienia": {
               question: "W jakim sklepie należy odebrać zamówienie?",
               showInput: true,
               nextQuestion: {
                  question: "Podaj szczególy zamówienia - numer zamówienia, nr. telefonu, czy jest opłacone......",
                  showInput: true,
                  nextQuestion: {
                     question: "Gdzie należy je dostarczyć?",
                     showInput: true,
                     nextQuestion: {
                        question: "Na kiedy ich potrzebujesz?",
                        showInput: true,
                        nextQuestion: false,
                     }
                  }
               }
            },
         }
      }
   },
   "Inne": {}
}

const answers = {};
 
const welcomeButton = document.querySelector('#welcome-bar-button');
const welcomeBar = document.querySelector('.welcome-bar');
const inputName = document.querySelector(".form__field");
let name = '';

inputName.addEventListener('input', function() {
   if (inputName.value.length > 0) {
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
      <h2 class="welcome-bar__title welcome-bar__title-desc" data-aos="fade-left">Czy sprawa będzie online czy w terenie?</h2>`;
   welcomeButton.style.display = 'none';
   document.querySelector('#firstChoiceButtons').style.display = 'block';
});

window.onload = function() {
   let firstChoiceButtons = document.getElementById("firstChoiceButtons");
   let secondChoiceButtons = document.getElementById("secondChoiceButtons");
};
 
 
const formConfig = {
   // 1st step
   "start": {
      "options": [
         { "text": "Online", "next": "onlineTicket" },
         { "text": "W terenie", "next": "townTicket" },
      ],
      "display": "block",
      "style": "row"
   },

   // 2nd step
   "onlineTicket": {
      "question": "Czego dotyczy Twoja prośba?",
      "options": [
         { "text": "Zakupy online", "next": "onlineSelected", "value": "onlineShopping" },
         { "text": "Wyszukanie produktu", "next": "onlineSelected", "value": "onlineProduct" },
         { "text": "Rezerwacja", "next": "onlineSelected", "value": "onlineReservation" },
         { "text": "Reklamacja", "next": "onlineSelected", "value": "onlineComplaint" },
         { "text": "Research wakacji", "next": "onlineSelected", "value": "onlineHolidays" },
         { "text": "Research fachowców", "next": "onlineSelected", "value": "onlineWorkers" },
         { "text": "Inne", "next": "otherQueries", "value": "onlineTicket" }
      ],
      "display": "block",
      "style": "row"
   },
   "townTicket": {
     "question": "W jakim mieście należy wykonać Twoje zadanie?",
     "options": [
         { "text": "Warszawa", "next": "townSelected", value: "warsaw" },
         { "text": "Wrocław", "next": "townSelected", value: "wroclaw" },
         { "text": "Poznań", "next": "townSelected", value: "poznan" },
         { "text": "Kraków", "next": "townSelected", value: "krakow" },
         { "text": "Trójmiasto", "next": "townSelected", value: "tricity" },
     ],
     "display": "block",
     "style": "row"
   },

   // 3rd step
   "onlineSelected": {
      "question": "Wpisz szczegóły swojego zgłoszenia online",
      "options": [
      ],
      "type": 'input',
      "style": "column"
   },
   "townSelected": {
      "qeustion": "W jaki sposób możemy Ci pomóc?",
      "options": [
         { "text": "Zakupy", "next": "townShopping" },
         { "text": "Sprawy urzędowe", "next": "townService" },
         { "text": "Odbiór zamówienia", "next": "townPickup" },
         { "text": "Zwrot zamówienia", "next": "townRepickup" },
         { "text": "Przesyłka kurierska", "next": "townCourier" },
         { "text": "Pralnia", "next": "townLaundry" },
         { "text": "Szewc", "next": "townShoemaker" },
         { "text": "Zegarmistrz", "next": "townWatchmaker" },
         { "text": "Inne", "next": "otherQueries", "value": "townSelected" }
      ],
      "display": "block",
      "style": "row"
   },

   // 4th step
   // townShopping
   "townShopping": {
      "question": "W jakim sklepie należy wykonać zakupy? Mozesz wpisać jego nazwę lub konkretny adres.",
      "options": [
         { "text": "Dalej", "next": "townShopping_2" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townShopping_2": {
      "question": "Co należy kupić? Wypisz wszystkie produkty, które potrzebujesz.",
      "options": [
         { "text": "Dalej", "next": "townShopping_3" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townShopping_3": {
      "question": "Gdzie należy je dostarczyć?",
      "options": [
         { "text": "Dalej", "next": "townShopping_4" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townShopping_4": {
      "question": "Kiedy chcesz, aby zakupy zostały dostarczone?",
      "options": [
         { "text": "Dalej", "next": "townShopping_5" },
      ],
      "type": 'input',
      "style": "column",
      "display": "flex",
   },
   "townShopping_5": {
      "question": "Na kiedy ich potrzebujesz?",
      "options": [
         { "text": "Dziś", "next": "townShopping_6", value: "today" },
         { "text": "Jutro", "next": "townShopping_6", value: "tomorrow" },
         { "text": "Dowolnie", "next": "townShopping_6", value: "anytime" },
         { "text": "Jak najszybicej", "next": "townShopping_6", value: "asap" },
         { "text": "Nie ma pośpiechu", "next": "townShopping_6", value: "noAsap" },
         { "text": "Wybierz dzień", "next": "calendar", value: "calendar" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column",
      "lastQuestion": true
   },

   // townService
   "townService": {
      "question": "Co to jest za sprawa?",
      "options": [
         { "text": "Temat związane z pojadzem", "next": "car" },
         { "text": "Sprawy związane z meldunkiem", "next": "checkin" },
         { "text": "Inne", "next": "otherQueries", "value": "townService" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },

   // townPickup
   "townPickup": {
      "question": "W jakim sklepie należy odebrać zamówienie?",
      "options": [
         { "text": "Dalej", "next": "townPickup_2" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townPickup_2": {
      "question": "Podaj szczegóły zamówienia - numer zamówienia, nr. telefonu, czy jest opłacone (lub coś więcej, jeśli wiesz, że jest potrzebne).",
      "options": [
         { "text": "Dalej", "next": "townPickup_3" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townPickup_3": {
      "question": "Gdzie należy je dostarczyć?",
      "options": [
         { "text": "Dalej", "next": "townPickup_4" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townPickup_4": {
      "question": "Na kiedy ich potrzebujesz?",
      "options": [
         { "text": "Dalej", "next": "townPickup_5" },
      ],
      "type": 'input',
      "style": "column",
      "display": "flex",
      "lastQuestion": true
   },

   // townRepickup
   "townRepickup": {
      "question": "Do jakiego sklepu należy zwrócić zamówienie?",
      "options": [
         { "text": "Dalej", "next": "townRepickup_2" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townRepickup_2": {
      "question": "Kiedy upływa termin zwrotu?",
      "options": [
         { "text": "Data", "next": "townRepickup_3", value: "calendar" },
         { "text": "Nie wiem", "next": "townRepickup_3" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townRepickup_3": {
      "question": "Skąd możemy odebrać zamówienie?",
      "options": [
         { "text": "Dalej", "next": "townRepickup_4" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townRepickup_4": {
      "question": "Często zwrot za zamówienia przyjmowany jest na kartę płatniczą, abyśmy mogli Ci go zwrócić, podaj swój numer konta. Możesz też to zrobić później.",
      "options": [
      ],
      "type": 'input',
      "style": "column",
      "display": "flex",
      "lastQuestion": true
   },

   // townCourier
   "townCourier": {
      "question": "Gdzie należy odebrać przesyłkę?",
      "options": [
         { "text": "Dalej", "next": "townCourier_2" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townCourier_2": {
      "question": "Gdzie należy ją dostarczyć?",
      "options": [
         { "text": "Dalej", "next": "townCourier_3" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townCourier_3": {
      "question": "Do kiedy chciałbyś aby została dostarczona?",
      "options": [
      ],
      "type": 'input',
      "style": "column",
      "display": "flex",
      "lastQuestion": true
   },

   // townLaundry
   "townLaundry": {
      "question": "Skąd możemy je odebrać?",
      "options": [
         { "text": "Dalej", "next": "townLaundry_2" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townLaundry_2": {
      "question": "Jak dużo masz rzeczy do prania?",
      "options": [
         { "text": "Dalej", "next": "townLaundry_3" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townLaundry_3": {
      "question": "Czy potrzebujesz ich z powrotem do konkretnego dnia?",
      "options": [
         { "text": "Dalej", "next": "townLaundry_4" },
      ],
      "type": 'input',
      "display": "flex",
      "style": "column"
   },
   "townLaundry_4": {
      "question": "Czy ceny pralni są dla Ciebie znane, czy chcesz abyśmy potwierdzili cenę usługi?",
      "options": [
      ],
      "type": 'input',
      "style": "column",
      "display": "flex",
      "lastQuestion": true
   },

   // townShoemaker
   "townShoemaker": {
      "question": "Brak dalszych pytań.",
      "options": [
      ],
      "type": 'input',
      "display": "flex",
      "style": "column",
      "lastQuestion": true
   },

   // townWatchmaker
   "townWatchmaker": {
      "question": "Brak dalszych pytań.",
      "options": [
      ],
      "type": 'input',
      "display": "flex",
      "style": "column",
      "lastQuestion": true
   },


   // // // // // // // // // // // // // // 
   // Other queries
   "otherQueries": {
     "question": "Wpisz swoje zapytanie",
     "options": [
     ],
     "type": 'input',
     "style": "column",
     "lastQuestion": true
   },
};

export default formConfig;
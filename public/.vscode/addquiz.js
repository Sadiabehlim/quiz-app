// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, set,ref,push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4jgtoUECIHpjRh3LdeAkjVB92rJ1rnZE",
  authDomain: "quiz-app-ce3d6.firebaseapp.com",
  projectId: "quiz-app-ce3d6",
  storageBucket: "quiz-app-ce3d6.appspot.com",
  messagingSenderId: "577120427629",
  appId: "1:577120427629:web:fe8df03d0245683679e964",
  measurementId: "G-1QH9VK48T1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()
var question =document.getElementById("question");
var option =document.getElementById("option");

var optionsParent =document.getElementById("optionsParent");

var correctAnswerElem =document.getElementById("correctAnswer");
var options = []
var correctAnswer
function renderOptions() {
  optionsParent.innerHTML = ''
  for(var i = 0; i < options.length; i++){
    optionsParent.innerHTML +=`<li onclick="setCorrectAnswer('${options[i]}')">${options[i]}</li>`
  }
}
window.addOption = function() {
options.push(option.value)
console.log(options)
renderOptions();
}

window.setCorrectAnswer = function(a) {
correctAnswer = a
correctAnswerElem.innerHTML = correctAnswer
}
window.submitQuestion = function() {
  var obj = {
    question : question.value,
    options :options,
    correctAnswer:correctAnswer,
  }
  obj.id = push(ref(db,'questions/')).key
const reference = ref(db,`questions/${obj.id}`)
set(reference,obj)

  console.log(obj);
}
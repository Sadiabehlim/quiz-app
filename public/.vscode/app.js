var questions = [
    {
        question: "Html stands for _____________",
        option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
        correctAns: "hyper text markup language"
    },
    {
        question: "JS stands for _____________",
        option: ["java script", "hyper text markup language", "css", "html"],
        correctAns: "java script"
    },
    {
        question: "CSS stands for _____________",
        option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
        correctAns: "cascading style sheet"
    },

    {
        question:"RAM stands for _____________",
        option:["random access memoery","hyper text markup language","html","html"],
        correctAns:"random access memoery"
    },
    {
        question:"ROM stands for _____________",
        option:["read only memory","hyper text markup language","html","html"],
        correctAns:"read only memory"
    }
]

var Displayquestion = document.getElementById("Displayquestion");
var optionParent = document.getElementById("OptionParent");
var totalQues = document.getElementById("totalQues");
var current = document.getElementById("current");
var progre = document.getElementById("progre");
var cong = document.getElementById("cong");
var per = document.getElementById("per");
var but = document.getElementById("but");

var indexVal = 0;
var marks = 0;
per.innerHTML = ((marks / questions.length) * 100).toFixed(2)+" %"
var b = document.getElementById("b")
progre.max = questions.length;
function renderQuestion() {
    progre.value = ""
    Displayquestion.innerHTML = questions[indexVal].question;
    for (i = 0; i < questions[indexVal].option.length; i++) {
        optionParent.innerHTML += `<div class="col-md-6">
             <button id="but" onclick="checkAns('${questions[indexVal].correctAns}','${questions[indexVal].option[i]}')" class="w-100 rounded mb-2 mt-2">
                  ${questions[indexVal].option[i]}
             </button>
          </div>`
    }
    progre.value = indexVal + 1
    totalQues.innerHTML = questions.length;
    current.innerHTML = indexVal + 1
}
renderQuestion()

function nextQues() {
    if (indexVal + 1 < questions.length) {
        optionParent.innerHTML = ""
        indexVal++
        renderQuestion();
    }
    else {
        alert("no more questions")
    }
}
var mainDiv=document.getElementById("a");
var quizTime=document.getElementById("quiz-time-left")
function checkAns(a, b) {
    if (a == b) {
        marks++;
        per.innerHTML = ((marks / questions.length) * 100).toFixed(2)+" %"
        console.log(marks)
        
        if (indexVal + 1 < questions.length) {
            optionParent.innerHTML = ""
            indexVal++;
            renderQuestion()
        }
        else {
            console.log("congrats your marks is " + marks)
            cong.style.display = "block";
            
            mainDiv.style.display="none"
            quizTime.style.display="none"
        }
    }
    else{
        if (indexVal + 1 < questions.length) {
            optionParent.innerHTML = ""
            indexVal++;
            renderQuestion()
            console.log("incorrect")
        }
        else {

            console.log("congrats your marks is " + marks);
            
            cong.style.display = "block";
            mainDiv.style.display="none"
            quizTime.style.display="none"
        }
}
}



var total_seconds = 60 * 10;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
function CheckTime() {
    document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds';
    if (total_seconds <= 0) {
        alert("timeup")
        document.getElementById("quiz-time-left").style.display = "none";
    }

    else {
        total_seconds = total_seconds - 1;
        c_minutes = parseInt(total_seconds / 60);
        c_seconds = parseInt(total_seconds % 60);
        setTimeout("CheckTime()", 1000);
    }
}
setTimeout("CheckTime()", 1000)
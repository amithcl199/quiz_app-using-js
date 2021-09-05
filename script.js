const quizDB= [
    {

    question: "Q1: Who is the last king of nepal?",
    a : 'Birendrsa Shah',
    b : 'Gyanendra Shah',
    c : 'Prithivi Narayan Shah',
    d : 'Ram Shah',
    ans :'ans2'
},
    {

    question: "Q2: When did Royal Massacare took place?",
    a : '2058, jestha 17',
    b : '2058, jestha 16',
    c : '2058, jestha 18',
    d : '2058, jestha 19',
   
    ans :'ans4'
},
    {

    question: "Q3: What is the name of first constitution of Nepal?",
    a : 'The Nepal Government Legal Act',
    b : 'The Interim Government Legal Act of Nepal',
    c : 'The constitution of Kingdom of Nepal',
    d : 'Interim constitution of Nepal',
    ans :'ans2'
},
    {

    question: "Q4: Which No PM is the kp Sharma oli?",
    a : '35th',
    b : '37th',
    c : '38th',
    d : '39th',
    ans :'ans3'
},
//     {

//     question: "Q5: When did gorkha Get victory over nuwakot?",
//     a : '15 Aswin, 1801,B.S',
//     b : '25 Kartik, 1801,B.S',
//     c : '20 Aswin, 1801,B.S',
//     d : '30 Kartik 1802, B.S',
//     ans :'ans2'
// },
//     {

//     question: "Q6: Full form of HTML ?",
//     a : 'Hyper Text Markup Language',
//     b : 'Hyper Test Markup Protocol Language',
//     c : 'Hyper Transform Markup protocol',
//     d : 'Hyper Tool Markup Language',
//     ans :'ans1'
// },
//     {

//     question: "Q7: Full form of CSS?",
//     a : 'Cascaded Style Sheet',
//     b : 'Colored Style Sheet',
//     c : 'Click style Sheet',
//     d : 'Cancel Style Sheet',
//     ans :'ans1'
// },
//     {

//     question: "Q8: New Local Body System in Nepal ?",
//     a : '744',
//     b : '745',
//     c : '746',
//     d : '747',
   
//     ans :'ans1'
// },
//     {

//     question: "Q9:What is the percent of Nepal area compared to the World area ?",
//     a : '0.03%',
//     a : '0.04%',
//     a : '0.05%',
//     a : '0.06%',
    
//     ans :'ans1'
// },
//     {

//     question: "Q10: Average East-West length  of nepal?",
//     a : '885 KM',
//     b : '887 KM',
//     c : '888 KM',
//     d : '889 KM',
   
//     ans :'ans1'
// }

];

const question = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const question2 = document.querySelector('#option2')
const question3 = document.querySelector('#option3')
const question4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')
const answers = document.querySelectorAll('.answer')
const showscore= document.querySelector('#showscore')


 let questionCount= 0;
 let score=0;
const loadquestion=()=>{
 question.innerHTML= quizDB[questionCount].question;
 option1.innerHTML= quizDB[questionCount].a;
 option2.innerHTML= quizDB[questionCount].b;
 option3.innerHTML= quizDB[questionCount].c;
 option4.innerHTML = quizDB[questionCount].d;
 
}
loadquestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer= curAnsElem.id;
        }

    
        
    });
    return answer;
}
const deselectAll =()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked= false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer= getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer== quizDB[questionCount].ans){
        score++
    };
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadquestion();
    }else{
        showscore.innerHTML=`
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class= "btn" onclick= "location.reload()">Play Again </button>
        `;
        showscore.classList.remove('scoreArea');
    }
})
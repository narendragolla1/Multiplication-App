const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)


const questionEl=document.getElementById('question');
questionEl.innerText=`What is ${num1} multiply by ${num2}?`;
const CorrectAns=num1*num2;
const formEl=document.getElementById('form');
const scoreE1=document.getElementById('score');

let score=JSON.parse(localStorage.getItem('score'));
const inputEl=document.getElementById('input');
formEl.addEventListener('submit',()=>{
    const userans=inputEl.value
    if(userans==CorrectAns)
    {
        score++;
        updatelocalstorage();
    }
    else;{
        score--;
    
    updatelocalstorage();
    }
}

)


scoreE1.innerText=`score: ${score}`;
function updatelocalstorage()
{
    localStorage.setItem('score',JSON.stringify(score))
}
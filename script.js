let question = document.querySelector('.question')
let answer_buttons = document.querySelectorAll('.answer')
let containerH4 = document.querySelector('.container_h4')
let start_button  = document.querySelector('.btn-start')
let = container_start = document.querySelector('.start')
let container_main = document.querySelector(".main")
let sings_list = ['+','-','*','/']
function getRandomSings(){
    return sings_list[randint(0,3)]
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex); 
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [   
      array[randomIndex], array[currentIndex]];
  }
  return array; 
}


class Question{
    constructor(){
        let a = randint(1,30) 
        let b = randint(1,30)
        let sign = getRandomSings()

        this.question = `${a} ${sign} ${b}`
        if (sign == '+'){
            this.correct_answer = a +b
        }else if(sign=='*') {
            this.correct_answer = a*b
        }
       else if (sign == '-'){
            this.correct_answer = a -b
        }else if(sign=='/') {
            this.correct_answer = a/b
        }

        this.correct_answer = a+b
        this.answer =[
        randint(this.correct_answer-15, this.correct_answer-1),
        randint(this.correct_answer-15, this.correct_answer-1),
        this.correct_answer,
        randint(this.correct_answer-15, this.correct_answer-1),
        randint(this.correct_answer-15, this.correct_answer-1),

        ]
        shuffle(this.answer)
    }
    display(){
        question.innerHTML = this.question
        for (let i=0; i < answer_buttons.length; i+=1){
            answer_buttons[i].innerHTML = this.answer[i]




        }
    }
}
function randint(min,max){
    return Math.round(Math.random()*(max - min) +min)
}
 let total_question_asked
 let current_question
 let right_amount
start_button.addEventListener('click',function(){
    container_main.style.display = 'flex'
    container_start.style.display ='none'

total_question_asked =  0
current_question = new Question()
current_question.display()
right_amount = 0


setTimeout(function(){
        container_main.style.display = 'none'
    container_start.style.display ='flex'
    
    containerH4.innerHTML = `вы дали ${right_amount}
         Точност - ${Math . round(right_amount * 100 / total_question_asked)}%`
},10000)
})






for (let i=0;i<answer_buttons.length;i+=1){
    answer_buttons[i].addEventListener('click',function(){
        if (answer_buttons[i].innerHTML ==current_question.correct_answer){
        console.log('true')
        right_amount +=1
        answer_buttons[i].style.background = "#00FF0"
        anime({
            targets:answer_buttons[i],
            background:'#000000',
            duration:500,
            delay:100,
            easing:'linear'
        })
        }else{
            console.log('false')
        }
        total_question_asked +=1
        current_question = new Question()
        current_question.display()
    })
}


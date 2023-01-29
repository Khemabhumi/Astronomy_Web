const quizData = [
    {
        question: "1.ข้อใคไม่ใช่คุณสมบัติของดาวเคราะห์แคระ (Dwarf Planet) ",
        a: "โคจรรอบดวงอาทิตย์",
        b: "มีมวลมากพอที่จะแรงโน้มถ่วงของดาวสามารถเอาชนะความแข็งของเนื้อดาว",
        c: "มีวงโคจรรอบดวงอาทิตย์ชัดเจน",
        d: "ไม่เป็นบริวารของดาวเคราะห์ดวงอื่น",
        correct: "c",
    },
    {
        question: "2.แก้สที่เป็นองค์ประกอบหลักของเนบิวลา",
        a: "ออกซิเจน",
        b: "ไฮโดรเจน",
        c: "ฮีเลียม",
        d: "คาร์บอน",
        correct: "b",
    },
    {
        question: "3.โปรโตสตาร์ทุกดวงไม่จำเป็นต้องประสบความสำเร็จในการพัฒนาเป็นดาวฤกษ์เสมอไป หากกลุ่มแก๊สมีมวลตั้งต้นน้อยกว่าดวงอาทิตย์ 0.08 เท่า โปรโตสตาร์จึงยุบตัวลงกลายเป็นอะไร",
        a: "ดาวแคระน้ำตาล",
        b: "ดาวแคระขาว",
        c: "เมฆออร์ต",
        d: "ดาวหาง",
        correct: "a",
    },
    {
        question: "4.กลุ่มแก๊สมีมวลตั้งต้นมากกว่าดวงอาทิตย์ 100 เท่า จะเกิดอะไรขึ้น",
        a: "หลุมดำ",
        b: "ดาวจะระเบิด",
        c: "ดาวแคระแดง",
        d: "ดาวนิวตรอน",
        correct: "b",
    },
    {
        question: "5.ดาวจะขยายตัวกลายเป็นดาวยักษ์แดงได้อย่างไร",
        a: "เกิดปฏิกิริยาฟิวชัน",
        b: "ฮีเลียมแฟลช",
        c: "ปล่อย Protostellar Wind ออกมา",
        d: "ดาวเผาผลาญไฮโดรเจนที่แกนหมด",
        correct: "d",
    },
    {
        question: "6.ดาวมวลเท่าใดพ้นลำดับหลักกลายเป็นดาวยักษ์ใหญ่สีแดง แล้วจบชีวิตเป็นซูเปอร์โนวา และดาวนิวตรอน",
        a: "ดาวที่มีมวลตั้งต้นน้อยกว่า 2 เท่าของดวงอาทิตย์",
        b: "ดาวที่มีมวลตั้งต้น 2 - 8 เท่าของดวงอาทิตย์",
        c: "ดาวที่มีมวลตั้งต้นมากกว่า 8 เท่า แต่น้อยกว่า 18 เท่าของดวงอาทิตย์",
        d: "ดาวที่มีมวลตั้งต้นมากกว่า 18 เท่า ของดวงอาทิตย์",
        correct: "c",
    },
    {
        question: "7.ข้อใดไม่ใช่คุณสมบัติของดาวนิวตรอน",
        a: "อะตอมของดาวนิวตรอนไม่มีช่องว่างระหว่างโปรตรอน (ประจุบวก) และอิเล็กตรอน (ประจุลบ)",
        b: "มีเส้นผ่านศูนย์กลางประมาณ 10 - 20 กิโลเมตร",
        c: "มีความหนาแน่นสูงมาก",
        d: "มีอัตราความเร่งสามารถเอาชนะความเร็วแสง",
        correct: "d",
    },
    {
        question: "8.หากเข้าไปยังจุดศูนย์กลางจะเกิดอะไรขึ้น",
        a: "กาลเวลาจะหยุดนิ่ง",
        b: "หลุดดำระเบิด",
        c: "เคลื่อนที่เร็วเท่าแสง",
        d: "ไปมิติอื่น",
        correct: "a",
    },
    {
        question: "9.ดวงอาทิตย์อยู่ห่างจากศูนย์กลางของกาแล็กซีด้วยความเร็วเท่าไหร่",
        a: "ความเร็ว 120 กิโลเมตรต่อวินาที",
        b: "ความเร็ว 220 กิโลเมตรต่อวินาที",
        c: "ความเร็ว 320 กิโลเมตรต่อวินาที",
        d: "ความเร็ว 420 กิโลเมตรต่อวินาที",
        correct: "b",
    },
    {
        question: "10.ข้อใดไม่ใช่กาแล็กซีกังหัน (Spiral Galaxy)",
        a: "Sa",
        b: "Sb",
        c: "Sc",
        d: "SBa",
        correct: "d",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
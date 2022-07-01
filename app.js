let questions = [
    {
      id: 1,
      body: "1) Azerbaycanin paytaxti haradir?",
      answers: [
        {
          id: 1,
          answer: "Baki",
          isCorrect: true,
        },
        {
          id: 2,
          answer: "Qebele",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "Lenkaran",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "Gence",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      body: "2) ilk ixtira olunan masin markasi?",
      answers: [
        {
          id: 1,
          answer: "BMW",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "Mercedes",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "Ford",
          isCorrect: true,
        },
        {
          id: 4,
          answer: "Nissan",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      body: "3) Esrin muqavilesi necenci ilde olub?",
      answers: [
        {
          id: 1,
          answer: 1905,
          isCorrect: false,
        },
        {
          id: 2,
          answer: 1890,
          isCorrect: false,
        },
        {
          id: 3,
          answer: 1997,
          isCorrect: false,
        },
        {
          id: 4,
          answer: 1994,
          isCorrect: true,
        },
      ],
    },
  ];

  let index=0;
  let question= document.getElementById("question")
  let count = document.getElementById("count")
  let answers = document.querySelector(".answers")
  let next = document.getElementById("next")
  let Res= document.querySelector(".result")
  let result=[]

  const QuizFunction=(i)=>{

    question.innerText = questions[i].body
    count.innerText = `${i+1}/${questions.length}`
    answers.innerHTML=" "

    questions[i].answers.map((a)=>{
        let li = document.createElement("li")
        li.innerText=a.answer
        li.addEventListener("click",()=>{
            document.querySelector(".selected") && document.querySelector(".selected").classList.remove("selected")

            li.classList.add("selected")
            let data = {
                id: i + 1,
                answer: a.answer,
              };
              result.push(data);
        })
        answers.append(li)
    })

  }

  QuizFunction(index)

  const showResults = () => {
    let count = 0;
    result.map((a) => {
      let question = questions.find((t) => t.id == a.id);
      let correctAnswer = question.answers.find((a) => a.isCorrect).answer;
      if (correctAnswer == a.answer) {
        count++;
      }
    });
    Res.style.display="block"
    Res.innerText=`sizin ${questions.length} sualdan ${count} dogrunuz var !`
    
  };

  next.addEventListener("click",()=>{
    if (document.querySelector(".selected")) {
        index++;
        if (index < questions.length) {
          QuizFunction(index);
        } else {
          showResults();
          confirm("Imtahan Tesdiq edilsin?!!")
         
        }
      } else {
        alert("Cavab secin...");
      }
  })


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Question from '../components/question';

const QuizComponent = () => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(10); // 10 seconds timer
  const location = useLocation();
  const { name, category } = location.state || {};
  const [questionList, setQuestionList] = useState([])
  const [questionResult, setQuestionResult] = useState({
    correctAnswer: 0,
    wrongAnswer: 0,
    skippedQuestion: 0,
    totalQuestion: 0
  })


  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          nextQuestion()
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestion]);


  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const nextQuestion = (answer) => {
    setSelectedOption(null);
    setTimer(10)
    setQuestionResult((prev) => {
      switch (answer) {
        case true: {
          return {
            ...prev,
            correctAnswer: prev.correctAnswer + 1
          }
        }
        case false: {
          return {
            ...prev,
            wrongAnswer: prev.wrongAnswer + 1
          }
        }
        default: {
          return {
            ...prev,
            skippedQuestion: prev.skippedQuestion + 1
          }
        }
      }
    })
    updateQuestion();
  };


  useEffect(() => {
    let questionList = quizData.categories.find((cat) => cat.id === category).questions
    setQuestionList(questionList)
    setQuestionResult((prev) => {
      return {
        ...prev,
        totalQuestion: questionList.length
      }
    })
  }, [])



  const updateQuestion = () => {

    if (currentQuestion == questionList.length - 1) {
      navigate("/result", { state: { questionResult } })
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const totalQuestion = questionList.length
  if (!questionList[currentQuestion]) {
    return null
  }
  return (
    <Question
      questionNumber={currentQuestion + 1}
      questionDetails={questionList[currentQuestion]}
      totalQuestion={totalQuestion}
      nextQuestion={nextQuestion}
      handleOptionChange={handleOptionChange}
      timer={timer}
      selectedOption={selectedOption}
    />)

};

export default QuizComponent;



let quizData =
{
  "categories": [
    {
      "id": "js_basics",
      "name": "JavaScript Basics",
      "questions": [
        {
          "id": "q1",
          "question": "What is the correct syntax for referring to an external script called 'script.js'?",
          "options": [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        }
      ]
    }
  ]
}
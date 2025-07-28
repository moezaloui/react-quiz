import { useState, useEffect } from 'react'
import Quiz from './components/Quiz'
import Results from './components/Resultats'
import questionsData from '../questions.json'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleAnswer = (answer, isCorrect, points) => {
    setSelectedAnswer(answer)
    if (isCorrect) {
      setScore(score + points)
    }
    setTimeout(() => {
      goToNextQuestion()
    }, 1000)
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setTimeLeft(questionsData[currentQuestionIndex + 1].Time)
    } else {
      setQuizCompleted(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setQuizCompleted(false)
    setSelectedAnswer(null)
    setTimeLeft(questionsData[0].Time)
  }

  useEffect(() => {
    if (!quizCompleted) {
      setTimeLeft(questionsData[currentQuestionIndex].Time)
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            goToNextQuestion()
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [currentQuestionIndex, quizCompleted])

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">Quiz React Amani</h1>
        
        {!quizCompleted ? (
          <Quiz
            question={questionsData[currentQuestionIndex]}
            timeLeft={timeLeft}
            onAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questionsData.length}
          />
        ) : (
          <Results
            score={score}
            totalQuestions={questionsData.length}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  )
}

export default App
function Quiz({ question, timeLeft, onAnswer, selectedAnswer, currentQuestion, totalQuestions }) {
  const answers = [
    question.Answer1,
    question.Answer2,
    question.Answer3,
    question.Answer4,
  ]

  const correctAnswer = question.CorrectAnswer

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">Question {currentQuestion}/{totalQuestions}</span>
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Points: {question.Points}</span>
          <div className="bg-accent text-white px-3 py-1 rounded-full">
            {timeLeft}s
          </div>
        </div>
      </div>
      
      <h2 className="text-xl font-semibold mb-6">{question.Question}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {answers.map((answer, index) => {
          const isCorrect = answer === correctAnswer
          const isSelected = selectedAnswer === answer
          
          let buttonClass = "p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-colors"
          
          if (selectedAnswer) {
            if (isSelected) {
              buttonClass = isCorrect 
                ? "p-4 rounded-lg border-2 border-green-500 bg-green-100"
                : "p-4 rounded-lg border-2 border-red-500 bg-red-100"
            } else if (isCorrect) {
              buttonClass = "p-4 rounded-lg border-2 border-green-500 bg-green-100"
            }
          }
          
          return (
            <button
              key={index}
              className={`${buttonClass} text-left`}
              onClick={() => !selectedAnswer && onAnswer(answer, isCorrect, question.Points)}
              disabled={selectedAnswer}
            >
              {answer}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Quiz
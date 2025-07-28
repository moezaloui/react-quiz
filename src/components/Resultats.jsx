function Results({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / (totalQuestions * 1000)) * 100)
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-primary mb-4">Quiz Terminé!</h2>
      <div className="mb-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary-100">
                Score
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary">
                {percentage}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
            ></div>
          </div>
        </div>
      </div>
      
      <p className="text-lg mb-2">
        Vous avez obtenu <span className="font-bold text-secondary">{score}</span> points sur {totalQuestions * 1000} possibles!
      </p>
      <p className="text-gray-600 mb-6">
        Vous avez répondu correctement à {score / 1000} questions sur {totalQuestions}.
      </p>
      
      <button
        onClick={onRestart}
        className="bg-primary hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Recommencer le quiz
      </button>
    </div>
  )
}

export default Results
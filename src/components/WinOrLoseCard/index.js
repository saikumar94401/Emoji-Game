import './index.css'

const WinOrLoseCard = props => {
  const {score, updatePlayStatus} = props
  const result = score === 12
  const resultImageUrl = result
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultText = result ? 'You Won' : 'You Lose'
  const resultScoreText = result ? 'Best Score' : 'Score'

  const changePlayStatus = () => {
    updatePlayStatus()
  }
  return (
    <div className="win-lose-container">
      <div className="score-card-container">
        <div className="result-card">
          <h1 className="result-text">{resultText}</h1>
          <p className="result-score-text">{resultScoreText}</p>
          <p className="result-score">{score}/12</p>
          <button
            type="button"
            className="result-button"
            onClick={changePlayStatus}
          >
            Play Again
          </button>
        </div>
        <img src={resultImageUrl} alt="win or lose" className="result-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard

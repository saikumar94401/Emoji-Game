import './index.css'

const Navbar = props => {
  const {topScore, score, isPlaying} = props
  return (
    <div className="navbar-container">
      <div className="emoji-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-logo-text">Emoji Game</h1>
      </div>
      {isPlaying ? (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      ) : null}
    </div>
  )
}

export default Navbar

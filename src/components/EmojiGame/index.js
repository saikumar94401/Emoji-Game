/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {topScore: 0, score: 0, emojis: [], isPlaying: true}

  youWonGame = () => {
    const {score} = this.state
    if (score === 12) {
      this.setState({isPlaying: false})
    }
  }

  onUpdateScore = id => {
    const {emojis} = this.state
    const findEmoji = emojis.find(each => each === id)
    console.log(findEmoji)
    if (findEmoji !== undefined) {
      this.setState({isPlaying: false})
    } else {
      this.setState(
        prev => ({
          score: prev.score + 1,
          emojis: [...prev.emojis, id],
        }),
        this.youWonGame,
      )
    }
  }

  emojisPicker = () => {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const emojisList = shuffledEmojisList()
    return (
      <div className="emoji-container">
        <ul className="emoji-list">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              eachEmoji={eachEmoji}
              onUpdateScore={this.onUpdateScore}
            />
          ))}
        </ul>
      </div>
    )
  }

  updatePlayStatus = () => {
    const {score, topScore} = this.state
    this.setState(prev => ({isPlaying: !prev.isPlaying}))
    if (score > topScore) {
      this.setState({emojis: [], topScore: score, score: 0})
    } else {
      this.setState({emojis: [], score: 0})
    }
  }

  render() {
    const {topScore, score, isPlaying} = this.state

    return (
      <div className="emoji-game-container">
        <NavBar topScore={topScore} score={score} isPlaying={isPlaying} />
        {isPlaying ? (
          this.emojisPicker()
        ) : (
          <WinOrLoseCard
            isPlaying={isPlaying}
            topScore={topScore}
            score={score}
            updatePlayStatus={this.updatePlayStatus}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame

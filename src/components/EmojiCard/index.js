import './index.css'

const EmojiCard = props => {
  const {eachEmoji, onUpdateScore} = props

  const onClickEmoji = () => {
    onUpdateScore(eachEmoji.id)
  }
  return (
    <li className="each-emoji">
      <button type="button" className="each-emoji-button">
        <img
          className="each-emoji-image"
          src={eachEmoji.emojiUrl}
          alt={eachEmoji.emojiName}
          onClick={onClickEmoji}
        />
      </button>
    </li>
  )
}
export default EmojiCard

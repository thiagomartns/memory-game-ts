import React from 'react'
import './singleCard.scss';
import coverImg from '/assets/img/cover.png'

interface CardProps {
  card: {
    src: string,
    id: number
  },
  handleChoice: (card: {src: string, id: number}) => void,
  flipped: boolean;
  disabled: boolean;
}

const SingleCard = ({ card, handleChoice, flipped, disabled }: CardProps) => {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={coverImg} alt="cover" onClick={handleClick} />
      </div>
    </div>
  )
}

export default SingleCard
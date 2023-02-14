import React from 'react'
import './singleCard.scss';
import coverImg from '/assets/img/cover.png'

interface CardProps {
  card: {
    src: string,
    id: number
  }
}

const SingleCard = ({ card }: CardProps) => {
  return (
    <div className="card" key={card.id}>
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={coverImg} alt="cover" />
      </div>
    </div>
  )
}

export default SingleCard
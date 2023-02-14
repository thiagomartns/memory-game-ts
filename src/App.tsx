import { useState } from 'react';
import './App.scss';
import SingleCard from './components/singleCard/SingleCard';
interface CardImage {
  src: string;
  id: number;
}

const cardImages: CardImage[] = [
  { "src": "assets/img/helmet-1.png", id: 1 },
  { "src": "assets/img/potion-1.png", id: 2 },
  { "src": "assets/img/ring-1.png", id: 3 },
  { "src": "assets/img/scroll-1.png", id: 4 },
  { "src": "assets/img/shield-1.png", id: 5 },
  { "src": "assets/img/sword-1.png", id: 6 },
]


function App() {

  const [cards, setCards] = useState<CardImage[]>([])
  const [turns, setTurns] = useState<number>(0)

  const shuffleCards = (): void => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }));
    
    setCards(shuffledCards)
    setTurns(0);
  }
  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} />
        ))}
      </div>
    </div>
  )
}

export default App

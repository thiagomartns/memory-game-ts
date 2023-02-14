import { useState } from 'react';
import './App.scss';
interface CardImage {
  src: string;
  id: number;
}

const cardImages: CardImage[] = [
  { "src": "/img/helmet-1.png", id: 1 },
  { "src": "/img/potion-1.png", id: 2 },
  { "src": "/img/ring-1.png", id: 3 },
  { "src": "/img/scroll-1.png", id: 4 },
  { "src": "/img/shield-1.png", id: 5 },
  { "src": "/img/sword-1.png", id: 6 },
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
    </div>
  )
}

export default App

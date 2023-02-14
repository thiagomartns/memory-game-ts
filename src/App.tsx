import { useState, useEffect } from 'react';
import './App.scss';
import SingleCard from './components/singleCard/SingleCard';
interface CardImage {
  src: string;
  id: number;
  matched: boolean
}

interface CardChoice {
  src: string,
  id: number
}

const cardImages: CardImage[] = [
  { "src": "assets/img/helmet-1.png", id: 1, matched: false },
  { "src": "assets/img/potion-1.png", id: 2, matched: false },
  { "src": "assets/img/ring-1.png", id: 3, matched: false },
  { "src": "assets/img/scroll-1.png", id: 4, matched: false },
  { "src": "assets/img/shield-1.png", id: 5, matched: false },
  { "src": "assets/img/sword-1.png", id: 6, matched: false },
]


function App() {

  const [cards, setCards] = useState<CardImage[]>([])
  const [turns, setTurns] = useState<number>(0)
  const [choiceOne, setChoiceOne] = useState<CardChoice | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<CardChoice | null>(null)

  const shuffleCards = (): void => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }));
    
    setCards(shuffledCards)
    setTurns(0);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          })
        })
        resetTurn()
      } else {
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards);

  const handleChoice = (card: CardChoice) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  const resetTurn = (): void => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }
  
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  )
}

export default App

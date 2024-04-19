import React, { useState, useEffect } from 'react';
import './Home.css';
import Card from './Card.jsx';

export default function Home() {
  const [cardOrder, setCardOrder] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffledCards = shuffleCards();
    setCardOrder(shuffledCards);
  }, []);

  const shuffleCards = () => {
    const cards = [
      { title: 'Charmender', image: './images/img13.png' },
      { title: 'Squirtle', image: './images/img14.png' },
      { title: 'Jigglypuff', image: './images/img15.png' },
      { title: 'Mew', image: './images/img5.png' },
      { title: 'Balbasur', image: './images/img16.png' },
      { title: 'Meowth', image: './images/img7.png' },
      { title: 'Snorlax', image: './images/img8.png' },
      { title: 'Eevee', image: './images/img9.png' },
      { title: 'Pichu', image: './images/img11.png' },
      { title: 'Penguin', image: './images/img19.png'},
      { title: 'Elephi', image: './images/img20.png' },
      { title: 'Chikorita', image: './images/img21.png' },

    ];
    return cards.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (title) => {
    if (clickedCards.includes(title)) {
      setIsGameOver(true);
      handleGameOver();
    } else {
      const newClickedCards = [...clickedCards, title];
      setClickedCards(newClickedCards);
      setScore(newClickedCards.length);

      if (newClickedCards.length === cardOrder.length) {
        const shuffledCards = shuffleCards();
        setCardOrder(shuffledCards);
        setClickedCards([]);
      } else {
        const shuffledCards = shuffleCards();
        setCardOrder(shuffledCards);
      }
    }
  };
  const handleGameOver = () => {
    window.alert('Game Over!\nClick OK to play again?');
      resetGame();
  };

  const resetGame = () => {
    const shuffledCards = shuffleCards();
    setCardOrder(shuffledCards);
    setClickedCards([]);
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <div className="home-container">
      {/* navbar */}
      <nav className="navbar">
        <h1 className="nav-heading">Memory Game</h1>
      </nav>
      <p>Do not click on the same Pokemon twice!</p>
      <p>Score: {score}</p>
      <div className="card-container">
        <div className="column 1">
          {cardOrder.slice(0, 3).map((card, index) => (
            <React.Fragment key={index}>
              <Card
                title={card.title}
                image={card.image}
                onClick={handleCardClick}
              />
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="column 2">
          {cardOrder.slice(3, 6).map((card, index) => (
            <React.Fragment key={index}>
              <Card
                title={card.title}
                image={card.image}
                onClick={handleCardClick}
              />
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="column 3">
          {cardOrder.slice(6, 9).map((card, index) => (
            <React.Fragment key={index}>
              <Card
                title={card.title}
                image={card.image}
                onClick={handleCardClick}
              />
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      
    </div>
  );
}
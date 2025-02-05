import { useEffect, useState, useRef } from 'react'
import "./App.css";
import Action from './Action';

function App() {
  const [deckId, setDeckId] = useState(null);
  const [cardImages, setCardImages] = useState([]);
  const noMoreCardsRef = useRef(false);

  useEffect(() => {
    async function loadDeck() {
      const NEW_DECK = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

      try {
        const deck = await fetch(NEW_DECK);
        const deckJSON = await deck.json();
        setDeckId(deckJSON["deck_id"]);
      } catch (error) {
        console.error("Failed to load deck", error);
      }
    }

    loadDeck();
  }, []);

  async function drawCard() {
    if (noMoreCardsRef.current) {
      alert("Error: no cards remaining!");
    } else {
      const deck = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
      const drawCardFromDeck = await fetch(deck);
      const drawCardFromDeckJSON = await drawCardFromDeck.json();

      if (drawCardFromDeckJSON["remaining"] === 0) {
        noMoreCardsRef.current = true;
      }

      setCardImages(cardImages => {
        return [...cardImages, drawCardFromDeckJSON["cards"][0]["image"]];
      })
    }
  }

  async function shuffleDeck() {
    console.log("Shuffle!");
  }

  const enabled = deckId !== null;

  return (
    <>
      <div>
        <div className="button-layout">
          <Action name={"Gimme a card!"} callback={drawCard} enabled={enabled} />
          <Action name={"Shuffle!"} callback={shuffleDeck} enabled={enabled} />
        </div>
        <div className="cards-layout">
          {cardImages.map((cardImage, index) => {
            return <img key={index} src={cardImage} />
          })}
        </div>
      </div>
    </>
  );
}

export default App

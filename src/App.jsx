import { useEffect, useState } from 'react'
import "./App.css";
import Action from './Action';

function App() {
  const [deckId, setDeckId] = useState(null);

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

  function drawCard() {
    console.log("Draw!");
  }

  function shuffleDeck() {
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
          <img src="https://images.vat19.com/covers/large/giant-playing-cards.webp" />
          <img src="https://images.vat19.com/covers/large/giant-playing-cards.webp" />
          <img src="https://images.vat19.com/covers/large/giant-playing-cards.webp" />
          <img src="https://images.vat19.com/covers/large/giant-playing-cards.webp" />
        </div>
      </div>
    </>
  );
}

export default App

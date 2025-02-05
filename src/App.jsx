import { useEffect, useRef } from 'react'
import "./App.css";

function App() {
  const deckIdRef = useRef(null);

  useEffect(() => {
    async function loadDeck() {
      const NEW_DECK = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

      try {
        const deck = await fetch(NEW_DECK);
        const deckJSON = await deck.json();
        deckIdRef.current = deckJSON["deck_id"];
      } catch (error) {
        console.error("Failed to load deck", error);
      }
    }

    loadDeck();
  }, []);

  return (
    <>
      <div>
        <div className="button-layout">
          <button>Gimme a card!</button>
          <button>Shuffle!</button>
        </div>
        <div className="cards-layout">
          <img src="https://images.vat19.com/covers/large/giant-playing-cards.webp" />
          <img src="https://images.vat19.com/covers/large/giant-playing-cards.webp" />
          <img src="https://images.vat19.com/covers/large/giant-playing-cards.webp" />
          <img src="https://images.vat19.com/covers/large/giant-playing-cards.webp" />
        </div>
      </div>
    </>
  )
}

export default App

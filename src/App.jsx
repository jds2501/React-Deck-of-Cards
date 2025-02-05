import { useState } from 'react'
import "./App.css";

function App() {
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

import { useState } from 'react';
import '../styles/App.scss';

function App() {
  
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');

  const handleClick = (event) => {
  setNumberOfErrors (numberOfErrors + 1);
  console.log(numberOfErrors)
  } 
  const handleInputLetter = (event) => {
    setLastLetter(event.target.value);
   const letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    if(lastLetter.includes(letter)) {
      setLastLetter(lastLetter);
    }
      

    

  return (
    <div class="page">
    <header>
      <h1 class="header__title">Juego del ahorcado</h1>
    </header>
    <main class="main">
      <section>
        <div class="solution">
          <h2 class="title">Solución:</h2>
          <ul class="letters">
            <li class="letter">k</li>
            <li class="letter">a</li>
            <li class="letter"></li>
            <li class="letter">a</li>
            <li class="letter">k</li>
            <li class="letter">r</li>
            <li class="letter"></li>
            <li class="letter">k</li>
            <li class="letter">e</li>
            <li class="letter">r</li>
          </ul>
        </div>
        <div class="error">
          <h2 class="title">Letras falladas:</h2>
          <ul class="letters">
            <li class="letter">f</li>
            <li class="letter">q</li>
            <li class="letter">h</li>
            <li class="letter">p</li>
            <li class="letter">x</li>
          </ul>
        </div>
        <form class="form">
          <label class="title" for="last-letter">Escribe una letra:</label>
          <input
            autocomplete="off"
            class="form__input"
            maxlength="1"
            type="text"
            name="last-letter"
            id="last-letter"
            onInput={handleInputLetter}
            value={lastLetter}
          />
        </form>
        <button onClick={handleClick}>Incrementar</button>
      </section>
      <section className={`dummy error-${numberOfErrors}`}>
        <span className="error-13 eye"></span>
        <span className="error-12 eye"></span>
        <span className="error-11 line"></span>
        <span className="error-10 line"></span>
        <span className="error-9 line"></span>
        <span className="error-8 line"></span>
        <span className="error-7 line"></span>
        <span className="error-6 head"></span>
        <span className="error-5 line"></span>
        <span className="error-4 line"></span>
        <span className="error-3 line"></span>
        <span className="error-2 line"></span>
        <span className="error-1 line"></span>
      </section>

    </main>
  </div>
  );
}

export default App;

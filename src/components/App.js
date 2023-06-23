import { useState, useEffect } from 'react';
import '../styles/App.scss';

function App() {
  
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('pepino');
  const [userLetters, setUserLetters] = useState([]);


  const handleClick = (event) => {
  setNumberOfErrors (numberOfErrors + 1);
  console.log(numberOfErrors)
  } 
  const handleInputLetter = (event) => {
    setLastLetter(event.target.value);
    const letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    if(letter.includes(event.target.value)) {
      userLetters.push(event.target.value);
      setUserLetters(userLetters);
    }else {
      return 'letra incorrecta'
    }
  }

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((eachWord) => {
      if(userLetters.includes(eachWord)){
      return <li className='letter'>{eachWord}</li>
      }else {
        return <li className='letter'></li>
      }
    })
  }

  const renderErrorLetters = ()=> {
    const filteredLetters = userLetters.filter(oneLetter => !word.includes(oneLetter));
    return filteredLetters.map((eachFilteredLetter) => {
    return  <li className="letter">{eachFilteredLetter}</li>
    })
  }

  return (
    <div className="page">
    <header>
      <h1 className="header__title">Juego del ahorcado</h1>
    </header>
    <main className="main">
      <section>
        <div className="solution">
          <h2 className="title">Solución:</h2>
          <ul className="letters">{renderSolutionLetters()}
          </ul>
        </div>
        <div clasNames="error">
          <h2 className="title">Letras falladas:</h2>
          <ul className="letters">{renderErrorLetters()}
            <li className="letter">f</li>
            <li className="letter">q</li>
            <li className="letter">h</li>
            <li className="letter">p</li>
            <li className="letter">x</li>
          </ul>
        </div>
        <form className="form">
          <label className="title" for="last-letter">Escribe una letra:</label>
          <input
            autocomplete="off"
            className="form__input"
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

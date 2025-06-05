// Ciao ragazzi,
// esercizio di oggi: Primi passi con use state
// repo: react-use-state
// **Esercizio**
// Oggi proviamo a usare lo stato di React!
// Dato un array di oggetti contenente i linguaggi del web e le loro descrizioni:
// - Crea una lista di bottoni, uno per  linguaggio.
// - Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
// - Fare in modo che, cliccando uno dei bottoni, la card in basso visualizzi il linguaggio corrispondente e la relativa descrizione
// **Bonus**
//
// - Scomporre la card dei dettagli in un componente a parte che mantenga le sue funzionalità
// - Scomporre i buttons in componenti a parte che mantengono tutte le funzionaliltà


import languages from "./languages"
import LanguageButton from "./assets/LanguageButton"
import { useState } from 'react'

function App() {

  const [SLanguage, setSLanguage] = useState(null)

  return (
    <>
      <h1>Learn Web Development</h1>

      <div className="container">

        <div className="btnGroups">
          {languages.map(language => (
            <LanguageButton
              key={language.id}
              onClick={() => setSLanguage(language)}
              language={language} 
              isSelected={SLanguage && SLanguage.id === language.id} />
          ))}
        </div>


        <div className="card">
          {SLanguage ? (
            <>
              <h3>{SLanguage.title}</h3>
              <div className="description">{SLanguage.description}</div>
            </>
          ) : (
            <p>Nessun linguaggio selezionato</p>
          )}
        </div>
      </div>



    </>
  )
}

export default App

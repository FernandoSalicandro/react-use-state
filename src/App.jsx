
import languages from "./languages"
import LanguageButton from "./assets/LanguageButton"
import Card from "./assets/Card"
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
          
           <Card language = {SLanguage}/>
          
        </div>
      </div>
    </>
  )
}

export default App

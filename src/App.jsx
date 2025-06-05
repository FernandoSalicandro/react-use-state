

import languages from "./languages"
import { useState } from 'react'

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <>
      <h1>Learn Web Development</h1>

      <div className="container">

        <div className="btnGroups">
          {languages.map(language => (
            <button
              key={language.id}
              onClick={() => setSelectedLanguage(language)}
              className={language.id === selectedLanguage.id ? 'active' : ''}
            >
              {language.title}
            </button>
          ))}
        </div>


        <div className="card">
          <h3>{selectedLanguage.title}</h3>
          <div className="description">{selectedLanguage.description}</div>
        </div>
      </div>


    </>
  )
}

export default App

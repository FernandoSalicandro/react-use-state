const Card = ({language}) => {
   if(!language) {
    return <div className="card">
        <p>Nessun Linguaggio Selezionato</p>
    </div>
    } return (
          <div className="card">
            <h3>{language.title}</h3>
            <div className="description">{language.description}</div>
        </div>
    )
   }


   export default Card
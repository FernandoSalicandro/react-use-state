const LanguageButton = ({language, isSelected, onClick}) => {

return (
    <button onClick ={onClick} className={isSelected ? 'active' : ''}>{language.title}</button>
)

}

export default LanguageButton
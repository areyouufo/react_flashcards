import './FormCreate.css'

export function FormCreateCard() {
    return (
        
        <form className="form">
            <label className='input-title'>
                Передняя сторона карточки: 
                <input type="text" name="fronttext" className="input"/>
            </label>
            <label className='input-title'>
                Задняя сторона карточки: 
                <input type="text" name="backtext" className="input"/>
            </label>
            <input type="submit" value="Создать карточку" className="btn_create"/>
        </form>
    )
}
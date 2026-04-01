import './FormCreate.css'

export function FormCreateSet() {
    return (
        <form className="form">
            <label className='input-title'>
                Название набора: 
                <input type="text" name="name" className="input"/>
            </label>
            <label className='input-title'>
                Описание: 
                    <textarea name="discription" className="input" />
            </label>
            <input type="submit" value="Создать сет" className="btn_create" />
        </form>
    )
}
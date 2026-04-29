import './FormCreate.css'
import { useForm } from 'react-hook-form'
import React from 'react'


export function FormCreateCard() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            fronttext: "",
            backtext: ""
        }
    });
    console.log(errors);

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (count !== 0) {
            console.log(`Отправка формы : ${count}`);
            alert(`Отправка формы : ${count}`);
        }
    }, [count]);

    return (

        <form className="form" onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <label className='input-title'>
                Передняя сторона карточки:
                <input
                    type="text"
                    name="fronttext"
                    className="input"
                    id='fronttext'
                    {...register('fronttext', {
                        required: "Заполните поле Передняя сторона карточки"
                    })} />
                <p className='error-msg'>{errors.fronttext?.message}</p>
            </label>
            <label className='input-title'>
                Задняя сторона карточки:
                <input
                    type="text"
                    name="backtext"
                    className="input"
                    id='backtext'
                    {...register('backtext', {
                        required: "Заполните поле Задняя сторона карточки"
                    })} />
                <p className='error-msg'>{errors.backtext?.message}</p>
            </label>
            <input type="submit" value="Создать карточку" className="btn_create" />
        </form>
    )
}
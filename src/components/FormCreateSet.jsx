import React from 'react';
import { useInput } from './UseInput.jsx';
import './FormCreate.css';
import { useForm } from 'react-hook-form'

export function FormCreateSet() {

    const { register, handleSubmit, formState : {errors} } = useForm({
        defaultValues: {
            name: "",
            desc: ""
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

    // const [name, setName] = useInput('');
    // const [desc, setDesc] = useInput('');



    // function handleNameChange(e) {
    //     setName(e.target.value)
    // }
    // function handleDescChange(e) {
    //     setDesc(e.target.value)
    // }

    // function handleSumbit(e) {
    //     e.preventDefault();
    //     console.log(name, desc);
    // }

    return (
        <form className="form" onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <label className='input-title'>
                Название набора:
                <input
                    type="text"
                    name="name"
                    className="input"
                    id='name'
                    // value={name}
                    // onChange={setName}
                    {...register('name', { 
                        required: "Заполните поле Название набора",
                        minLength: {
                            value: 4,
                            message: "Название набора должно содержать минимум 4 символа"
                        } 
                     })} />
                     <p className='error-msg'>{errors.name?.message}</p>
            </label>
            <label className='input-title'>
                Описание:
                <textarea
                name="desc"
                className="input"
                id='desc'
                // value={desc}
                // onChange={setDesc} 
                {...register('desc', {required: "Заполните поле Описание набора",
                minLength: {
                    value: 1,
                    message: "Поле Описание набора должно быть заполнено"
                }
                })}/>
                <p className='error-msg'>{errors.desc?.message}</p>
            </label>
            <input type="submit" value="Создать сет" className="btn_create" />
        </form>
    )

}


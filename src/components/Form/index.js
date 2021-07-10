import {useState} from 'react';
import './style.css';

const Form = () => {
    const [form, setForm] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('hoaaaa')
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>¡Únete a nuestras novedades y promociones!</legend>
                <div className="inputs-container">
                    <input  type="text" placeholder="Ingresa tu nombre"/>
                    <input  type="text" placeholder="Ingresa tu mail"/>
                    <input className="btn-send" type="submit" value="Suscribirme"/>
                </div>
            </fieldset>
        </form>
    )
}


export default Form;
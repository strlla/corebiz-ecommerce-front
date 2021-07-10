import {useState} from 'react';
import Form from '../../components/Form';
import './style.css';

const FormContainer = () => {
    const [message, setMessage] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: ''
    });
    const [formChecked, setFormChecked] = useState({
        name: true,
        email: true
    })
    
    const handleKeyUp = (fieldId, e) => {
        const formData = { ...form, [fieldId]: e.target.value };
        setForm(formData);
    }

    const handleBlur = (fieldId, e) => {
        if(form[fieldId] === ''){
            setFormChecked({...formChecked, [fieldId]: false });
            setMessage('Por favor, complete todos los campos');
        } else{
            setFormChecked({...formChecked, [fieldId]: true });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!Object.keys(form).every(k => form[k] !== '')){
            setMessage('Por favor, complete todos los campos');
        } else {
            if(!/.+@.+\.[A-Za-z]+$/.test(form['email'])){
                setMessage('Por favor, ingrese un email válido');
            } else {
                setMessage('Formulario enviado con éxito!');
            }
        }
        console.log(form);
    }

    return (
        <section className="form-container">
            <Form 
                message={message} formChecked={formChecked} handleBlur={handleBlur} handleSubmit={handleSubmit} handleKeyUp={handleKeyUp}
            />
        </section>
    )
}

export default FormContainer;
import './style.css';

const Form = ({message, formChecked, handleBlur, handleSubmit, handleKeyUp}) => {
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>¡Únete a nuestras novedades y promociones!</legend>
                <div className="inputs-container">
                    <input className={!formChecked['name'] && 'empty-field'} onKeyUp={(e) => handleKeyUp('name', e)} onBlur={(e)=>handleBlur('name', e)} type="text" placeholder="Ingresa tu nombre"/>
                    <input className={!formChecked['email'] && 'empty-field'} onKeyUp={(e) => handleKeyUp('email', e)} onBlur={(e)=>handleBlur('email', e)} type="text" placeholder="Ingresa tu mail"/>
                    <input className="btn-send" type="submit" value="Suscribirme"/>
                </div>
            </fieldset>
            <p className="form-message">{message}</p>
        </form>
    )
}


export default Form;
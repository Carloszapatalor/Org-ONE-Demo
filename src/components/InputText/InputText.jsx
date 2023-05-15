import "./InputText.css"
const InputText = (props)=>{

    const ControlUpdate = (e) =>{
        props.setValor(e.target.value)
    }

    const {type="text"} = props;

    return (
    <div className={`InputText InputText-${type}`}>
        <label >{props.title}</label>
        <input  
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor}
        onChange={ControlUpdate} 
        type={type}
        />
        
    </div>
    );
}

export default InputText
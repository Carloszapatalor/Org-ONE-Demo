import "./ItemsSelect.css"

const ItemsSelect = (props) =>{
    //Metodo Map -> arreglo.map( (team,index)=>{hace lo que tiene que hacer y avanza al siguiente elemento})


    const setCambio = (e) =>{
        props.setValor(e.target.value)

    }

    return (
        <div className="item-select">
            <label htmlFor="">Equipo</label>
            <select value={props.valor} onChange={setCambio}>
               <option value="" defaultValue="" disabled>Selecciona Equipo</option>

               {props.team.map( (team, index) =>{
                return <option  key={index}>{team}</option>
               })}
            </select>
        </div>
    );

}

export default ItemsSelect
import "./Collaborator.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Collaborator = (props) =>{
    const { nombre, puesto, foto, id, fav} =  props.data;
    const {mainColor, DeleteCollaborator, like}= props;
    return <div className="collaborator">
        <AiFillCloseCircle className="delete" onClick={ ()=> DeleteCollaborator(id)}/>

        <div className="headers" style={{backgroundColor: mainColor}}>
            <img src={foto} alt={nombre} />
        </div>

        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={ () => like(id)}/> :  <AiOutlineHeart onClick={ () => like(id)}/>  }
            
           
        </div>

    </div>
}

export default Collaborator
import "./Team.css"
import hexToRgba from "hex-to-rgba";
import Collaborator from "../Collaboratos/Collaborator"

const Team = (props) =>{

    const {mainColor, id, titulo} = props.data;

    const {Collaborators, DeleteCollaborator, UpdateColor, like} = props;

    const styles= {
        backgroundColor: hexToRgba(mainColor, 0.4)
    }

    return <>
        {Collaborators.length > 0 &&

    
            <section className="team" style={styles}>
                <input 
                    type="color"
                    className="input-color"
                    value={mainColor}
                    onChange={(e) =>{
                        UpdateColor(e.target.value, id);
                    }} />
                <h3 style={{borderColor: mainColor}}> {titulo}</h3>
                <div className="collaborators">
                    {
                        Collaborators.map((collaborator, index) => <Collaborator
                            data={collaborator}
                            key={index}
                            mainColor= {mainColor}
                            DeleteCollaborator={DeleteCollaborator}
                            like={like}
                             />)
                    }
                </div>
            </section>
        }
        </>
        

}

export default Team

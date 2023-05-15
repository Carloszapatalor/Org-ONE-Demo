import  "./Formulario.css"
import InputText from "../InputText/InputText"
import ItemsSelect from "../ItemsSelect/ItemsSelect"
import Button from "../Button/Button"
import { useState } from "react"
const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("")


    const { registerCollaborator, registerTeam }= props;



    const manejarEnvio = (e) =>{
        e.preventDefault();
       
        let sendData ={
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo : equipo
        }

         registerCollaborator(sendData);
    }

    const sendNewTeam = (e) => {
        e.preventDefault();
       registerTeam({titulo, mainColor: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio} >
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <InputText 
            title="Nombre" 
            placeholder="Ingersar Nombre"
            valor={nombre} 
            setValor={actualizarNombre} 
            />
            <InputText 
            title="Puesto" 
            placeholder="Ingersar Puesto"
            valor={puesto} 
            setValor={actualizarPuesto} 
            />
            <InputText 
            title="Foto"  
            placeholder="Ingersar enlace de Foto"
            valor={foto} 
            setValor={actualizarFoto}
            />

            <ItemsSelect 
            valor={equipo}
            setValor={actualizarEquipo} 
            team={props.teams}
            />

            <Button text="Crear"/>
            
        </form>

        <form onSubmit={sendNewTeam} >
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <InputText 
            title="Titulo" 
            placeholder="Ingersar Titulo"
            valor={titulo} 
            setValor={actualizarTitulo} 
            />
            <InputText 
            title="Color" 
            placeholder="Ingersar el color en hexadecimal"
            valor={color} 
            setValor={actualizarColor} 
            type={"color"}
            />

            <Button text="Registrar Equipo"/>

        </form>
    </section>
}

export default Formulario
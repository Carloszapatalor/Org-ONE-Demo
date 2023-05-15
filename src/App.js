import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MyOrg from './components/MyOrg/MyOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';


function App() {

  // condicion ? seMuestra : noseMuestra
  // condicion && seMuestra

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [Collaborators, actualizarCollaborators] = useState([
    {
      id: uuid(),
      nombre: "Carlos",
      puesto: "Desarrollador",
      foto: "https://github.com/evilzeth.png",
      equipo: "Programación",
      fav: false
    },
    {
      id: uuid(),
      nombre: "Maria",
      puesto: "Desarrollador",
      foto: "https://github.com/evilzeth.png",
      equipo: "Programación",
      fav: true
    },
  ]);

  const [teams, UpdateTeams] = useState(
    [
    {
      id: uuid(),
      titulo: "Programación",
      bgColor: "#D9F7E9",
      mainColor: "#57C278",
    },

    {
      id: uuid(),
      titulo: "Front End",
      bgColor: "#E8F8FF",
      mainColor: "#82CFFA",
    },

    {
      id: uuid(),
      titulo: "Data Science",
      bgColor: "#F0F8E2",
      mainColor: "#A6D157",
    },

    {
      id: uuid(),
      titulo: "Devops",
      bgColor: "#FDE7E8",
      mainColor: "#E06B69",
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      bgColor: "#FAE9F5",
      mainColor: "#DB6EBF",
    },

    {
      id: uuid(),
      titulo: "Móvil",
      bgColor: "#FFF5D9",
      mainColor: "#FFBA05",
    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      bgColor: "#FFEEDF",
      mainColor: "#FF8A29",
    },
  ]
  );


  const cambiarMostar =() =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador

  const registerCollaborator = (collaborator) =>{
    console.log("nuevo colaborador", collaborator);
    //spread operatos
    actualizarCollaborators([...Collaborators, collaborator]);

  }

  //Actualizar color

  const UpdateColor = (color, id) =>{
    const UpdateTeam = teams.map((team) =>{
      if (team.id === id){
        team.mainColor = color
      }

      return team
    })

    UpdateTeams(UpdateTeam);

  }

   //Eliminar Colaborador

   const DeleteCollaborator = (id) =>{
    console.log("Eliminar Colaborador", id)
    const NewCollaborators = Collaborators.filter((collaborator) => collaborator.id !== id)
    actualizarCollaborators(NewCollaborators);
   }


   //crear equipo
   const registerTeam = (newTeam) => {
    UpdateTeams([...teams,{...newTeam,id:uuid()}])
   }

   //Agregar Fav

   const like = (id) =>{
    const UpdateLike = Collaborators.map((collaborator=>{
      if (collaborator.id === id){
        collaborator.fav =! collaborator.fav
      }
      return collaborator
    }))
    actualizarCollaborators(UpdateLike);
   }

  

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          teams={teams.map((team) => team.titulo)}
          registerCollaborator={registerCollaborator}
          registerTeam={registerTeam}
        />
      )}

      <MyOrg cambiarMostar={cambiarMostar} />
      {teams.map((team) => (
        <Team
          data={team}
          key={team.titulo}
          Collaborators={Collaborators.filter(
            (collaborator) => collaborator.equipo === team.titulo
          )}
          DeleteCollaborator={DeleteCollaborator}
          UpdateColor={UpdateColor}
          like={like}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;

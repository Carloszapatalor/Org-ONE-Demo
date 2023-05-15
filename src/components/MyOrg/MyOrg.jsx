import "./MyOrg.css"

const MyOrg = (props) =>{

    //const [mostrar, actualizarMostrar] = useState(true)

    //const ManejarClick = () =>{
      //  actualizarMostrar(!mostrar);

    //}

    return (
        <section className="OrgSection">
            <h3 className="title">Mi Organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.cambiarMostar} />
        </section>

    );
}

export default MyOrg
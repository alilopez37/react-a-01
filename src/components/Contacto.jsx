import '../assets/style/contacto.css'
import Card from './Card'

function Contacto() {
 
    const users = [
      {
        id:1,
        name: "Josue",
        lastName: "Galdamez",
      },
      {
        id:2,
        name: "José",
        lastName: "Escobar",
      },
      {
        id:3,
        name: "Diego",
        lastName: "Carmona",
      },
      {
        id:4,
        name: "Josue",
        lastName: "Galdamez",
      },
      {
        id:5,
        name: "José",
        lastName: "Escobar",
      },
      {
        id:6,
        name: "Diego",
        lastName: "Carmona",
      },
      {
        id:7,
        name: "Josue",
        lastName: "Galdamez",
      },
      {
        id:8,
        name: "José",
        lastName: "Escobar",
      },
      {
        id:9,
        name: "Diego",
        lastName: "Carmona",
      },
      {
        id:10,
        name: "Josue",
        lastName: "Galdamez",
      },
      {
        id:11,
        name: "José",
        lastName: "Escobar",
      },
      {
        id:12,
        name: "Diego",
        lastName: "Carmona",
      },
      {
        id:13,
        name: "Josue",
        lastName: "Galdamez",
      },
      
    ];
  
    return (
        <div className="container">
            <h2>Lista de contactos</h2>
            {users.map((user)=> {
                return (
                    <Card 
                      key={user.id}
                      name={user.name}
                      lastName={user.lastName}
                    />
                )
            })}
        </div>
    );
  }
  

  export default Contacto;

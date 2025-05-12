import { useState } from "react";
import User from "./User";
import AddUser from "./AddUser";
import CustomButton from "./shared/customButton";
import CustomInput from "./shared/CustomInput";

function App2(){

  let [users,setUsers] = useState([
    {"id":0,"name":"tariq","email":"tariq@gmail.com","isBloked":true},
    {"id":1,"name":"mohammad","email":"mohammad@gmail.com","isBloked":false},
    {"id":2,"name":"sami","email":"sami@gmail.com","isBloked":true},
    {"id":3,"name":"duha","email":"duha@gmail.com","isBloked":false},
  ]);

  const handleReceiveData = (dataFromChild) => {
    const newUserWithId = { ...dataFromChild, id: users.length };
    setUsers((prevUsers) => [...prevUsers, newUserWithId]);
  };

  return( <div className="users">
    <AddUser onSendData={handleReceiveData}/>
    {
      users.map(user=>
        <User name={user.name} email={user.email} key={user.id} id={user.id}/>
      )
    }
  </div>
  )
}

export default App2;
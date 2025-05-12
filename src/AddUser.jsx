import { useState } from "react";
import CustomButton from "./shared/customButton";
import CustomInput from "./shared/CustomInput";


function AddUser({ onSendData }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    isBlocked: "false"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...user,
      isBlocked: user.isBlocked === "true"
    };
    console.log("User added:", newUser);
    onSendData(newUser);
  };


  return (
    <form onSubmit={handleSubmit}>
      <CustomInput label="Name:" type="text" name="name" id="name" value={user.name} onChange={handleChange} />
      <CustomInput label="Email:" type="email" name="email" id="email" value={user.email} onChange={handleChange} />
      <CustomInput label="Is Blocked:" type="boolean" name="isBlocked" id="isBlocked" value={user.isBlocked} onChange={handleChange} />
      <CustomButton text="Submit" color="primary"/>
    </form>
  );
}

export default AddUser;

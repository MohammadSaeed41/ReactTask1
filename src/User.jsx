import CustomButton from "./shared/customButton";

function User(props){

    return (
        <div className="user"> 
            <h2>id is {props.id}</h2>
            <h2>name is {props.name}</h2>
            <h3>email is {props.email}</h3>
            
            <CustomButton text="details" color="secondary"/>
            <CustomButton text="delete" color="danger"/>
        </div>
    )
}
export default User;
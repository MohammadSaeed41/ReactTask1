function CustomButton(props){

    return(
        <button className={`btn btn-outline-${props.color} btn-lg rounded-pill shadow`}>{props.text}</button>
    )

}

export default CustomButton;
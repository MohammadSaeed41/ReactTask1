function CustomInput(props){

    return(
        <div className="custom-input">
            <label htmlFor={props.id}>{props.label}</label>
            {
                props.type === "boolean" ? (
                    <select name={props.name} id={props.id} value={props.value} onChange={props.onChange}>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                ):(
                    <input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.onChange}/>
                )
            }
        </div>
    )
}

export default CustomInput;
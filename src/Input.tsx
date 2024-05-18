import React from "react"

type InputProps = React.ComponentProps<'input'> & {
    label?:string;
    id?:string;
}

const Input = ({id, label, ...props}: InputProps) => {
    return (
        <div style={{marginBottom: "1rem"}}>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type="text" {...props}/>
        </div>
    );
}

export default Input;

import React from "react"

type InputProps = React.ComponentProps<'input'> & {
    label?:string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({setState, label, ...props}: InputProps) => {
    return (
        <div style={{marginBottom: "1rem"}}>
            <label htmlFor={label}>{label}</label>
            <input 
                id={label} 
                name={label} 
                type="text" 
                onChange={({ currentTarget }) => setState(currentTarget.value)} 
                {...props}
            />
        </div>
    );
}

export default Input;

import React from "react";

const Checkbox = ({ label }: { label: string }) => {
    const [ value, setValue ] = React.useState(false);

    return (
        <label
            style={{
                padding: '1rem',
                border: value ? '2px solid #8B008B	' : '2px solid #CD853F'
            }}
        >
            <input
                type="checkbox"
                checked={value}
                onChange={({currentTarget}) => setValue(currentTarget.checked)}           
            />
            {label}
        </label>
    )
};

export default Checkbox;
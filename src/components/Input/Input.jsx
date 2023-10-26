import "./Input.css"

export default function Input ({className, labelText, type, nameAndID}) {
    return (
        <>
        <label 
        htmlFor={nameAndID}>
        {nameAndID}:
        </label>
        <input 
        className={className}
        type={type}
        name={nameAndID}
        id={nameAndID}>
        </input>
        </>
    )
}
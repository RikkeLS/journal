import "./Input.css"

export default function Input ({className, labelText, type, nameAndID}) {
    return (
        <>
        <label 
            className={className+'-label'}
            htmlFor={nameAndID}>
            {labelText}
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
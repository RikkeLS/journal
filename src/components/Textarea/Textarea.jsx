import "./Textarea.css"

export default function Textarea ({className, nameAndID, labelText}) {
    return (
        <>
        <label 
             className={className+'-label'}
             htmlFor={nameAndID}>
            {labelText}
        </label>

        <textarea             
            className={className}
            name={nameAndID}
            id={nameAndID}>
        </textarea>
        </>

    )
  }
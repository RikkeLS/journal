import "./Button.css"

export default function Button ({buttonType,children}) {
    return (

    <button className="button" type={buttonType}>{children} </button>

    )
  }
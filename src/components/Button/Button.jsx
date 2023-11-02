import "./Button.css"

export default function Button ({buttonType,children,onClick}) {
    return (
    <button className="button" onClick={onClick} type={buttonType}>{children} </button>
    )
  }
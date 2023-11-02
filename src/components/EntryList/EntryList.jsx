import "./EntryList.css";


export default function EntryList ({children}) {
    return (
        <ul className="entries__list">
            {children}
        </ul>
    )
  }
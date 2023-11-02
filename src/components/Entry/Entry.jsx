import "./Entry.css";

import IconButton from "../IconButton/IconButton"
export default function Entry ({entries}) {
    return (
      <li className="entries__list__entry">
      {entries.map((entry)=> (
        <>
        <p key={entry.id} className="entries__list__entry__date">{entry.date} </p> 
        <section className="entries__list__entry__mottoAndIconContainer">
        <p className="entries__list__entry__mottoAndIconContainer__motto">{entry.motto}</p>
        <IconButton isBookmarked={entry.isBookmarked} />
        </section>  
        <article className="entries__list__entry__text">{entry.text}</article>     
        </>
      ))}
    </li>
    )
  }
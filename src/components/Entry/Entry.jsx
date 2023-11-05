/* eslint-disable react/prop-types */
import "./Entry.css";
import IconButton from "../IconButton/IconButton"

export default function Entry ({entries,onToggleBookmark}) {
    return (
      <li className="entries__list__entry">
      {entries.map((entry)=> (
        <>
        <p key={entry.id} className="entries__list__entry__date">{entry.date} </p> 
        <section className="entries__list__entry__mottoAndIconContainer">
        <p className="entries__list__entry__mottoAndIconContainer__motto">{entry.motto}</p>
        <IconButton id={entry.id} onToggleBookmark={onToggleBookmark} isBookmarked={entry.isBookmarked} />
        </section>  
        <article className="entries__list__entry__text">{entry.notes}</article>     
        </>
      ))}
    </li>
    )
  }
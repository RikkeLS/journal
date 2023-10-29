import "./Entry.css";

import IconButton from "../IconButton/IconButton"
export default function Entry ({motto, date, text, isBookmarked}) {
    return (
    <li className="entries__list__entry">
      <p className="entries__list__entry__date">{date} </p>
      <section className="entries__list__entry__mottoAndIconContainer">
        <p className="entries__list__entry__mottoAndIconContainer__motto">{motto}</p>
        <IconButton isBookmarked={isBookmarked} />
      </section>
      <article className="entries__list__entry__text">{text}</article>
    </li>
    )
  }
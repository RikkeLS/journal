import "./Entry.css";

import IconButton from "../IconButton/IconButton"
export default function Entry ({title, date, text}) {
    return (

    <li className="entries__list__entry">Entry:  <p>{date} </p>
    <p>{title}  </p>
    <article>{text}</article>
    <IconButton/>
    </li>
    )
  }
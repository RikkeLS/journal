import "./Tab.css"

import Badge from "../Badge/Badge"
export default function Tab ({text,numberOfEntries,selected}) {
    return (
      <>
        <p className={`tabBar__text tabBar__text${selected ? "-selected":""}`}>
        {text}</p>
        <Badge number={numberOfEntries} selected={selected} />
      </>
    )
  }
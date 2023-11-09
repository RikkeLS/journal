import "./Tab.css"

import Badge from "../Badge/Badge"
export default function Tab ({type,AllSelected, text,numberOfEntries,onSelected}) {
    return (
      <>
        <p className={`tabBar__text tabBar__text${ (AllSelected && type==='all') || (!AllSelected && type==='fav') ? "-selected":""}`}>
        {text}</p>
        <Badge type={type} AllSelected={AllSelected} number={numberOfEntries} onSelected={onSelected} />
      </>
    )
  }
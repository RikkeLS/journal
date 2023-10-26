import "./Tab.css"

import Badge from "../Badge/Badge"
export default function Tab ({text,numberOfEntries}) {
    return (
      <>
        <p>{text}</p>
        <Badge number={numberOfEntries} />
      </>
    )
  }
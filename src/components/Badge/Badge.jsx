import "./Badge.css"

export default function Badge ({number,selected}) {
    return (
      <p className={`tabBar__badge tabBar__badge${selected ? "-selected":""}`}>
      {number}</p>
    )
  }
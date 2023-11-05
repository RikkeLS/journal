import "./Badge.css"

export default function Badge ({AllSelected, type, number,onSelected}) {
    return (
      <p onClick={() => onSelected(AllSelected,type)} className={`tabBar__badge tabBar__badge${ (AllSelected && type==='all') || (!AllSelected && type==='fav') ? "-selected":""}`}>
      {number}</p>
    )
  }
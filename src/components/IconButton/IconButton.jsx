import "./IconButton.css"
import "../Button/Button.css"
import star from '../../resources/star.svg'
import starFilled from '../../resources/star-filled.svg'

export default function IconButton ({isBookmarked,onToggleBookmark,id}) {
    return (
    <img onClick={()=> onToggleBookmark(id)} className="entries__list__entry__mottoAndIconContainer__iconbutton" src={isBookmarked ? starFilled :star}/>
    )
  }
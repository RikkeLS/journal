import "./TabBar.css"
import Tab from "../Tab/Tab"
import { useState } from "react"

export default function TabBar ({allEntries,numberOfFavorites}) { 
  const [AllSelected,setAllSelected] = useState(true)
  
  function handleSelected(type) {
    const newSelected = (AllSelected && type==='fav') || (!AllSelected && type==='all')  ? !AllSelected : AllSelected 
    setAllSelected(newSelected)
  }
  return (
      <section className="tabBar" >
      <Tab type='all' AllSelected={AllSelected} text="All Entries" numberOfEntries={allEntries} selected={true} onSelected={handleSelected}/>
      <Tab type='fav' AllSelected={AllSelected} text="Favorites" numberOfEntries={numberOfFavorites} selected={false} onSelected={handleSelected} />
      </section>
    )
  }
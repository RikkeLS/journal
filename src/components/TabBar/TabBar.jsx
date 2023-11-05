import "./TabBar.css"
import Tab from "../Tab/Tab"

export default function TabBar ({AllSelected, onSelected, allEntries,numberOfFavorites}) { 
  return (
      <section className="tabBar" >
      <Tab type='all' AllSelected={AllSelected} text="All Entries" numberOfEntries={allEntries} selected={true} onSelected={onSelected}/>
      <Tab type='fav' AllSelected={AllSelected} text="Favorites" numberOfEntries={numberOfFavorites} selected={false} onSelected={onSelected} />
      </section>
    )
  }
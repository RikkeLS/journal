import "./TabBar.css"
import Tab from "../Tab/Tab"

export default function TabBar ({allEntries,numberOfFavorites}) {
    return (
      <section className="tabBar" >
      <Tab text="All Entries" numberOfEntries={allEntries} selected={true}/>
      <Tab text="Favorites" numberOfEntries={numberOfFavorites} selected={false} />
      </section>
    )
  }
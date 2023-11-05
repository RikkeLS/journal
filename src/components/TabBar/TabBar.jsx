import "./TabBar.css"
import Tab from "../Tab/Tab"

export default function TabBar ({numberOfEntries,numberOfFavorites}) {
    return (
      <section className="tabBar" >
      <Tab text="All Entries" numberOfEntries={numberOfEntries} selected={true}/>
      <Tab text="Favorites" numberOfEntries={numberOfFavorites} selected={false} />
      </section>
    )
  }
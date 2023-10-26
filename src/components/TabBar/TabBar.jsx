import "./TabBar.css"
import Tab from "../Tab/Tab"

export default function TabBar () {
    return (
      <section className="tabBar" >
      <Tab text="All Entries" numberOfEntries={42} selected={true}/>
      <Tab text="Favorites" numberOfEntries={4} selected={false} />
      </section>
    )
  }
import "./TabBar.css"
import Tab from "../Tab/Tab"

export default function TabBar () {
    return (
      <>
      Tab Bar: 
      <Tab text="All Entries" numberOfEntries={42}/>
      <Tab text="Favorites" numberOfEntries={4} />
      </>
    )
  }
import { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { uid } from 'uid'
// import './App.css'
import './styles.css'
import './resources/colors.css'
import Main from './components/Main/Main'
import './components/Main/Main.css'
import Header from './components/Header/Header'
import './components/Header/Header.css'
import Footer from './components/Footer/Footer'
import './components/Footer/Footer.css'
import EntryForm from './components/EntryForm/EntryForm'
import './components/EntryForm/EntryForm.css'
import EntriesSection from './components/EntriesSection/EntriesSection'
import './components/EntriesSection/EntriesSection.css'
import TabBar from './components/TabBar/TabBar'
import './components/TabBar/TabBar.css'
import EntryList from './components/EntryList/EntryList'
import Entry from './components/Entry/Entry'
import { initialEntries } from './resources/initialEntries'

console.clear()

function App() { 
  const [entries,setEntries] = useLocalStorageState('entries',{defaultValue:initialEntries})

  function handleAddEntry(newEntry) {
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    const date = new Date();
    const monthNum = date.getMonth();
    const month = months[monthNum]
    const day = date.getDate();
    const year = date.getFullYear();
    const currentDate = `${month} ${day}, ${year}`;
    setEntries([{'id':uid(),'date':currentDate,'isBookmarked':false,...newEntry},...entries])
    console.log(entries);
  }
  function handleToggleBookmark(id) {
    setEntries(entries.map(entry => entry.id===id ? {...entry,isBookmarked:!entry.isBookmarked}: entry ))
  }
  const [AllSelected,setAllSelected] = useState(true)
  
  function handleSelected(type) {
    const newSelected = (AllSelected && type==='fav') || (!AllSelected && type==='all')  ? !AllSelected : AllSelected 
    setAllSelected(newSelected)
  }

  return (
    <>
    <Header/>
      <Main>
      <EntryForm onAddEntry={handleAddEntry}/>
      <EntriesSection>
        <TabBar AllSelected={AllSelected} onSelected={handleSelected} allEntries={entries.length} numberOfFavorites={entries.filter(entry=>entry.isBookmarked===true).length}/>
        <EntryList>
          <Entry onToggleBookmark={handleToggleBookmark} entries={entries}/>
        </EntryList>
      </EntriesSection>
      </Main>
      <Footer/>
    </>
  )
}

export default App

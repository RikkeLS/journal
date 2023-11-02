// import { useState } from 'react'
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
  return (
    <>
    <Header/>
      <Main>
      <EntryForm/>
      <EntriesSection>
        <TabBar/>
        <EntryList>
          <Entry entries={initialEntries}/>
        </EntryList>
      </EntriesSection>
      </Main>
      <Footer/>
    </>
  )
}

export default App

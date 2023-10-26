import "./EntryList.css";

import Entry from "../Entry/Entry"

export default function EntryList ({}) {
    return (
        <ul className="entries__list">
        Entry list:
            <Entry title='title' date='date' text='text' />
            <Entry title='title' date='date' text='fodius  oadfi idoasfu adof uidasfyeiwryuwei  dsfy oau fiadou fua diofauf ' />

        </ul>
    )
  }
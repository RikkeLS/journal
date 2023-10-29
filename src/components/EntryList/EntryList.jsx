import "./EntryList.css";

import Entry from "../Entry/Entry"

export default function EntryList () {
    return (
        <ul className="entries__list">
            <Entry 
            motto="That's life in the city"
            date='OCT 27, 2023'
            text='textf adfj ioa ejifiweiewif weifjweijfasdhcn wefwaeoiufewiou'
            isBookmarked={false}
            />
            <Entry motto="That's life in general"
            date='OCT 20, 2023'
            text='fodius  oadfi idoasfu adof uidasfyeiwryuwei  dsfy oau fiadou fua diofauf '
            isBookmarked={true}
            />
        </ul>
    )
  }
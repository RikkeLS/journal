import "./EntriesSection.css";

const initialEntries = [{
  motto:"That's life in the city",
  date:'OCT 27, 2023',
  text:'textf adfj ioa ejifiweiewif weifjweijfasdhcn wefwaeoiufewiou',
  isBookmarked:false
},  
{
  motto:"That's life in general",
  date:'OCT 20, 2023',
  text:'fodius  oadfi idoasfu adof uidasfyeiwryuwei  dsfy oau fiadou fua diofauf',
  isBookmarked:true
}]


export default function EntriesSection ({children}) {
    return (
      <section className="entries">
        {children}
      </section>
    )
  }
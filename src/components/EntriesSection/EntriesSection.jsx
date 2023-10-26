import "./EntriesSection.css";

export default function EntriesSection ({children}) {
    return (
      <section className="entries">
        {children}
      </section>
    )
  }
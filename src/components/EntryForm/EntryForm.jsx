import "./EntryForm.css"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Textarea from "../Textarea/Textarea"

export default function EntryForm ({onAddEntry}) {
  function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log(data);
    onAddEntry(data)
    // event.target.reset()
    event.target.motto.focus()
  }
  return (
    <form className='entry-form' onSubmit={handleSubmit}>
      <h3>NEW ENTRY</h3>
      <Input 
      className='entry-form__input'
      type='text' nameAndID='motto'
      labelText='Motto' />
      <Textarea
      className='entry-form__textarea'
      nameAndID='notes'
      labelText='Notes'
      />
      <Button 
      buttonType='submit'>
      Create
      </Button>
    </form>
  )
}
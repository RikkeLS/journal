import "./EntryForm.css"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Textarea from "../Textarea/Textarea"

export default function EntryForm () {
  console.log('in entryform');
  function handleSubmit(event) {
    event.preventDefault();
    console.log('submitted');
  }
  return (
    <form className='entry-form'>
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
      <Button onClick={handleSubmit}
      buttonType='submit'>
      Create
      </Button>
    </form>
  )
}
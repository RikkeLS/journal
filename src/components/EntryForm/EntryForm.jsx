import "./EntryForm.css"

import Button from "../Button/Button"
import Input from "../Input/Input"
import Textarea from "../Textarea/Textarea"

export default function EntryForm () {
    return (
      <form className='entry-form'>
        <Input className='entry-form__input' type='text' labelText='New Entry' nameAndID='motto'/>
        <Textarea nameAndID='notes'/>
        <Button buttonType='submit'>
        Create
        </Button>
      </form>
    )
  }
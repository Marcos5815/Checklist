import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./To-Do-Form.style.css"

export function ToDoForm({ onSubmit, defaultValue }) {
  return (
    <form action={onSubmit} className="form-style">
      <TextInput 
      placeholder="Digite o item que deseja adicionar"
      required
      name="description"
      defaultValue={defaultValue}
       />
      <Button>Salvar item</Button>
    </form>
  );
}

import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })

  function handleSubmit(event){
    event.preventDefault()
    const newItem ={
      id: uuid(), 
      ...formData
    }
    props.onItemFormSubmit(newItem)

  }

  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})

  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleChange} type="text" name="name" value={formData.name}/>
      </label>

      <label>
        Category:
        <select onChange={handleChange} name="category" value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

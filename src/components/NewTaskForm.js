import React from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [formData, setFormData] = React.useState({
    text: "",
    category: "Code"
  })

  const categoryComponents = categories.slice(1).map( cat => {
    return(
      <option key={cat}>{cat}</option>
    )
  })

  function handleInput(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(formData)
    setFormData({
      text: "",
      category: "All"
    })
  }

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleInput} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleInput}>
          {categoryComponents}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={handleSubmit} onSubmit={handleSubmit}/>
    </form>
  );
}

export default NewTaskForm;

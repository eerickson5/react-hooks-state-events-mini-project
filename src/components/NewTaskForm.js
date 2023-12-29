import React from "react";

function NewTaskForm({categories}) {

  const categoryComponents = categories.slice(1).map( cat => {
    return(
      <option>{cat}</option>
    )
  })

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categoryComponents}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

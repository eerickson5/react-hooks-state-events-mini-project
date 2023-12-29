import React from "react";
import Task from './Task'

function TaskList({tasks, onRemoveTask, activeCategory}) {

  console.log("recieved: ", tasks)
  const taskComponents = tasks.filter( task => {
    if(activeCategory === "All") return true
    return task.category === activeCategory
    }).map((task, index) => {
    return(
      <Task 
      category={task.category} 
      text={task.text} 
      index={index} 
      onRemoveTask={onRemoveTask}
      key={index} />
    )
  })
  return (
    <div className="tasks">
      {taskComponents}
    </div>
  );
}

export default TaskList;

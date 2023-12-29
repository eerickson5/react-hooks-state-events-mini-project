import React from "react";
import Task from './Task'

function TaskList({tasks, onRemoveTask}) {
  const taskComponents = tasks.map((task, index) => {
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

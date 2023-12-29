import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
function App() {
  const [tasks, setTasks] = React.useState(TASKS);
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  function handleRemoveTask(index){
    setTasks(
      tasks.slice(0, index).concat(tasks.slice(index + 1)) 
    )
  }

  function onTaskFormSubmit(task){
    setTasks([
      ...tasks,
      task
    ])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedIndex={selectedIndex} onCategoryClicked={setSelectedIndex}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} activeCategory={CATEGORIES[selectedIndex]}/>
    </div>
  );
}

export default App;

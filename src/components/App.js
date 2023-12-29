import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = React.useState(TASKS);
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  function handleRemoveTask(index){
    console.log("i was called with " + index)
    setTasks(
      tasks.slice(0, index).concat(tasks.slice(index + 1)) 
    )
  }

  function handleAddTask(task){
    console.log("received: ", task)
    setTasks([
      ...tasks,
      task
    ])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedIndex={selectedIndex} onCategoryClicked={setSelectedIndex}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} activeCategory={CATEGORIES[selectedIndex]}/>
    </div>
  );
}

export default App;

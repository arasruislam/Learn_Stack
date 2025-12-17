import { useState } from "react";
import AddTaskModel from "./AddTaskModel";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "First Task",
    description: "This is the first task description",
    tags: ["js", "ts"],
    priority: "high",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModel, setShowAddModel] = useState(false);
  const [editTaskModel, setEditTaskModel] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          task;
        })
      );
    }
    setShowAddModel(false);
  };

  const handleEditTask = (task) => {
    setEditTaskModel(task);
    setShowAddModel(true);
  };

  const handleCloseClick = () => {
    setShowAddModel(false);
    setEditTaskModel(null);
  };

  const handleDeleteClick = (taskId) => {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  };

  const handleDeleteAllTask = () => {
    setTasks([]);
  };

  function handleSearch(searchTerm) {
    console.log(searchTerm);

    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setTasks([...filtered]);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModel && (
          <AddTaskModel
            onSave={handleAddTask}
            onCloseClick={handleCloseClick}
            editTaskModel={editTaskModel}
          />
        )}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask onSearch={handleSearch} />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16 ">
            <TaskActions
              onAddTask={() => setShowAddModel(true)}
              onDeleteAllTask={handleDeleteAllTask}
            />
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDeleteClick={handleDeleteClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}

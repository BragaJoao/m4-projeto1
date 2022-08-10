import React, { useState, useEffect } from 'react';
/* import { getAllTasks } from "../Services/Server"; */
import { ToDoService } from '../Services/Service';

function Task({ task }) {
  const { text } = task;

  return <li class="list-group-item py-3">{text}</li>;
}

export default function List() {
    const [tasks, setTasks] = useState([]);

    const getAllTasks = async () => {
      const response = await ToDoService.getAllTasks();
      setTasks(response);
    };
  
    useEffect(() => {
      getAllTasks();
    }, []);


  return (
    <div class="row g-3">
    <div class="col">
      <section class="py-5">
        <h2 class="h5 mb-4">Minhas tarefas</h2>
        <ul class="list-group" data-todo-target="list">
          {tasks.map((task) => (
            <Task task={task} />
          ))}
        </ul>
      </section>
    </div>
    </div>
  );
}

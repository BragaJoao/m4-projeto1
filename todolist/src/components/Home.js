import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToDoService } from '../Services/Service';
import Tasks from './Tasks'
export default function Home() {
    const [task, setTask] = useState('');

    const navigate = useNavigate();
  async  function NewTask(){
    
       const response = await ToDoService.createTask({text: task})
       navigate("/");
        return response
    }

    

    return (
        <div class="container">
            <div class="row">
                <article class="pt-5 pb-2">
                    <h1>Todo List</h1>
                </article>
            </div>
            <div class="row g-3">
                <div class="col">
                    <label 
                        class="visually-hidden" 
                        for="AddTaskInput"
                    >
                        Add Task
                    </label>
                    <input 
                        class="form-control form-control-lg" 
                        id="AddTaskInput"
                        value={task}
                        onChange={(event) => setTask(event.target.value) }
                        type="text"
                        placeholder="Add Task..." 
                        aria-label="Add Task..."
                    />
                </div>
                <div class="col-auto">
                    <button 
                    class="btn btn-lg btn-primary"
                    data-todo-target="add"
                    onClick={NewTask}
                    >
                        +
                    </button>
                </div>
            </div>

            <Tasks />

        </div>
    );
}

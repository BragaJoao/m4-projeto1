import { Api } from '../helpers/Api'

const parseResponse = (response) => response.json();

export const ToDoService = {
    getAllTasks: () => fetch(Api.getAll(), {method: 'GET'}).then(parseResponse),
    createTask: (task) => fetch(Api.create(), {method: 'POST', body: JSON.stringify(task), mode: "cors", headers: {
        "Content-Type": "application/json"}}).then(parseResponse),
    getTaskById: (id) => fetch(Api.getById(id), {method: 'GET'}).then(parseResponse),
    updateTask: (id) => fetch(Api.update(id), {method: 'PUT'}).then(parseResponse),
    deleteTask: (id) => fetch(Api.delete(id), {method: 'DELETE'}).then(parseResponse)
}

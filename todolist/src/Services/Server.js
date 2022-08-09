const Api = {
    baseUrl: "http://localhost:3001",

    getAllUrl: () => Api.baseUrl + "/list",
    createTaskUrl: () => Api.baseUrl + "/list",
    getByIdUrl: (id) => Api.baseUrl + "/list/" + id,
    deleteIdUrl:(id) => Api.baseUrl + "/list/" + id,
    updateIdUrl:(id) => Api.baseUrl + "/list/" + id
}


async function getAllTasks() {
    let answer = await fetch (Api.getAllUrl);
    let tasks = await answer.json();

    return tasks
}

async function createTask(item) {
    let header = {
        method: 'POST',
        body: JSON.stringfy(item),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }

    let answer = await fetch (Api.createTaskUrl, header)
    let newTask = await answer.json()

    return newTask
}

async function getTaskById(id) {
    let answer = await fetch (Api.getByIdUrl);
    let task = await answer.json();

    return task
}

async function updateTaskById (id, newTask) {
    let header = {
        method: 'PUT',
        body: JSON.stringify(newTask),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }

    let answer = await fetch (Api.updateIdUrl, header)
    let newTask = await answer.json()

    return newTask
}

async function deleteTaskById (id) {
    let header = {
        method: 'DELETE',
    }

    let answer = await fetch (Api.deleteIdUrl, header)
    let status = await answer.status;

    return status
}

export {
    Api,
    getAllTasks,
    createTask,
    getTaskById,
    updateTaskById,
    deleteTaskById
}
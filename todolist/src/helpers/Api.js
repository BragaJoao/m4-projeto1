const TodoContext = {
    toDoEndPoint: () => `${Api.baseUrl}/list`,
    getAll: () => `${TodoContext.toDoEndPoint()}`,
    create: () => `${TodoContext.toDoEndPoint()}`,
    getById: (id) => `${TodoContext.toDoEndPoint()}/${id}`,
    update: (id) => `${TodoContext.toDoEndPoint()}/${id}`,
    delete: (id) => `${TodoContext.toDoEndPoint()}/${id}`
}

export const Api = {
    baseUrl: 'http://localhost:3001',
    ...TodoContext
}



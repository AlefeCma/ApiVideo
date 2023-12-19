const connection = require('./connection')

const getAll = async ()=>{
    const tasks = await connection.execute('select * from tasks');
    return tasks[0];
}
const createTask = async (tasks) =>{
    const {title} = tasks;
    const dateUtc = new Date(Date.now()).toUTCString()

    const query = 'insert into tasks(title,status,create_at) values(?,?,?)'
    const createTask = await connection.execute(query , [title, 'pendente',dateUtc])
    
    return createTask[0]
}
const deleteTask = async (id) =>{

   const removedTask = await connection.execute('delete from tasks where id=?',[id])
    return removedTask
}
const updateTask = async (id,task) =>{
    const {title,status} = task
    const updateTask = await connection.execute('update tasks set title=?,status=? where id=?',[title,status,id])
}
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};
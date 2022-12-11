import { Task } from "../models/Task.js"

export const getTasks = async(req, res) =>{
    try {
        const tasks = await Task.findAll()
    res.json(tasks)
    } catch (error) {
        return res.json({message: error.message})
    }
}

export const createTask =async (req, res) =>{
    try {
        
        const {name, done, projectId} = req.body
        const newTask = await Task.create({
            name,
            done,
            projectId
        })
        res.json({message: 'task created!'})
    } catch (error) {
        return res.json({message: error.message})
    }
}

export const getTask = async(req, res) =>{
   try {
    const {id} = req.params
    const taskFound = await Task.findOne({
        where:{
            id
        }
    })
    res.status(200).json(taskFound)
   } catch (error) {
    return res.json({message: error.message})
   }
}

export const deleteTask = async(req, res) =>{
    try {
        const {id} = req.params
        Task.destroy({
            where:{
                id
            }
        })
        res.status(200).json({message: 'task deleted'})
    } catch (error) {
        return res.json({message: error.message})
    }
}

export const updateTask = async(req, res) =>{
try {
    const {id} = req.params
    const {name, done} = req.body
    const taskFound = await Task.findByPk(id)
    taskFound.name = name
    taskFound.done = done

    taskFound.save()

    res.status(201).json({message: 'task updated!'})
} catch (error) {
    return res.json({message: error.message})
}
}
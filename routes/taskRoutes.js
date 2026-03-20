import express from 'express'
import Task from '../models/Task.js'
import { authMiddleware } from '../utils/auth'
import Project from '../models/Project.js'

const router = express.Router();

router.use(authMiddleware);

//POST /api/projects/:projectId/tasks
router.post('/:projectId/tasks', (req,res) =>{
    try{

    }catch(error){

    }
})

//POST /api/projects/:projectId/tasks

router.post('/:projectId/tasks', async (req,res) =>{
    try{

        const project = await Project.findone({})

    }catch(error){

    }
})

//PUT /api/tasks/:taskId

router.post('/:projectId/tasks', (req,res) =>{
    try{

    }catch(error){

    }
})

//DELETE /api/tasks/:taskId

router.post('/:projectId/tasks', (req,res) =>{
    try{

    }catch(error){

    }
})
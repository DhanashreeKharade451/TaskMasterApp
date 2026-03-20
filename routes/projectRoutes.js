import express, { Router } from "express";
import Project from "../models/Project.js";
import { authMiddleware } from "../utils/auth.js";

const router = express.Router();

router.use(authMiddleware);

//POST /api/projects
router.post("/", async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "cannot post request" });
  }
});

//GET /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id }).populate(
      "user",
    );
    res.status(200).json(project);
  } catch {}
});
//GET /api/projects/:id

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findOne(req.params.dictionary, req.user._id);

    if (!project) {
      req.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch {
    res.status(500).json({ message: "cannot post request" });
  }
});

//PUT /api/projects/:id


router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findOne(req.params.id);

    if (!project) {
     return req.status(404).json({ message: "Project not found" });
    }
if(project.user.toString() !== req.user._id){
     return req.status(403).json({ message: "user is not authorized to updatete this" });
}

    res.status(200).json(project);
  } catch {
    res.status(500).json({ message: "cannot post request" });
  }
});
//DELETE /api/projects/:id

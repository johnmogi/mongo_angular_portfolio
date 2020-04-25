const express = require("express");
const Project = require("../models/project");
const projectsLogic = require("../business-logic/projects-logic");
const router = express.Router();

router.get("/", async (request, response) => {
    try {
        const projects = await projectsLogic.getAllProjectsAsync();
        
        response.json(projects);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/:_id", async (request, response) => {
    try {
        const project = await projectsLogic.getOneProjectAsync(request.params._id);
        if(!project) {
            response.sendStatus(404);
            return;
        }
        response.json(project);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.post("/", async (request, response) => {
    try {
        const project = new Project(request.body);
        const addedProject = await projectsLogic.addProjectAsync(project);
        response.json(addedProject);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.put("/:_id", async (request, response) => {
    try {
        const project = new Project(request.body);
        project._id = request.params._id;
        const updatedProject = await projectsLogic.updateProjectAsync(project);
        if(!updatedProject) {
            response.sendStatus(404);
            return;
        }
        response.json(updatedProject);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.patch("/:_id", async (request, response) => {
    try {
        const project = new Project(request.body);
        project._id = request.params._id;
        const updatedProject = await projectsLogic.updateProjectAsync(project);
        if(!updatedProject) {
            response.sendStatus(404);
            return;
        }
        response.json(updatedProject);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.delete("/:_id", async (request, response) => {
    try {
        await projectsLogic.deleteProjectAsync(request.params._id);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/join/products-with-category", async (request, response) => {
    try {
        const projects = await projectsLogic.getProjectsWithCategoryAsync();
        response.json(projects);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/join/categories-with-products", async (request, response) => {
    try {
        const categories = await projectsLogic.getCategoriesWithProjectsAsync();
        response.json(categories);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;


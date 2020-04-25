const Project = require("../models/project");
const Category = require("../models/category");

function getAllProjectsAsync() {
    return new Promise((resolve, reject) => {
        Project.find({}, (err, projects) => {
            if (err) {
                reject(err);
                return;
            }
         
            resolve(projects);
        });
    });
}

function getOneProjectAsync(_id) {
    return new Promise((resolve, reject) => {
        Project.findOne({ _id }, (err, project) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(project);
        });
    });
}

function addProjectAsync(project) {
    return project.save();
}

function updateProjectAsync(project) {
    return new Promise((resolve, reject) => {
        Project.updateOne({ _id: project._id }, project, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(info.n ? project : null);
        });
    });
}

function deleteProjectAsync(_id) {
    return new Promise((resolve, reject) => {
        Project.deleteOne({ _id }, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

function getProjectsWithCategoryAsync() {
    return Project.find({}).populate("category").exec();
}

function getCategoriesWithProjectsAsync() {
    return Category.find({}).populate("projects").exec();
}

module.exports = {
    getAllProjectsAsync,
    getOneProjectAsync,
    addProjectAsync,
    updateProjectAsync,
    deleteProjectAsync,
    getProjectsWithCategoryAsync,
    getCategoriesWithProjectsAsync
};


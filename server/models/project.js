const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    tags:String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
}, { 
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

ProjectSchema.virtual("category", { // category = name of the virtual field.
    ref: "Category", // Model of the joined collection
    localField: "categoryId", // Name of the local field to join.
    foreignField: "_id", // Name of the remote field to join,
    justOne: true // Create an object and not an array
});

const Project = mongoose.model("Project", ProjectSchema, "projects");

module.exports = Project;

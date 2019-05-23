var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/project', {useNewUrlParser: true});


var task = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    name: String,
    status: String
}, { collection: 'task' });

var taskModel = mongoose.model('task', task);

exports.getAllTasks =  async function() {
    tasks = []
    await taskModel.find({}, (err, docs) => {
        if (err) {
            console.log(err);
        }
        docs.forEach(t => { tasks.push(t)
        });
    });
    console.log(tasks);
    return tasks;
}

exports.getTask =  async function(id, name) {
    var tasks = []
    var success = true;
    if (id != null) {
        await taskModel.findById(id, (err, docs) => {
            if (err) {
                console.log(err);
            }
            tasks.push(docs);
        });
    }

    if (name != null) {
        await taskModel.find({name: name}, (err, docs) => {
            if (err) {
                console.log(err);
            }
            docs.forEach(t => { tasks.push(t)
            });
        });
    }
    console.log(tasks);
    return tasks;
}

exports.deleteAllTasks = async function() {
    var success = true;
    await taskModel.deleteMany({}, (err) => {
        if (err) {
            success = false;
            console.log(err);
        } else {
            console.log("Deleted all successfully.");
        }
    });
    if (success) {
        return "Deleted all successfully.";
    } else {
        return "Error deleting tasks.";
    }
}

exports.addTask = async function(name, status) {
    var task = new taskModel({
        name: name,
        status: status
    });
    var success = true;
    await task.save( (err) => {
        if (err) {
            success = false;
            console.log(err);
        }
        console.log("Successfully added task: " + name);
    });
    if (success) {
        return "Successfully added task: " + name;
    } else {
        return "Error adding task:" + name;
    }
}

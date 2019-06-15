import React from 'react';
import Form from './Form.js';
import Tasks from './Tasks.js';

class TaskContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {taskList: []};
        this.addTask = this.addTask.bind(this);
    }

    addTask(task) {
        this.setState(prevState => ({
            taskList: [...prevState.taskList, task]
        }));
    }

    render() {
        return (
        <div>
            <Form onAddTask={this.addTask}/> 
            <Tasks tasks={this.state.taskList}/>
        </div>

        );
    }
}

export default TaskContainer;
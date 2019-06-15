import React from 'react';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const TaskItems = this.props.tasks.map((task, index) =>
            <li key={index}>
                {task}
            </li>
        );
        return (
            <ul>{TaskItems}</ul>
        )
    }
}

export default Tasks;
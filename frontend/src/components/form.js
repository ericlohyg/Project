import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: ''}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddTask(this.state.task);
    }

    handleFormChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label> 
                    Task:
                    <input name="task" type="text" onChange={this.handleFormChange}/>
                </label>
            </form>
        )
    }
}

export default Form;
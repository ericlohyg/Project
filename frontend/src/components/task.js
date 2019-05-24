import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './form.js'
import TaskList from './tasklist.js'

class Task extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        // add task through graphql
        console.log(values);
    }

    render() {
        return(
            <div>
            <Form handleSubmitButton={ this.handleSubmit }/>
            <TaskList />
            </div>
        )
    }
}

export default Task;

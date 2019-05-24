import React, { Component } from 'react';

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const POST_TASK = gql`
    mutation addTask($name: String!, $status: String!) {
      addTask(name: $name, status: $status)
    }
`
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
        <Mutation mutation={POST_TASK}>
            {(addTaskMutation, {data}) => (
            <form onSubmit={() => {
                    addTaskMutation({
                        variables: {
                            name: this.state.name,
                            status: this.state.status
                        }
                    })
                }}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={ this.handleChange } />
                </label>
                <label>
                    Status:
                    <input type="text" name="status" onChange={ this.handleChange }/>
                </label>
                <input type="submit" value="Submit" />
          </form>
        )}
      </Mutation>
      )
    };
}

export default Form;

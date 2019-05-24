import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";


const GET_ALL_TASKS = gql`
    {
        getAllTasks {
            _id
            name
            status
        }
    }
`


class TaskList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Query query={GET_ALL_TASKS}>
                {({ loading, error, data }) => {
                        if(loading) return <div> Fetching </div>
                        if (error) return <div> Error </div>

                        const tasks = data.getAllTasks
                        return (
                            <div>
                                { tasks.map(t => <li> { t._id + " " + t.name + " " + t.status } </li> ) }
                            </div>
                        )
                }}
            </Query>
        )
    }
}

export default TaskList;

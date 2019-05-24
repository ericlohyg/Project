import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value    
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const values = {
            name: this.state.name,
            status: this.state.status
        }
        this.props.handleSubmitButton(values);
    }

    render() {
        return <form onSubmit={ this.handleSubmit }>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={ this.handleChange } />
                    </label>
                    <label>
                        Status:
                        <input type="text" name="status" onChange={ this.handleChange }/>
                    </label>
                    <input type="submit" value="Submit" />
              </form>;
    };
}

export default Form;

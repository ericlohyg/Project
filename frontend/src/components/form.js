import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formControls: {
                name: {
                    value: ''
                },
                status: {
                    value: ''
                }
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const values = {
            name: this.state.formControls.name.value,
            status: this.state.status.formControls.status.value
        }
        this.props.handleSubmitButton(values);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={ this.state.formControls.name.value } onChange={ this.handleChange } />
                    </label>
                    <label>
                        Status:
                        <input type="text" name="status" value={ this.state.formControls.status.value } onChange={ this.handleChange }/>
                    </label>
                    <input type="submit" value="Submit" />
              </form>;
    };
}

export default Form;

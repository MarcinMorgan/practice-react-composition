import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={ this.submitHandler }>
                <input onChange = { this.inputChange }/><input type="submit" />
            </form>
        )
    }

    formRef = React.createRef()

    submitHandler = e => {
        e.preventDefault();
        const newUser = this.state.name
        this.props.addUser(`${newUser}`)
    }

    inputChange = e => {
        const {value} = e.target;
        this.setState({
            name: value
        })
    }
}

export default Form;
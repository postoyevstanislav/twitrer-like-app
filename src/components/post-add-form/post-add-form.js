import React, {Component} from 'react'

import './post-add-form.css'

export default class PostAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onValueChange(event) {

        this.setState({
            inputValue: event.target.value
        })
     }
    onSubmit(event) {
        event.preventDefault()
        this.props.onAdd(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }
    render() {
        return (
            <form
                className='bottom-panel d-flex'
                onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholder='What are you thinking about now'
                    className='form-control new-post-label'
                    onChange={this.onValueChange}
                    value={this.state.inputValue} //value is for control elem, so we can clean input after send post
                />
                <button
                    type='submit'
                    className='btn btn-outline-secondary'>
                    Add</button>
            </form>
        )
    }
}


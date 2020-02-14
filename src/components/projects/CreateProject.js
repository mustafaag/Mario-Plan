import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
       
    }
    
    
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3"> Create Project </h5>
                    <div className="input-field">
                        <label htmlFor="title"> Title </label>
                        <input type="text" id="title" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content"> Content </label>
                        <textarea  className="materialize-textarea" rows="30" id="content" onChange={this.handleOnChange}>

                        </textarea>
                    </div>
                    <div className="input-field">
                       <button className="btn pink lighten-1 z-depth-0">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject

import React, {Component} from 'react';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            address:"",
            age: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e){
        console.log(e.target.value);
        e.preventDefault;
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
                    </label>
                    <label>
                        Address:
                        <input type="text" value={this.state.address} name="address" onChange={this.handleChange} />
                    </label>
                    <label>
                        Age:
                        <input type="text" value={this.state.age} name="age" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
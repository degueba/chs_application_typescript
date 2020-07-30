import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';


interface IProps {
    name?: string
}

interface IState {
    email?: string
}

export default class List extends Component<IProps, IState> {
    state: { email: string; };
    
    constructor(props: IProps) {
        super(props)
        this.state = {
            email: ''
        };
    }

    changeMyInput = (e: React.ChangeEvent<HTMLInputElement>) => {
       this.setState({
           ...this.state,
           [e.currentTarget.name]: e.currentTarget.value
       })
    }

    render(){
        return (
            <section>
                <h1>{}</h1>
                <div className="form-group">
                    <label htmlFor="name">Update name</label>
                    <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.changeMyInput}/>
                </div>
            </section>
        )
    }
}





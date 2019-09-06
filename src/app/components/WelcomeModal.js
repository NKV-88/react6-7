import React, { Component } from 'react';
import '../styles/Modal.css'

export default class WelcomeModal extends Component {
    constructor (props){
        super (props);
        this.state ={
            modal: false
        };
    }
    render() {
        return (
            <React.Fragment>
                {this.state.modal && (
            <div>
                <div>
                    <h3>Welcome!</h3>
                    <p>I am Modal</p>
                    <button onclick={() => this.setState({modal:false})}>
                        Close
                    </button>
                </div>
            </div>
             )}
           </React.Fragment>
        );
    }

    componentDidMount() {
        this.setState({
            modal: true,
        })
    }
}


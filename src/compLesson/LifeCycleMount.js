import React, { Component } from 'react';

export default class LifeCycleMount extends Component {
    constructor (props) {
        super (props);
        this.state = {
            display : false
        };
        console.log ('1. Constructor');
    }

    static getDerivedStateFromProps() {
        console.log ('2. getDerivedStateFromProps()');
        return {
            test : []
        };
    }

    render() {
        console.log ('3. render()');
        return (
            <div>
                Это компонент LifeCycleMount
            </div>
        );
    }

    componentDidMount() {
        console.log('4. componentDidMount()');
    }


}



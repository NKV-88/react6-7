import React from 'react';
import ReactDom from 'react-dom';

import LifeCycleUnmount from './app/components/LifeCycleUnmount';
//import LifeCycleUnmount from './app/components/LifeCycleUnmount';
//import LifeCycleUnmount from './app/components/LifeCycleMount';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }   
    }

    render() {
        return (
            <div>
                {this.state.display ? <LifeCycleUnmount />: null}
                <button onClick={() => {
                    this.setState({ display: false })
                }}>Демонтировать компонент</button>
            </div>
        )
    }
}


ReactDom.render ( <App />, document.getElementById('root'));























// //import DisplayElement from "./app/components/DisplayElement";
// //import './app/styles/style.css'
// import Users from './app/components/Users';

// const USERS = ['Anna', 'Olga', 'Kot', 'Anton'];
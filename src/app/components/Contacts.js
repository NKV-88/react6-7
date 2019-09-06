import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <div>
                <h1>Контакты</h1>
                <p>Email: uuh@ijjj.ru</p>
                <p>Телефон: +7(000)000-00-00 доб. ном. 20{this.props.params.number}</p> 
                <p>Номер офиса: {this.props.params.number}</p>                   
            </div>
        );
    }
}

export default Contacts;
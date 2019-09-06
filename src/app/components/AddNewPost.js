import React, { Component } from 'react';
import '../styles/addNewPost.css'

export default class AddNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      anyPost: '',
      author: '',
      date: '',
      display: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      [ event.currentTarget.name ]: event.target.value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if ( this.state.title.length && this.state.anyPost.length && this.state.author.length && this.state.date.length) {
      const { display, ...post } = this.state;
      this.props.addPost(post);
    } else {
      this.setState({ display: true });
    }
  }
  
  render() {
    return (
      <div>
        <div >
          <form onSubmit={ this.handleSubmit } >
            
            <p >Add new post</p>
            
            <input type="text" name="author" value={ this.state.author } onChange={ this.handleChange }
                    placeholder="author:"/>
            
            <textarea name="title" value={ this.state.title } onChange={ this.handleChange }
                       placeholder="Post title:"/>
            
            <textarea name="anyPost" value={ this.state.anyPost } onChange={ this.handleChange }
                     placeholder="Post content:"/>

            <textarea name="date" value={ this.state.date } onChange={ this.handleChange }
                     placeholder="date:"/>
            
            <div >
              <div>
                <button  type="submit" value="Submit">Add post</button>
              </div>
              <div>
                <button onClick={ this.props.closePostForm } >Cancel</button>
              </div>
            </div>
            { this.state.display && <p >All fields are required</p> }
          </form>
        </div>
      </div>
    );
  }
}
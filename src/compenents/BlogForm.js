import React, { Component } from 'react';

export default class BlogForm extends Component {
    state = {
        title: '',
        description:''
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}))
    }

    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(() => ({description}))
    }
  render() {
    return (
      <div>
       
       <form>
           <div>
               <input
               placeholder='Title'
               value={this.state.title}
               onChange={this.state.onTitleChange}
               /> 
           </div>
           <div>
               <textarea
               placeholder='Description'
               value={this.state.description}
               onChange={this.state.onDescriptionChange}
               >

               </textarea>
           </div>
       </form>
      </div>
    );
  }
}

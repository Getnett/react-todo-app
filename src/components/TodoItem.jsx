import React, { Component } from 'react';

class TodoItem extends Component {
    
     state = {
        finish:false
     }
    markComplete = () =>{
         this.setState({
             finish:!this.state.finish
         })
    }
   
    
    render() { 
        const {title,handleDelete,handleEdit} = this.props
        return ( 
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">

<input type="checkbox" value = {title} onChange ={() =>{this.markComplete()}} />
<h6 style = {this.state.finish? {textDecoration:"line-through"}:{textDecoration:"none"} }>{title}</h6> 
              <div className="todo-icon">
                  <span className="mx-2 text-success" onClick = {handleEdit}>
                      <i className="fas fa-pen"></i>
                  </span>
                  <span className="mx-2 text-danger" onClick = {handleDelete}>
                     <i className="fas fa-trash"></i>
                  </span>
              </div>

        </li> );
    }
}
 
export default TodoItem;
import React,{Component} from 'react';
import Todo from './components/todo'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import {v4 as uuid} from  "uuid";
import './App.css';

class  App extends Component{
    state = {
      items:[],
      id:uuid(),
      item:'',
      editItem:false,
      completed:false
    }
    handleChange  = e =>{
       this.setState({
         item:e.target.value
       });
    }
    handleSubmit = e =>{
      e.preventDefault();
     
      const newItem = {
          id:this.state.id,
          title:this.state.item,
          completed:this.state.completed
      }
      console.log("Submitted::",newItem);
      const updatedItems = [...this.state.items,newItem]
      this.setState({
         items:updatedItems,
         item:'',
         id: uuid(),
         editItem:false,
         completed:false


      })
      
    }
    handleClear = () =>{
      this.setState({
        items:[]

      })
    }
    handleDelete = (id) =>{
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
           items:filteredItems
        });
    }
    handleEdit = (id) =>{
      const filteredItems = this.state.items.filter(item => item.id !== id);
      const selectedItem = this.state.items.find(item => item.id === id);
      console.log(selectedItem)
      this.setState({
         items:filteredItems,
         item:selectedItem.title,
         editItem:true,
         id:id,
         completed:false
      });
    }
    markCompleted = (id) =>{
    


    }
  render(){
  return (
     <div className = "container">
         <div className = "row">
           <div className = "col-10 mx-auto col-md-8 mt-4"> 
             <h3 className = "text-capitalize text-center title">Todo</h3>
            
             <Todo 
             item = {this.state.item} 
             handleChange = {this.handleChange} 
             handleSubmit = {this.handleSubmit}
             editItem = {this.state.editItem}/>
             <TodoList 
             items = {this.state.items} 
             handleClear = {this.handleClear} 
             handleDelete = {this.handleDelete}
             handleEdit = {this.handleEdit}
             />
           </div>
         </div>
     </div>
    

  );
  }
}

export default App;

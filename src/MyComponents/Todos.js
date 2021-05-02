import React from 'react'
import { TodosItem } from "./TodosItem";

export const Todos = (props) => {
  let mystyle = {
    minHeight: "70vh",
  }
  return (
    <div className="container my-3" style={mystyle}>
      <h3 className="my-3">List of Todos</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <TodosItem todos={todo} key={todo.sno} onDelete={props.onDelete}/>
            
        )})}
    </div>
  )
}

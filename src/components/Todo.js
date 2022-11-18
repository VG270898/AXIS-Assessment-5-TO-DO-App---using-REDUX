import React, { Component, useDebugValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Icon, Table, Form, Button } from "semantic-ui-react";
import { addTodo, deleteTodo, clearAllTodo } from "../actions/actions";
import TodoDisplay from "./TodoDisplay";



const Todos = (props) => {

    const [todo, setTodo] = useState("");
    const todos = useSelector((state) => state.todoReducer.todos);
    const dispatch = useDispatch();
    const [emptytodo, setemptytodo] = useState("")

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleAdd = () => {
        if (todo !=="") {
            dispatch(addTodo(todo),setTodo(""));
            document.getElementById("emptyrow").style.display = 'none';
        } else {
            alert("Input is Empty")
        }

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent' }}>
            <div className="ui card" style={{ margin: '40px', display: 'flex', width: '45%', alignItems: 'center',borderRadius:'10px',boxShadow: '1px 1px 4px 2px #8dc5e9'}}>

                <Form style={{ width: '80%', margin: '20px' }}>
                    <Form.Field>
                        <label style={{ fontSize: '18px', fontWeight: '600', paddingBottom: '5px' }}>Write Todo</label>
                        <input placeholder='Enter a task' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    </Form.Field>
                    <Button color="primary" type='submit' onClick={handleAdd}>Add</Button>
                    <Button negative onClick={() => dispatch(clearAllTodo(todo))}>clear all todo</Button>
                </Form>

                <Table celled striped style={{ width: '80%', margin: '20px', border: '0px',boxShadow: '1px 1px 4px 2px #F9F6EE',backgroundColor:'transparent'}}>
                    <Table.Header >
                        <Table.Row>
                            <Table.HeaderCell colSpan='3' style={{backgroundColor:'#AE388B',color:'white',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>ToDo's</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>


                        {
                            todos.length === 0 &&
                            <Table.Row id='emptyrow' style={{display:'flex',justifyContent:'center',fontSize:'20px',color:'gray'}}>
                                <Table.Cell width='16' textAlign="center" style={{border:'1px solid pink'}}>Todo List is Empty</Table.Cell>
                            </Table.Row>
                        }


                        {
                            todos.map((item) => {
                                return <TodoDisplay id={item.id} todo={item.data} ondelete={handleDelete} />
                            })
                        }


                    </Table.Body>
                </Table>
            </div>





        </div>
    )


}


export default Todos;



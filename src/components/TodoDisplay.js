import React from "react";
import { Icon, Table,Button} from "semantic-ui-react";


const TodoDisplay = (props) => {
    return (
        <Table.Row  style={{fontSize:"14px",fontWeight:'bold'}}>
            <Table.Cell style={{borderLeft:'1px solid pink',borderBottom:'1px solid pink'}}>{props.todo}</Table.Cell>
            <Table.Cell style={{borderRight:'1px solid pink',borderBottom:'1px solid pink'}} collapsing textAlign='right'>
            <Button color="green" onClick={()=>props.ondelete(props.id)}>Completed</Button>
            </Table.Cell>
        </Table.Row>
    )
}

export default TodoDisplay
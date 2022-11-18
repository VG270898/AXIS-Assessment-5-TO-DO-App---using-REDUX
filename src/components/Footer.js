import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import logo from "./logo.png"


const Footer = () => {
    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',paddingTop:'5px', position: 'fixed', bottom: '0' ,backgroundColor:'transparent'}}>
            
            <Grid columns='equal' divided inverted padded style={{borderTop:'2px solid black',width:'84%',backgroundColor:'transparent',boxShadow:'0 -5px 5px -5px rgb(125 152 169 / 79%)'}}>
                <Grid.Row textAlign='center' style={{padding:'3px'}}>
                    <Grid.Column style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Segment style={{color:'black',backgroundColor:'transparent',border:'0',boxShadow:'0px 0px 0px 0px'}}>
                            Copyrightⓒ2022, TodoApp | All Rights Reserved.
                        </Segment>
                    </Grid.Column>
                    <Grid.Column style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Segment style={{padding:'3px',backgroundColor:'transparent',border:'0',boxShadow:'0px 0px 0px 0px',}}>
                            <img src={logo} style={{width:'117px',height:'42px',marginTop:'6px'}}></img>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column style={{display:'flex',justifyContent:'center'}}>
                        <Segment style={{display:'flex',border:'0',boxShadow:'0px 0px 0px 0px',justifyContent:'space-around',alignItems:'center',width:'50%',padding:'3px',backgroundColor:'transparent'}}>
                            <i className="ui large black google circular icon"></i>
                            <i className="ui  large black linkedin circular icon"></i>
                            <i className="ui large black facebook f circular icon"></i>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>

    )

}

export default Footer
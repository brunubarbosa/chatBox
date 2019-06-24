import React from 'react';
import { Box } from '../../components/box';
import { Container } from './styles'

import { connect } from 'react-redux';

export function Home({props, addBox, updateInput}) {
    console.log(props)
    return (
        <Container> 
            <input  type="text" value={props.inputValue} onChange={(event)=>updateInput(event.target)}/>
            <button onClick={event => addBox(event)} onClick={addBox}>ok</button>
            {props.boxes.map(element => <Box>{element.author}</Box>)}
        </Container>
    );
}

function mapStateToProps(state) {
console.log(state)
return {props: state}
}

function mapDispatchToProps(dispatch) {
    return {
        addBox: ({target}) => {
            console.log(target)
            dispatch({type: 'ADD_BOX'})
        },
        updateInput: ({ value }) => {
            console.log(value)
            dispatch({type: 'UPDATE_INPUT', inputValue: value})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
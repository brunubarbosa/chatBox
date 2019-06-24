import React from 'react';
import { Box } from '../../components/box';
import { Container } from './styles'

import { connect } from 'react-redux';

import * as BoxesActions from '../../store/actions/boxes';

export function Home({boxes, inputValue, dispatch}) {
    console.log(inputValue)
    return (
        <Container> 
            <input  type="text" value={inputValue} onChange={(event)=>dispatch(BoxesActions.updateInput(event.target))}/>
            <button onClick={event => dispatch(BoxesActions.addBox(event))}>ok</button>
            {boxes.map(element => <Box>{element.author}</Box>)}
        </Container>
    );
}

function mapStateToProps(state) {
console.log(state.boxes.boxes)
    return {
        boxes: state.boxes.boxes,
        inputValue: state.boxes.inputValue,
    }
}




export default connect(mapStateToProps)(Home)
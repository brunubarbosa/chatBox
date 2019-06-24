import React from 'react';
import { Box } from '../../components/box';
import { Container, Title } from './styles'
import { InputText, Button } from '../../components/utils/'

import { connect } from 'react-redux';

import * as BoxesActions from '../../store/actions/boxes';

export function Home({boxes, inputValue, updateInput, addBox}) {
    console.log(updateInput)
    return (
        <Container>
            <Title>MessageBox</Title>
            <InputText value={inputValue} onChange={(event)=> updateInput(event)} />
            <Button text="Adicionar" onClick={() => addBox()} />
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

const mapDispatchToProps = (dispatch) => ({
    updateInput: (event) => dispatch(BoxesActions.updateInput(event.target)),
    addBox: () => dispatch(BoxesActions.addBox())
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
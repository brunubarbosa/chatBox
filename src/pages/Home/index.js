import React from 'react';
import { Box } from '../../components/box';
import { Container, Title } from './styles'
import { InputText, Button } from '../../components/utils/';
import { FaThumbsUp, FaThumbsDown, FaTimes } from 'react-icons/fa'

import { connect } from 'react-redux';

import * as BoxesActions from '../../store/actions/boxes';
 
export function Home({boxes, inputValue, updateInput, addBox, closeBox, quantidade, likeBox, likes, unlikeBox}) {
    console.log(likes)
    return (
        <Container>
            <Title>MessageBox</Title>
            <div>
                <span>Total: {quantidade}</span>
                <InputText value={inputValue} onChange={(event)=> updateInput(event)} />
                <Button text="Adicionar" onClick={() => addBox()} />
            </div>
            {boxes.map(element => <Box key={element.id}>
                <FaTimes color="#303030" cursor="pointer" onClick={() => closeBox(element.id)}>x</FaTimes>
                <span>{element.author}</span>
                <footer>
                    <span>{element.likes}</span>
                    <FaThumbsUp color="#42f557" cursor="pointer" onClick={() => likeBox(element.id)}>likes ({element.likes})</FaThumbsUp>
                    <FaThumbsDown color="#f54242"  cursor="pointer" onClick={() => unlikeBox(element.id)}>unline ({element.likes})</FaThumbsDown>
                </footer>
            </Box>)}
        </Container>
    );
}

function mapStateToProps(state) {
    console.log(state)
    return {
        boxes: state.boxes.boxes,
        inputValue: state.boxes.inputValue,
        quantidade: state.boxes.quantidade,
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateInput: (event) => dispatch(BoxesActions.updateInput(event.target)),
    addBox: () => dispatch(BoxesActions.addBox()),
    closeBox: (id) => {dispatch(BoxesActions.closeBox(id))},
    likeBox: (id) => {dispatch(BoxesActions.likeBox(id))},
    unlikeBox: (id) => {dispatch(BoxesActions.unlikeBox(id))}
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
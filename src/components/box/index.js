import React from 'react';
import { connect } from 'react-redux';

import { BoxContainer } from './styles';

export function Box(props){
    return(
        <BoxContainer likeAmount={props.boxes.quanti}>
            {props.children}
        </BoxContainer>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Box)
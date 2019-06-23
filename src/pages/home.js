import React from 'react';
import { Box } from '../components/box';

import { connect } from 'react-redux';

export function Home(props) {
    console.log(props)
        return (
            <Box></Box>
        );
}


export default connect(state => {console.log(state); return {state}})(Home)
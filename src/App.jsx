import React from 'react';
import styled from 'styled-components';
import CssRest from './component/CssRest.jsx';

const H1 = styled.h1`
    color:#fff;
    font-size:50px;
    font-weight:bold;
    text-align:center;
    margin-top:100px;
`
const App = () => {
    return(
        <>
            <CssRest />
            <H1>hello world!!</H1>
        </>
    )
}
export default App;
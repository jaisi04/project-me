import React from 'react';
import styled from 'styled-components';
import { COLOR_BLACK } from '../../colors';

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: ${COLOR_BLACK};
`;

const Loading = () => {
    return (
        <Wrapper>
            Fetching page info...!
        </Wrapper>
    );
};

export default Loading;
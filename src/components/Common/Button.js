import styled from 'styled-components';
import { COLOR_YELLOW, COLOR_BLACK } from '../../colors';

const Button = styled.div`
    width: 120px;
    color: ${COLOR_BLACK};
    font-weight: 600;
    text-align: center;
    background-color: transparent;
    padding: 0.25em 1em;
    border: 1px solid ${COLOR_YELLOW};
    border-radius: 4px;
`;

export default Button;
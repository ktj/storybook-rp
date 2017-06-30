import styled from 'styled-components';
import { lighten } from 'polished'

const Button = styled.button`
  color: ${props => lighten(0.5, props.theme.primary)};
`;


export default Button;

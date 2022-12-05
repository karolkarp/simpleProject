import styled from 'styled-components/native';
import { IInputFiled } from './InputFiled';

export const InputBox = styled.TextInput<IInputFiled>`
	${() => ({
		border: '1px solid rgba(0,0,0,0.2)',
		borderRadius: 8,
		padding: 8,
		width: '100%',
		marginBottom: 15,
	})}
`;

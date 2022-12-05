import styled from 'styled-components/native';

export const Container = styled.View`
	${() => ({
		width: '100%',
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.05)',
		padding: 15,
		alignItems: 'center',
	})}
`;

export const ErrorLabel = styled.Text`
	${() => ({
		color: 'red',
		marginBottom: 15,
	})}
`;

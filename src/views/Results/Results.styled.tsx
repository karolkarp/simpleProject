import styled from 'styled-components/native';

export const Container = styled.View`
	${() => ({
		width: '100%',
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.2)',
		padding: 15,
		alignItems: 'center',
		justifyContent: 'center',
	})}
`;

export const ErrorMessage = styled.Text`
	${() => ({
		padding: 15,
		color: 'red',
		fontSize: 24,
	})}
`;

export const Code = styled.Text`
	${() => ({
		padding: 15,
		color: 'green',
		fontSize: 32,
	})}
`;

export const HelloTitle = styled.Text`
	${() => ({
		padding: 15,
		color: 'green',
		fontSize: 22,
	})}
`;

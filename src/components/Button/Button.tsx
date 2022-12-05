import React from 'react';
import { Text } from 'react-native';
import { ButtonContainer } from './Button.styled';

interface IButton {
	onPress: () => void;
	buttonLabel?: string;
}

const Button = ({ onPress, buttonLabel = 'Submit' }: IButton) => {
	return (
		<ButtonContainer onPress={onPress} activeOpacity={0.6}>
			<Text>{buttonLabel}</Text>
		</ButtonContainer>
	);
};
export default Button;

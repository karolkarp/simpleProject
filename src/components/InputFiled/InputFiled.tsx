import React from 'react';
import { InputBox } from './InputFiled.styled';

export interface IInputFiled {
	buttonLabel?: string;
	placeholder: string;
	onBlur: (e: any) => void;
	onChangeText: (value: any) => void;
	value: string;
}

const InputFiled = (props: IInputFiled) => {
	return <InputBox autoCapitalize="none" {...props} />;
};
export default InputFiled;

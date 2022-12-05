import React from 'react';
import { useCountryCodeStore } from '@Store/countryCode';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';
import { Text } from 'react-native';
import { Container } from './Results.styled';

const Results = observer(() => {
	const { countryCode } = useCountryCodeStore();

	autorun(() => {
		console.log('autorun countryCode', countryCode);
	});

	// get from mobx here and call api
	return (
		<Container>
			<Text>{countryCode}</Text>
		</Container>
	);
});

export default Results;

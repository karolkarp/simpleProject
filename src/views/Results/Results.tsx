import React, { useEffect } from 'react';
import { useCountryCodeStore } from '@Store/countryCode';
import { observer } from 'mobx-react';
import { ActivityIndicator } from 'react-native';
import { Code, Container, ErrorMessage, HelloTitle } from './Results.styled';

const Results = observer(() => {
	const { countryCode, fetchCountryCode, isLoading, response, error } = useCountryCodeStore();

	useEffect(() => {
		fetchCountryCode(countryCode);
	}, [countryCode, fetchCountryCode]);

	if (isLoading) {
		return <Container>{isLoading && <ActivityIndicator size="large" color="#0000ff" />}</Container>;
	}
	return (
		<Container>
			{isLoading && <ActivityIndicator size="large" color="#0000ff" />}
			{error && <ErrorMessage>{error}</ErrorMessage>}
			{response && (
				<>
					<Code>{response?.code}</Code>
					<HelloTitle>{response?.hello}</HelloTitle>
				</>
			)}
		</Container>
	);
});

export default Results;

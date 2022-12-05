import React from 'react';
import { Container, ErrorLabel } from './Home.styled';
import { Formik } from 'formik';
import countryCodeValidator from '@Validators/form/countryCodeValidator';
import Button from '@Components/Button/Button';
import InputFiled from '@Components/InputFiled/InputFiled';
import { useNavigation } from '@react-navigation/native';
import { useCountryCodeStore } from '@Store/countryCode';
import { observer } from 'mobx-react';
import routes from '@Routes/routes';

interface IFields {
	countryCode: string;
}
const Home = observer(() => {
	const navigation = useNavigation();
	const { setCountryCode } = useCountryCodeStore();

	const handleFormSubmit = (values: IFields) => {
		setCountryCode(values.countryCode);
		navigation.navigate(routes.RESULTS);
	};

	return (
		<Container>
			<Formik<IFields>
				validationSchema={countryCodeValidator()}
				validateOnBlur={false}
				validateOnChange={false}
				initialValues={{
					countryCode: '',
				}}
				onSubmit={(values) => {
					handleFormSubmit(values);
				}}
			>
				{({ handleBlur, handleSubmit, values, setFieldValue, errors }) => (
					<>
						<InputFiled
							placeholder={'Country Code...'}
							onBlur={handleBlur('countryCode')}
							onChangeText={(value) => {
								setFieldValue('countryCode', value);
							}}
							value={values.countryCode}
						/>
						{errors.countryCode && <ErrorLabel>{errors.countryCode}</ErrorLabel>}
						<Button onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Container>
	);
});

export default Home;

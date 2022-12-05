import * as Yup from 'yup';

export default () =>
	Yup.object().shape({
		countryCode: Yup.string().required('This field is required').min(2, 'Minimum lenght is 2!'),
	});

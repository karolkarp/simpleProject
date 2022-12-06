import { ICountryCodesPayload } from '../services/ApiService';

const DOMAIN = 'https://stefanbohacek.com';

export const endpoints: types.endpoints.IList = {
	countryCodes: ({ countryCode }: ICountryCodesPayload) => {
		return {
			method: 'get',
			url: `${DOMAIN}/hellosalut/?cc=${countryCode}`,
		};
	},
};

export default endpoints;

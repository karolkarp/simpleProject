import axios from 'axios';
import { AnyObjectSchema, ValidationError } from 'yup';

export interface ICountryCodesPayload {
	countryCode: string;
}
interface IServicePayload {
	method: types.endpoints.IEndpointConfig['method'];
	url: string;
	responseSchema: AnyObjectSchema;
	stripUnknown?: boolean;
}

export class ApiService {
	public static async axiosFetch({ method = 'get', url, responseSchema, stripUnknown = true }: IServicePayload) {
		try {
			const response = await axios[method](url, {
				headers: { 'Content-type': 'text/html; charset=UTF-8' },
			});
			const data = await responseSchema.validate(response?.data, {
				stripUnknown,
			});

			return { response: data, error: undefined };
		} catch (error) {
			if (error instanceof ValidationError) {
				return { error: 'The response data is invalid', response: undefined };
			}

			return { error: 'Unexpected error occured' };
		}
	}
}

export default ApiService;

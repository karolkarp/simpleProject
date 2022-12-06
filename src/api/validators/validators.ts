import { object, string } from 'yup';

export const saluteResponse = object({
	code: string().required(),
	hello: string().required(),
});

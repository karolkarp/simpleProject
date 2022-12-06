export {};

declare global {
	namespace types {
		namespace endpoints {
			interface IEndpointConfig {
				url: string;
				method: 'get' | 'post' | 'delete' | 'head' | 'options' | 'put' | 'patch';
			}

			type endpointConfig = (args?: any) => IEndpointConfig;

			interface IList {
				[endpointName: string]: endpointConfig;
			}
		}
	}
}

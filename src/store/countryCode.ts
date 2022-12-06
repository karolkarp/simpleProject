import React from 'react';
import { makeAutoObservable, action, observable, runInAction, configure } from 'mobx';
import { ApiService } from '@Api/services/ApiService';
import endpoints from '@Api/endpoints/SaluteEndpoints';
import { saluteResponse } from '@Api/validators/validators';

configure({
	enforceActions: 'always',
	computedRequiresReaction: true,
	reactionRequiresObservable: true,
	observableRequiresReaction: true,
	disableErrorBoundaries: true,
});

export interface ICountryCodeStore {
	countryCode: string;
	isLoading: boolean;
	response?: {
		code: string;
		hello: string;
	};
	error?: string;
	setCountryCode: (countryCode: string) => void;
	fetchCountryCode: (countryCode: string) => void;
}
class CountryCodeStore {
	error: ICountryCodeStore['error'] = undefined;
	countryCode: ICountryCodeStore['countryCode'] = '';
	isLoading: ICountryCodeStore['isLoading'] = false;
	response: ICountryCodeStore['response'] = undefined;

	constructor() {
		makeAutoObservable<ICountryCodeStore>(this, {
			countryCode: observable,
			isLoading: observable,
			response: observable,
			error: observable,
			setCountryCode: action.bound,
			fetchCountryCode: action.bound,
		});
	}

	setCountryCode(value: string) {
		this.countryCode = value;
	}

	fetchCountryCode(countryCode: string) {
		this.isLoading = true;
		runInAction(async () => {
			const { response, error } = await ApiService.axiosFetch({
				...endpoints.countryCodes({ countryCode }),
				responseSchema: saluteResponse,
			});
			this.updateResponseData({ response, error });
		});
	}

	updateResponseData({ response, error }: any) {
		this.error = error;
		this.response = response;
		this.isLoading = false;
	}
}

// Create instance of CountryCodeStore
const countryCodeStore = new CountryCodeStore();
// Create a React Context with CountryCodeStore instance.
export const CountryCodeContext = React.createContext(countryCodeStore);
export const useCountryCodeStore = () => React.useContext(CountryCodeContext);

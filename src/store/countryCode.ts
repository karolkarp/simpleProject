import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';

class CountryCodeStore {
	countryCode = '';

	constructor() {
		makeAutoObservable(this, {
			countryCode: observable,
			setCountryCode: action.bound,
		});
	}

	setCountryCode(value: string) {
		this.countryCode = value;
	}
}

// Create instance of CountryCodeStore
const countryCodeStore = new CountryCodeStore();
// Create a React Context with CountryCodeStore instance.
export const CountryCodeContext = React.createContext(countryCodeStore);
export const useCountryCodeStore = () => React.useContext(CountryCodeContext);

// // import original module declarations
// import 'styled-components';

// // and extend them!
// declare module 'styled-components/native' {
// 	export interface DefaultTheme {
// 		borderRadius: string;

// 		colors: {
// 			main: string;
// 			secondary: string;
// 		};
// 	}
// }

export {};

declare global {
	namespace types {
		interface IStyledProps {
			theme: IThemeWithFunctions;
			style?: any;
		}
	}
}

declare module 'styled-components' {
	export interface DefaultTheme extends types.IThemeWithFunctions {}
}

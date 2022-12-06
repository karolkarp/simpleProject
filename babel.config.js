module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		'babel-plugin-styled-components',
		[
			'module-resolver',
			{
				root: ['./'],
				stripExtensions: ['.js', '.ts', '.tsx', '.jsx', '.json', '.png', '.svg'],
				cwd: 'babelrc',
				alias: {
					'@Components': './src/components',
					'@Api': './src/api',
					'@Store': './src/store',
					'@Routes': './src/routes/',
					'@Views': './src/views',
					'@Validators': './src/validators',
				},
			},
		],
	],
};

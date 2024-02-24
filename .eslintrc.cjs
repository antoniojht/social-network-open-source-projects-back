module.exports = {
    'env': {
        'node': true,
        'es2021': true,
				'jest': true,
    },
    'extends': ['airbnb-base', 'prettier'],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'no-underscore-dangle': 'off',
		'no-param-reassign': 'off',
		'global-require': 'off',
		'array-bracket-spacing': [2, 'never'],
		'block-scoped-var': 2,
		'brace-style': [2, '1tbs'],
		camelcase: 1,
		'computed-property-spacing': [2, 'never'],
		curly: 2,
		'eol-last': 2,
		eqeqeq: [2, 'smart'],
		'keyword-spacing': [2, { before: true, after: true }],
		'max-depth': [1, 3],
		'max-len': [1, 120],
		'max-statements': [1, { max: 50 }, { ignoreTopLevelFunctions: true }],
		'new-cap': 0,
		'no-extend-native': 2,
		'no-mixed-spaces-and-tabs': 2,
		'no-trailing-spaces': 2,
		'no-console': ['error', { allow: ['error'] }],
		'no-unused-vars': ['error', { args: 'none' }],
		'no-use-before-define': [2, 'nofunc'],
		'object-curly-spacing': [2, 'always'],
		quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		semi: ['error', 'always'],
		'space-unary-ops': 2,
		strict: ['error', 'global'],
    }
};
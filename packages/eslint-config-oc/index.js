const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  globals: {
    AlipayJSBridge: false,
  },
  extends: ['eslint-config-airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ERROR,

    // http://eslint.org/docs/rules/#best-practices
    'consistent-return': [OFF],
    'no-param-reassign': [1],
    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': [ERROR, 'except-parens'],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'array-callback-return': [1],

    // Code style
    // conflict with prettier
    // @see https://github.com/prettier/prettier/issues/2716
    // 'array-element-newline': [ERROR, { multiline: true, minItems: 3 }],
    camelcase: [1],
    // 'no-mixed-operators': [ERROR],
    'no-plusplus': [1],
    'no-nested-ternary': [1],
    'no-unexpected-multiline': [WARN],
    'comma-dangle': [
      ERROR,
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        // "exports": "never",
        functions: 'ignore',
      },
    ],
    'max-len': [ERROR, { code: 80, ignoreUrls: true }],

    // Possible Errors
    'no-empty': ['error', { allowEmptyCatch: true }],

    'space-before-function-paren': ['error', 'never'],
    'react/forbid-prop-types': [0],
    'react/no-multi-comp': [0],
    'react/jsx-no-bind': [0],
    'react/prefer-stateless-function': [1],
    'react/require-default-props': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [
      'warn',
      {
        ignore: [
          'location',
          'params',
          'className',
          'children',
          'dispatch',
          'history',
        ],
      },
    ],
    'react/no-array-index-key': [WARN],
    'import/first': ['warn', 'DISABLE-absolute-first'],

    // common.js
    'global-require': ['off'],

    // Code style
    'prefer-destructuring': OFF,
    'generator-star-spacing': [
      ERROR,
      {
        before: false,
        after: true,
        anonymous: 'neither',
        method: { before: true, after: false },
      },
    ],
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': [
      'error',
      {
        /*
        "groups": [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ], */
        allowSamePrecedence: true,
      },
    ],
    'no-unused-vars': [
      ERROR,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
  },
};

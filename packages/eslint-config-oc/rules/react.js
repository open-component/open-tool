module.exports = {
  plugins: [
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          '/^handle.+$/',
          'getters',
          'setters',
          'instance-variables',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
  }
};

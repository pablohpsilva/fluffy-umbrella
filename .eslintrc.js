module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'arrow-parens': 0,
    'react/jsx-pascal-case': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: []
      }
    ],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx']
      }
    ],
    'react/no-did-update-set-state': 0,
    'react/forbid-foreign-prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'comma-dangle': [2, 'never'],
    'no-cond-assign': [0, 'always'],
    'no-console': 0,
    'no-constant-condition': 1,
    'no-control-regex': 2,
    'no-debugger': 1,
    'no-dupe-keys': 2,
    'no-empty': 1,
    'no-empty-character-class': 1,
    'no-ex-assign': 1,
    'no-extra-boolean-cast': 1,
    'no-extra-semi': 1,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 1,
    'no-irregular-whitespace': 1,
    'no-negated-in-lhs': 1,
    'no-obj-calls': 2,
    'no-regex-spaces': 1,
    'no-sparse-arrays': 2,
    'no-unreachable': 1,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'no-multi-assign': 0,
    'block-scoped-var': 1,
    complexity: [1, 14],
    'consistent-return': 0,
    curly: [0, 'multi'],
    'default-case': 0,
    'dot-notation': 1,
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 0,
    'no-caller': 2,
    'no-div-regex': 1,
    'no-else-return': 1,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 1,
    'no-loop-func': 0,
    'no-multi-spaces': 0,
    'no-multi-str': 1,
    'no-native-reassign': 2,
    'no-new': 1,
    'no-new-func': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-process-env': 0,
    'no-proto': 1,
    'no-redeclare': 2,
    'no-return-assign': 0,
    'no-script-url': 1,
    'no-self-compare': 1,
    'no-sequences': 2,
    'no-unused-expressions': 0,
    'no-void': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    radix: 2,
    'vars-on-top': 1,
    'wrap-iife': [2, 'outside'],
    yoda: [1, 'never'],
    'global-strict': [0],
    'no-extra-strict': [0],
    strict: [0],
    'no-catch-shadow': 1,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-undef': 0,
    'no-undef-init': 0,
    'no-undefined': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['draft', 'draftState']
      }
    ],
    'handle-callback-err': 1,
    'no-mixed-requires': 0,
    'no-path-concat': 1,
    'no-process-exit': 1,
    'no-restricted-modules': 1,
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-sync': 1,
    'brace-style': [
      1,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: 2,
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'],
    'consistent-this': [2, 'self'],
    'eol-last': 0,
    'func-names': 0,
    'func-style': [2, 'expression'],
    'key-spacing': [
      1,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'max-nested-callbacks': [2, 3],
    'new-cap': 0,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 0,
    'no-multiple-empty-lines': 2,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'no-spaced-func': 2,
    'prefer-const': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-extra-parens': 0,
    'one-var': 0,
    'operator-assignment': 1,
    'padded-blocks': 0,
    'quote-props': [2, 'as-needed'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'never'],
    'sort-vars': 0,
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'space-before-blocks': [1, 'always'],
    'object-curly-spacing': [1, 'always'],
    'array-bracket-spacing': 0,
    'computed-property-spacing': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': 0,
    'wrap-regex': 2,
    'max-depth': [2, 3],
    'max-len': [
      2,
      {
        code: 120,
        ignoreUrls: true
      }
    ],
    'max-params': [2, 6],
    'max-statements': [2, 30],
    'no-bitwise': 2,
    'no-plusplus': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 0,
    'react/prop-types': 0,
    'no-useless-constructor': 0,
    'react/prefer-stateless-function': 0,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off'
  }
}

const JSDOC_LEVEL = 1

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  'extends': [
    'airbnb-base',
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  plugins: [
    'html',
    'vue',
    'filenames',
    'jsdoc'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'valid-jsdoc': [JSDOC_LEVEL, {
      requireReturn: false,
    }],
    'require-jsdoc': [JSDOC_LEVEL, {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    // 'jsdoc/newline-after-description': 1,
    'jsdoc/no-undefined-types': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-param-description': 1,
    'jsdoc/require-param-name': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-description': 1,
    'jsdoc/require-returns-type': 1,
    // 不允许驼峰式命名
    // 'filenames/match-regex': [1, '^[0-9a-z-.]+$', true],
    'no-reserved-keys': [0],
    'no-debugger': [1],
    'no-alert': [1],
    'semi': [2, 'never'],
    'no-console': [1],
    'prefer-const': [1],
    'eol-last': [1],
    'object-shorthand': [1],
    'no-param-reassign': [0],
    'func-names': [0],
    'no-shadow': [1],
    'arrow-body-style': [0],
    'comma-dangle': [1],
    'space-before-function-paren': [1],
    'prefer-template': [1],
    'no-new': [0],
    'consistent-return': [1],
    'quote-props': [1],
    'array-bracket-spacing': [1],
    'no-unused-vars': [1, { argsIgnorePattern: '^h|context$' }],
    'computed-property-spacing': [1],
    'max-len': [1],
    'import/no-extraneous-dependencies': [0],
    'global-require': [0],
    'arrow-parens': [0],
    'linebreak-style': [0],
    'no-plusplus': [0],
    'no-underscore-dangle': [0],
    'new-cap': [1],
    'no-restricted-syntax': [0],
    'class-methods-use-this': [0],
    'import/no-unresolved': [0],
    'import/prefer-default-export': [0],
    'import/no-dynamic-require': [0],
    'import/imports-first': [0],
    'import/newline-after-import': [1],
    'import/extensions': [0],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    // warn; 推荐结构赋值
    'prefer-destructuring': [0, { 'array': true, 'object': true }, { 'enforceForRenamedProperties': false }],
    // 末尾不允许有多余的空格-忽略对注释的限制
    'no-trailing-spaces': ["error", { "ignoreComments": true }],
    // 不允许多个空格 - 忽略对注释的限制
    'no-multi-spaces': ["error", { ignoreEOLComments: true }],
    // 禁止使用多余的 return
    'no-useless-return': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
    "sourceType": "module",
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        'max-len': 'off'
      }
    }
  ],
  settings: {
    jsdoc: {
      tagNamePreference: {
        param: 'param',
        returns: 'return',
      },
    }
  }
}

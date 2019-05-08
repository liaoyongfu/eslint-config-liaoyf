module.exports = {
    "extends": [
        "airbnb",
        "plugin:prettier/recommended",
        "prettier/react",
        'plugin:compat/recommended'
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true
    },
    "parser": "babel-eslint",
    "rules": {
        "prettier/prettier": ['error', {
            // 使用单引号
            singleQuote: true,
            // 指定每个缩进级别为 4 个空格数
            tabWidth: 4
        }],
        // 仅使用.js为jsx代码的文件扩展名
        "react/jsx-filename-extension": ['error', { "extensions": [".js"] }],
        // 禁止导入无关的模块
        "import/no-extraneous-dependencies": ['error', {
            "devDependencies": ['**/tests/**.js', '/mock/**/**.js', '**/**.test.js']
        }],
        // 取消“非交互式元件不允许交互”
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        // click 事件不必伴随 key 键盘事件
        'jsx-a11y/click-events-have-key-events': 'off',
        // 取消“静态元素没有交互”
        'jsx-a11y/no-static-element-interactions': 'off',
        // <a>具有有效 href 属性
        'jsx-a11y/anchor-is-valid': 'off',
        "react/jsx-indent": ['error', 4],
        "react/jsx-indent-props": ['error', 4],
        "linebreak-style": ['off'],
        "react/jsx-one-expression-per-line": ["off", {
            allow: 'literal'
        }],
        "comma-dangle": ["error", "never"],
    }
};
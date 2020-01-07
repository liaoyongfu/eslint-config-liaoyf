module.exports = {
    "extends": [
        "airbnb",
        "plugin:prettier/recommended",
        "prettier/react",
        // 'plugin:compat/recommended'
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
            tabWidth: 4,
            printWidth: 120
        }],
        // 使用 ts/tsx 结尾的文件扩展名
        "react/jsx-filename-extension": ['error', { "extensions": [".ts", ".tsx"] }],
        // 禁止导入无关的模块
        "import/no-extraneous-dependencies": ['error', {
            "devDependencies": ['**/tests/**.js', '/mock/**/**.js', '**/**.test.js']
        }],
        // jsx 缩进
        "react/jsx-indent": ['error', 4],
        // jsx 属性缩进
        "react/jsx-indent-props": ['error', 4],
        // 关闭换行符
        "linebreak-style": ['off'],
        // 文字不限定每一行限制为一个表达式
        "react/jsx-one-expression-per-line": ["off", {
            allow: 'literal'
        }],
        // 不要尾随逗号
        "comma-dangle": ["error", "never"],
    }
};
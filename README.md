# eslint-plugin-vv

前端 React 项目 EsLint 配置文件。主要使用：

- [`airbnb 代码风格指南`](https://github.com/airbnb/javascript)
- [`prettier`](https://prettier.io)：代码格式化
- [`eslint-config-compat`](https://github.com/amilajack/eslint-plugin-compat#readme)：检测兼容性代码

## 覆盖规则列表

具体覆盖规则请查看 [index.js](./index.js) 文件。

## 安装 install-peerdeps 工具

由于内置 peerDependencies 比较多，所以请先安装 [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) 工具（如果已安装请跳过）：

````
# If you're using npm
npm install -g install-peerdeps

# If you're using yarn
yarn global add install-peerdeps

cd my-project-directory

install-peerdeps <package>[@<version>]
````

## 安装

````
$ install-peerdeps eslint-config-vv -d
````

## 使用

在根目录中新建`.eslintrc.js`文件：

````
module.exports = {
    extends: ["vv"],
    rules: {
        // 进行规则覆盖
    }
};
````

## IDE 开启 eslint 检测和自动修复

### Webstrom

1. 在`File -> Setting -> Languages & Frameworks -> Javascript -> Code Quality Tools -> Eslint`中开启 Eslint 检测。
2. 在`File -> Setting -> Keymap -> Plug-ins -> Javascript Support -> Fixed Eslint Problems`中右键点击`Add keyboard shortcut`，使用`Ctrl + E`覆盖默认快捷键。

### VSCode

[配置教程](https://segmentfault.com/a/1190000009077086)

## TODO

- 增加 Typescript 版本
- 在项目过程中不断维护规则
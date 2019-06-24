<div align="center">

<h1>stylelint-config-globex</h1>

<img alt="stylelint-config-globex" src="logo.png" width="128" />

<p><em>The CSS code standards used at Globex Designs, Inc.</em></p>

<a href="https://www.npmjs.com/package/stylelint-config-globex"><img alt="NPM Status" src="https://img.shields.io/npm/v/stylelint-config-globex.svg?style=flat"></a>
<a href="https://www.npmtrends.com/stylelint-config-globex"><img alt="NPM Download Stats" src="https://img.shields.io/npm/dm/stylelint-config-globex.svg?style=flat-square" /></a>
<a href="https://github.com/GlobexDesignsInc/eslint-config-globex/blob/master/LICENSE"><img alt="NPM Download Stats" src="https://img.shields.io/npm/l/stylelint-config-globex.svg?style=flat-square" /></a>

</div><hr />

## Install

```sh
# With npm
npm install -D stylelint-config-globex

# or

# With yarn
yarn add -D stylelint-config-globex
```

## Usage

> **NOTE**: `stylelint-config-globex` comes with its own `stylelint-globex` bin tool so that you don't need to install `stylelint` as a peerDependency. All the necessary dependencies are bundled together for you.

Add the config to your `.stylelintrc` file:

```json
{
	"extends": "stylelint-config-globex"
}
```

Enable via `package.json` scripts with the custom `stylelint-globex` bin:

```json
{
	"scripts": {
		"stylelint": "stylelint-globex ."
	}
}
```

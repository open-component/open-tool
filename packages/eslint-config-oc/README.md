# Open Component ESLint config

## Usage

1. Add dependencies:

	```bash
	npm install --save-dev eslint-config-oc eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
	```
2. Create `.eslintrc.js` with following contents in the root folder of your project:

	```javascript
	module.exports = {
	  extends: ['eslint-config-oc'],
	};
	
	```	
3. Create `.prettierrc.js` with following contents in the root folder of your project:

	```javascript
	module.exports = require('eslint-config-oc/prettierrc');
	
	```

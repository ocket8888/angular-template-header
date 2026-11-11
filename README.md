# angular-template-header
An ESLint rule that requires a header in angular templates.

## Installation
```sh
npm install angular-template-header --save-dev
```

## Usage
Add `angular-template-header` to the plugins section of your ESLint configuration file.

```typescript
import { plugin as angularTemplateHeader } from "angular-template-header";

export default defineConfig([
	{
		files: ["**/*.html"],
		plugins: [
			"angular-template-header": angularTemplateHeader,
  		]
		// ...
		rules: {
			"angular-template-header/header": [ "error", { "<!--\nCopyright 2026 ACME Inc.\n--!>" }],
			// ...
		},
	},
	// ...
]);
```

### Header configuration
When enabling the rule specify the license header *exactly* as you wish it to
appear - it doesn't add block comment tag grammar for you!

```typescript
rules: {
	"angular-template-header/header": [ "error", { "<!--\nCopyright 2026 ACME Inc.\n--!>" }],
	// ...
}
```

### Autofix
You may [auto-fix](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) your source files, adding or updating a given license header:

```sh
eslint --fix .
```

## License

[GPLv3](./LICENSE)

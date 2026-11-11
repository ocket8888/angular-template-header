/*
 * Copyright (C) 2026 ocket8888
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
// @ts-check
import * as process from "node:process";

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
	{
		ignores: ["dist/**/*", "node_modules/**/*"],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["**/*.ts"],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			"prettier": prettierPlugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: process.cwd(),
			},
		},
		rules: {
			"@typescript-eslint/adjacent-overload-signatures": "error",
			"@typescript-eslint/array-type": "off",
			"@typescript-eslint/await-thenable": "error",
			"@typescript-eslint/consistent-type-assertions": "error",
			"@typescript-eslint/consistent-type-definitions": "error",
			"@typescript-eslint/dot-notation": "error",
			"@typescript-eslint/explicit-function-return-type": "error",
			"@typescript-eslint/explicit-member-accessibility": [
				"error",
				{
					accessibility: "explicit",
					overrides: {
						constructors: "off",
					},
				},
			],
			"@typescript-eslint/explicit-module-boundary-types": "error",
			"@typescript-eslint/interface-name-prefix": "off",
			"@typescript-eslint/member-ordering": "off",
			"@typescript-eslint/naming-convention": [
				"error",
				{
					selector: "enumMember",
					format: ["UPPER_CASE"],
				},
				{
					selector: "property",
					modifiers: ["static", "readonly"],
					format: ["UPPER_CASE"],
				},
				{
					selector: "default",
					format: ["camelCase"],
					leadingUnderscore: "allow",
					trailingUnderscore: "allow",
				},
				{
					selector: "variable",
					format: ["camelCase", "UPPER_CASE"],
					leadingUnderscore: "allow",
					trailingUnderscore: "allow",
				},
				{
					selector: "typeLike",
					format: ["PascalCase"],
				},
			],
			"@typescript-eslint/no-dynamic-delete": "error",
			"@typescript-eslint/no-empty-function": "error",
			"@typescript-eslint/no-empty-interface": "error",
			"@typescript-eslint/no-empty-object-type": "error",
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/no-extraneous-class": [
				"error",
				{
					allowWithDecorator: true,
				},
			],
			"@typescript-eslint/no-floating-promises": "off",
			"@typescript-eslint/no-inferrable-types": [
				"warn",
				{
					ignoreParameters: true,
				},
			],
			"@typescript-eslint/no-invalid-this": [
				"error",
				{
					capIsConstructor: false,
				},
			],
			"@typescript-eslint/no-invalid-void-type": "error",
			"@typescript-eslint/no-misused-new": "error",
			"@typescript-eslint/no-misused-promises": "error",
			"@typescript-eslint/no-non-null-assertion": "error",
			"@typescript-eslint/no-namespace": "error",
			"@typescript-eslint/no-parameter-properties": "off",
			"@typescript-eslint/no-redeclare": "error",
			"@typescript-eslint/no-require-imports": "error",
			"@typescript-eslint/no-restricted-types": [
				"error",
				{
					types: {
						Object: {
							message: "Avoid using the `Object` type. Did you mean `object`?",
						},
						Function: {
							message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
						},
						Boolean: {
							message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
						},
						Number: {
							message: "Avoid using the `Number` type. Did you mean `number`?",
						},
						String: {
							message: "Avoid using the `String` type. Did you mean `string`?",
						},
						Symbol: {
							message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
						},
						BigInt: {
							message: "Avoid using the `BigInt` type. Did you mean `bigint`?",
						},
					},
				},
			],
			"@typescript-eslint/no-shadow": "error",
			"@typescript-eslint/no-this-alias": "error",
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
			"@typescript-eslint/no-unnecessary-qualifier": "error",
			"@typescript-eslint/no-unnecessary-type-arguments": "error",
			"@typescript-eslint/no-unnecessary-type-assertion": "error",
			"@typescript-eslint/no-unsafe-function-type": "error",
			"@typescript-eslint/no-unused-expressions": "error",
			"@typescript-eslint/no-unused-vars": "error",
			"@typescript-eslint/no-use-before-define": "error",
			"@typescript-eslint/no-var-requires": "off",
			"@typescript-eslint/prefer-for-of": "error",
			"@typescript-eslint/prefer-function-type": "error",
			"@typescript-eslint/prefer-namespace-keyword": "error",
			"@typescript-eslint/prefer-readonly": "error",
			"@typescript-eslint/promise-function-async": "error",
			"@typescript-eslint/restrict-plus-operands": "error",
			"@typescript-eslint/typedef": "off",
			"@typescript-eslint/triple-slash-reference": "error",
			"@typescript-eslint/unbound-method": "error",
			"@typescript-eslint/unified-signatures": "error",
			"arrow-body-style": "error",
			"arrow-parens": ["off", "always"],
			"brace-style": ["error", "1tbs"],
			"class-methods-use-this": "off",
			"complexity": "off",
			"comma-dangle": "off",
			"constructor-super": "error",
			"curly": "error",
			"eol-last": "error",
			"eqeqeq": ["error", "smart"],
			"guard-for-in": "error",
			"id-blacklist": [
				"error",
				"any",
				"Number",
				"number",
				"String",
				"string",
				"Boolean",
				"boolean",
				"Undefined",
				"undefined",
			],
			"id-match": "error",
			"linebreak-style": ["error", "unix"],
			"max-classes-per-file": "off",
			"max-len": ["error", { code: 140 }],
			"new-parens": "error",
			"no-bitwise": "off",
			"no-caller": "error",
			"no-cond-assign": "error",
			"no-console": [
				"error",
				{
					allow: [
						"error",
						"warn",
						"trace",
						"dir",
						"timeLog",
						"assert",
						"clear",
						"count",
						"countReset",
						"group",
						"groupEnd",
						"table",
						"groupCollapsed",
						"Console",
						"profile",
						"profileEnd",
						"timeStamp",
						"context",
					],
				},
			],
			"no-debugger": "error",
			"no-duplicate-case": "error",
			"no-duplicate-imports": "off",
			"no-else-return": "error",
			"no-empty": "error",
			"no-eval": "error",
			"no-extra-bind": "error",
			"no-fallthrough": "off",
			"no-invalid-this": "off",
			"no-mixed-spaces-and-tabs": "error",
			"no-multiple-empty-lines": [
				"error",
				{
					max: 1,
					maxBOF: 0,
					maxEOF: 0,
				},
			],
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"no-redeclare": "off",
			"no-restricted-imports": [
				"error",
				{
					patterns: [
						{
							message: "Going up more than one directory for an import is overly complex; use an import path that starts with 'src/' instead",
							group: ["../../*"],
						},
					],
				},
			],
			"no-return-await": "error",
			"no-shadow": "off",
			"no-sparse-arrays": "error",
			"no-template-curly-in-string": "error",
			"no-throw-literal": "error",
			"no-trailing-spaces": "error",
			"no-undef-init": "error",
			"no-underscore-dangle": "error",
			"no-unsafe-finally": "error",
			"no-unused-labels": "error",
			"no-var": "error",
			"object-shorthand": "error",
			"one-var": ["error", "never"],
			"prefer-const": "error",
			"prefer-object-spread": "error",
			"prefer-template": "error",
			"quote-props": ["error", "as-needed"],
			"quotes": "off",
			"radix": "error",
			"sort-keys": ["error", "asc", { natural: true }],
			"space-before-function-paren": [
				"error",
				{
					anonymous: "never",
					asyncArrow: "always",
					named: "never",
				},
			],
			"use-isnan": "error",
			"valid-typeof": "off",
			"prettier/prettier": "error",
		},
	},
]);

import type { JSRuleDefinition } from "eslint";

// This is decided by the ESLint plugin API; it's not up to me.
// eslint-disable-next-line @typescript-eslint/naming-convention
export const headerRule: JSRuleDefinition<{ RuleOptions: [{ header: string }] }> = {
	create(context) {
		const sourceCode = context.sourceCode;
		const text = sourceCode.text;

		const header = context.options[0].header;

		// Preserve a UTF-8 BOM if one exists.
		const offset = text.startsWith("\uFEFF") ? 1 : 0;

		const hasHeader = text.startsWith(header, offset);

		if (hasHeader) {
			return {};
		}

		return {
			// This is decided by the ESLint plugin API; it's not up to me.
			// eslint-disable-next-line @typescript-eslint/naming-convention
			Program(node): void {
				context.report({
					fix(fixer) {
						const existingContent = text.slice(offset);

						const separator = existingContent.startsWith("\r\n") || existingContent.startsWith("\n") ? "" : "\n";

						return fixer.insertTextAfterRange([0, offset], header + separator);
					},
					loc: {
						end: { column: 0, line: 1 },
						start: { column: 0, line: 1 },
					},
					messageId: "missingHeader",
					node,
				});
			},
		};
	},
	meta: {
		docs: {
			description: "Require a header in Angular HTML template files",
		},
		fixable: "code",
		messages: {
			missingHeader: "Missing required HTML file header.",
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					header: {
						type: "string",
					},
				},
				type: "object",
			},
		],
		type: "problem",
	},
};

import { headerRule } from "./rules/header.js";
export { headerRule } from "./rules/header.js";
export const plugin = {
    rules: {
        // This is ESLint plugin convention, im not gonna break it although i would love to.
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "require-html-header": headerRule,
    },
};
export default plugin;
//# sourceMappingURL=index.js.map
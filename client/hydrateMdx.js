import { jsx } from "react/jsx-runtime";
import { Code, MarkdownLayout } from "@m-context/ui";
import MdxPage, { frontmatter } from "MdxPage";
import { hydrateApp } from "./shared.js";





// @ts-nocheck



hydrateApp(/*#__PURE__*/ jsx(MarkdownLayout, {
    ...frontmatter,
    children: /*#__PURE__*/ jsx(MdxPage, {
        components: {
            Code: Code
        }
    })
}));


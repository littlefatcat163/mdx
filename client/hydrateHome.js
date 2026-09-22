import { jsx } from "react/jsx-runtime";
import { HomeLayout } from "@m-context/ui";
import { frontmatter } from "MdxPage";
import { hydrateApp } from "./shared.js";





// @ts-nocheck



hydrateApp(/*#__PURE__*/ jsx(HomeLayout, {
    ...frontmatter
}));


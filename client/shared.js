import { jsx } from "react/jsx-runtime";
import { hydrateRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import { MContextProvider } from "@m-context/ui";
import { resolveUrl } from "@m-context/ui/utils";
import lang from "@m-context/ui/lang";







// @ts-nocheck






function hydrateApp(node) {
    const { app: { name, langs } } = globalThis;
    hydrateRoot(document.getElementById('app'), /*#__PURE__*/ jsx(IntlProvider, {
        locale: document.documentElement.lang,
        messages: lang,
        children: /*#__PURE__*/ jsx(MContextProvider, {
            value: {
                name,
                langs,
                resolveUrl: resolveUrl
            },
            children: node
        })
    }));
}

export { hydrateApp };

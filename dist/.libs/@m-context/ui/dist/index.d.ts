import type { ComponentProps } from 'react';
import { JSX } from 'react';
import { JSXElementConstructor } from 'react';
import { PropsWithChildren } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';

export declare function Accordion({ title, children, groupId, defaultChecked, ...props }: AccordionProps): JSX.Element;

declare const ACCORDION_VARIANTS: readonly ["soft", "outline"];

declare type AccordionProps = Readonly<React.PropsWithChildren<{
    groupId?: string;
    defaultChecked?: boolean;
    title: React.ReactNode;
    color?: Color;
    variant?: AccordionVariant;
}>>;

export declare function Accordions({ children, color, variant }: AccordionsProps): JSX.Element;

declare type AccordionsProps = Readonly<PropsWithChildren<{
    color?: Color;
    variant?: AccordionVariant;
}>>;

declare type AccordionVariant = (typeof ACCORDION_VARIANTS)[number];

export declare function Alert({ children, icon, ...props }: Readonly<React.PropsWithChildren<AlertProps>>): JSX.Element;

declare type AlertProps = AppIconProps & {
    color?: Color;
    variant?: AlertVariant;
};

declare type AlertVariant = 'soft' | 'outline' | 'dash';

export declare function AppIcon({ icon, color, className }: PropsWithChildren<AppIconProps & {
    className?: string;
}>): string | number | bigint | JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | Iterable<ReactNode> | ReactElement<unknown, string | JSXElementConstructor<any>> | ReactPortal | null | undefined> | null;

export declare type AppIconProps = {
    icon?: ReactNode | boolean
    color?: Color
}

export declare type AsyncStatus = 'pending' | 'success' | 'error'

export declare function Badge({ children, icon, ...props }: BadgeProps): JSX.Element;

declare const BADGE_VARIANTS: readonly ["soft", "outline", "dash", "ghost"];

declare type BadgeProps = Readonly<React.PropsWithChildren<AppIconProps & {
    size?: Size;
    color?: Color;
    variant?: BadgeVariant;
}>>;

declare type BadgeVariant = (typeof BADGE_VARIANTS)[number];

export declare function Button({ children, size, color, variant, wide, block, square, circle, className, loading, ...props }: ButtonProps): JSX.Element;

declare const BUTTON_VARIANTS: readonly ["soft", "outline", "dash", "ghost", "link"];

declare type ButtonProps = Readonly<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: Size;
    color?: Color;
    variant?: ButtonVariant;
    wide?: boolean;
    block?: boolean;
    square?: boolean;
    circle?: boolean;
    loading?: boolean;
}>;

declare type ButtonVariant = (typeof BUTTON_VARIANTS)[number];

export declare function Chat({ children, avatar, variant, color, name, time, desc }: Readonly<React.PropsWithChildren<ChatProps>>): JSX.Element;

declare const CHAT_VARIANTS: readonly ["start", "end"];

declare type ChatProps = {
    color?: Color;
    variant?: ChatVariant;
    avatar?: string;
    name?: string;
    time?: string;
    desc?: string;
};

declare type ChatVariant = (typeof CHAT_VARIANTS)[number];

export declare function ClientOnly({ children, fallback }: Readonly<ClientOnlyProps>): ReactNode;

declare type ClientOnlyProps = {
    children: () => React.ReactNode;
    fallback?: React.ReactNode;
};

export declare function Code({ lang, children }: Readonly<CodeProps>): JSX.Element;

declare type CodeProps = {
    lang: string;
    children: string;
};

export declare function Collapse({ title, children, className, style, open, ...props }: CollapseProps): JSX.Element;

declare const COLLAPSE_VARIANTS: readonly ["soft", "outline"];

declare type CollapseProps = Readonly<React.PropsWithChildren<{
    title: React.ReactNode;
    titleClassName?: string;
    color?: Color;
    variant?: CollapseVariant;
    className?: string;
    iconStart?: boolean;
    style?: React.CSSProperties;
    open?: boolean;
}>>;

declare type CollapseVariant = (typeof COLLAPSE_VARIANTS)[number];

export declare type Color =
'error' | 'info' | 'success' | 'warning' | 'neutral' | 'primary' | 'secondary' | 'accent'

export declare function DiffViewer(props: DiffViewerProps): JSX.Element;

export declare type DiffViewerOption = ImgItem;

export declare type DiffViewerOptionDesc = {
    order?: number;
    [key: string]: unknown;
};

export declare type DiffViewerProps = Readonly<{
    optGroups: string[];
    optGroupOptions: Record<string, DiffViewerOption[]>;
    optDescs: Record<string, Record<string, DiffViewerOptionDesc>>;
}>;

export declare function Fieldset({ children, className }: Readonly<FieldsetProps>): JSX.Element;

export declare namespace Fieldset {
    export { Legend };
    export { Label };
    export { FloatingLabel };
    export { ValidatorHint };
}

declare type FieldsetProps = React.PropsWithChildren<{
    className?: string;
}>;

export declare type FileRouteNode = {
    path: string
    name: string
    type: 'folder' | 'file'
    children?: FileRouteNode[]
}

export declare function GlobalLoading(): false | ReactPortal;

export declare function GlobalModal(): false | ReactPortal;

declare type HeroProps = {
    banner?: string;
    title: string;
    description: string;
    publishedAt: string;
};

export declare type HTMLTheme = 'dark' | 'light'

export declare function Icon({ name, size, ...props }: IconProps): JSX.Element;

export declare type IconName = 'bars' | 'check' | 'chevron-left' | 'chevron-right' | 'copy' | 'def' | 'def-o' | 'error' | 'error-o' | 'hash' | 'info' | 'info-o' | 'language' | 'moon' | 'more' | 'open-link' | 'qr-code' | 'search' | 'success' | 'success-o' | 'sun' | 'warning' | 'warning-o' | 'x'

declare type IconProps = Readonly<ComponentProps<'svg'> & {
    name: IconName;
    size?: number | string;
}>;

export declare type ImgItem = {
    alt: string
    src: string
    width: number
    height: number
}

export declare function Imgs({ list, col }: ImgsProps): JSX.Element;

declare type ImgsProps = {
    list: ImgItem[];
    col?: number;
};

export declare function Input({ children, validator, className, ...props }: InputProps): JSX.Element;

declare type InputProps = React.PropsWithChildren<{
    validator?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>>;

declare type Language = 'zh-CN' | 'en-US'

export declare const loading: {
    show: () => void | undefined;
    hide: () => void | undefined;
};

export declare function MarkdownLayout({ children, banner, title, description, publishedAt, updatedAt }: MarkdownLayoutProps): JSX.Element;

declare type MarkdownLayoutProps = Readonly<PropsWithChildren<HeroProps & {
    updatedAt: string;
}>>;

export declare type MContext = {
    name: string
    version: string
    isMobile: boolean
    theme: HTMLTheme
    toggleTheme: () => void
    injectHeadRes: (res: WebRes) => void
    injectBodyRes: (res: WebRes) => void
}

declare type MContextCommon = {
    langs: Language[];
};

export declare function MContextProvider({ children, value }: PropsWithChildren<{
    value: MContextReactPayload;
}>): JSX.Element;

export declare type MContextReactPayload = Pick<MContext, 'name'> & MContextCommon;

export declare function Mermaid({ children }: Readonly<{
    children: string;
}>): JSX.Element;

export declare function Modal({ id, header, children, resolve, reject, className, okBtn, cancelBtn }: Readonly<React.PropsWithChildren<ModalProps>>): JSX.Element;

export declare const modal: ModalStackManager;

declare type ModalFooterBtn = {
    text?: string;
    color?: Color;
    onClick?: (promise: ModalPromise) => void;
};

declare interface ModalItem<T = any, E = any> {
    id: string;
    content: React.ReactElement;
    resolve: (value: T) => void;
    reject: (reason?: E) => void;
}

declare type ModalPromise = {
    resolve?: (value?: any) => void;
    reject?: (reason?: any) => void;
};

declare type ModalProps = ModalPromise & {
    id?: string;
    header?: React.ReactNode;
    okBtn?: ModalFooterBtn | null;
    cancelBtn?: ModalFooterBtn | null;
    className?: string;
};

declare class ModalStackManager {
    private stack;
    private zIndex;
    open(content: React.ReactElement): Promise<any>;
    close(id: string): void;
    rejectCurrent(reason?: any): void;
    resolveCurrent(data?: any): void;
    getCurrent(): ModalItem | null;
    getAll(): ModalItem[];
    private listeners;
    subscribe(listener: () => void): () => void;
    private notifyListeners;
}

declare class PhotoSwipe {
    #private;
    open(index: number, dataSource?: ImgItem[]): Promise<void>;
}

export declare const photoSwipe: () => PhotoSwipe;

export declare function Select({ children, className, ...props }: SelectProps): JSX.Element;

declare type SelectProps = React.PropsWithChildren<{} & React.SelectHTMLAttributes<HTMLSelectElement>>;

export declare type Size = 'xs' | 'sm' | 'lg' | 'xl'

export declare function Tab({ children, label, groupId, defaultChecked, ...props }: TabProps): JSX.Element;

export declare function Table({ children, ...props }: TableProps): JSX.Element;

declare const TABLE_VARIANTS: readonly ["soft"];

declare type TableProps = Readonly<React.PropsWithChildren<{
    size?: Size;
    color?: Color;
    zebra?: boolean;
    variant?: TableVariant;
}>>;

declare type TableVariant = (typeof TABLE_VARIANTS)[number];

declare type TabProps = Readonly<React.PropsWithChildren<{
    label: React.ReactNode;
    groupId?: string;
    defaultChecked?: boolean;
    variant?: TabsVariant;
}>>;

export declare function Tabs({ children, ...props }: TabsProps): JSX.Element;

declare const TABS_VARIANTS: readonly ["border", "lift", "box"];

declare type TabsProps = Readonly<React.PropsWithChildren<{
    size?: Size;
    color?: Color;
    variant?: TabsVariant;
}>>;

declare type TabsVariant = (typeof TABS_VARIANTS)[number];

declare function Text_2({ children, ...props }: TextProps): JSX.Element;
export { Text_2 as Text }

declare type TextProps = Readonly<React.PropsWithChildren<{
    color?: Color;
    size?: Size;
    bg?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    del?: boolean;
}>>;

export declare function useMContext(): Pick<MContext, "name" | "theme"> & MContextCommon;

declare type WebRes = {
    styles?: Record<string, string>
    imports?: Record<string, string>
    jss?: Record<string, string>
}

export { }

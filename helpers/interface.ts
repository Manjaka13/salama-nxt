/*
	All typescript interfaces
*/

// import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface ISalamaProps {
	Component: React.ComponentClass;
	pageProps?: Record<string, unknown>;
}

export interface IPageProps {
	title?: string;
	image?: string;
	description?: string;
	children?: JSX.Element;
	active?: number;
}

export interface IHeadingProps {
	title?: string;
	image?: string;
	children?: string;
}

export interface ISocial {
	icon: IconName;
	title: string;
	link: string;
}

export interface IButtonProps {
	title?: string;
	className?: string;
	children?: JSX.Element | string;
	atClick?: () => null;
	color?: string;
	disabled?: boolean;
	alt?: boolean;
}

export interface IBadgeProps {
	content: number;
}

export interface ITalkItem {
	name: string;
	avatar: string;
	lastMessage: string;
	date: string;
	read: boolean;
}

// Book interface
export interface IBook {
	isbn: string;
	title: string;
	price: number;
	cover: string;
	synopsis: Array<string>;
}

// Redux cart action
export interface ICartAction {
	type: string;
	payload?: IBook;
}

// Redux search action
export interface ISearchAction {
	type: string;
	payload?: string;
}

// Store
export interface IStore {
	books: Array<IBook>;
	search: string;
}

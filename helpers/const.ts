import { ISocial } from "helpers/interface";

const PROXY = "api/";
const APP_NAME = "Salama";
const SOCIAL: Array<ISocial> = [
	{
		icon: "facebook",
		title: "Visiter notre page Facebook",
		link: "#0"
	},
	{
		icon: "linkedin",
		title: "Se connecter sur LinkedIn",
		link: "#0"
	},
	{
		icon: "github",
		title: "Voir le repo Github",
		link: "#0"
	}
];

export {
	PROXY,
	APP_NAME,
	SOCIAL
};
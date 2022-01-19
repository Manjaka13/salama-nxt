import React from "react";
import Head from "next/head";
import { IHeadingProps } from "helpers/interface";

/*
	Heading of each page
	--------------------
	@title: page title
	@image: page link representation image
	@children: description of the page
*/

const Heading: React.FC<IHeadingProps> = ({
	title = "",
	image,
	children = "",
}): JSX.Element => (
	<Head>
		<meta charSet="utf-8" />
		<title>{title}</title>
		<link rel="shortcut icon" href={`favicon.ico`} />
		<meta name="theme-color" content="#009bdd" />
		<meta name="robots" content="index, follow" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
		/>
		<meta httpEquiv="language" content="fr" />
		<meta name="author" content="Manjaka13 <manjaka.rajaonson@gmail.com>" />
		<meta name="description" content={children} />
		<meta name="generator" content="NextJS" />
		<meta httpEquiv="language" content="en" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={children} />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="en_EN" />
		<meta property="og:image" content={image} />
		<meta property="og:site_name" content="Salama" />
	</Head>
);

export default Heading;

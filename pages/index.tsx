import React from "react";
import Page from "components/Page";
import Button from "components/core/Button";

/*
	Home page
*/

const Home = (): JSX.Element => {
	return (
		<Page
			title="Salama"
			description="Salama messaging application"
			image="cover.png"
			active={0}
		>
			<>
				<h1>Hello from Salama !</h1>
				<Button>
					Click me
				</Button>
			</>
		</Page>
	);
};

export default Home;

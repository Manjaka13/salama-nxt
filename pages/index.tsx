import React from "react";
import Page from "components/Page";
import Button from "components/Button";

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
				<Button className="mg-right-20">Click me</Button>
				<Button alt>Click me</Button>
			</>
		</Page>
	);
};

export default Home;

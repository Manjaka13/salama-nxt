import React from "react";
import Page from "components/Page";
import Main from "components/Main";

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
				<Main />
			</>
		</Page>
	);
};

export default Home;

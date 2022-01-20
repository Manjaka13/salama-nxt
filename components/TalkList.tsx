import React from "react";
import { v4 as uuidv4 } from "uuid";
import TalkItem from "components/TalkItem";
import { ITalkItem } from "helpers/interface";
import talkList from "public/message.json";

const TalkList = (): JSX.Element => {
	const mappedTalkList: Array<JSX.Element> = talkList.map((talk: ITalkItem) => (
		<TalkItem talk={ talk } key={ uuidv4() } />
	));

	return (
		<div className="talk-list o-auto">
			{ mappedTalkList }
		</div>
	);
};

export default TalkList;
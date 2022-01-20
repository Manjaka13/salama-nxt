import React from "react";
import { ITalkItem } from "helpers/interface";

const TalkItem: React.FC<ITalkItem> = ({ talk }): JSX.Element => (
	<div className="talk-item f-row-start-center pd-top-10 pd-bottom-10 pointer">
		<div className="no-select w-40px h-40px br-round mg-left-10 mg-right-10 o-hidden">
			<img className="w-100 h-100" src={ talk.avatar } alt={ talk.name } />
		</div>
		<div className="w-60 w-xlg-50">
			<p
				className={ "no-select fs-100 w-100 o-hidden" + (talk.read ? '' : ' bold black') }
			>
				{ talk.name.length > 17 ? talk.name.substring(0, 16) : talk.name }
			</p>
			<p
				className={ "talk-item__message no-select " + (talk.read ? '' : 'bold black') + " fs-90 pd-top-5 w-100 o-hidden" }
			>
				{ talk.lastMessage }
			</p>
		</div>
		<p
			className={ "talk-item__date no-select fs-100 h-40px f-row-end-end pd-right-10" + (talk.read ? '' : ' bold black') }
		>
			{ talk.date }
		</p>
	</div>
);

export default TalkItem;
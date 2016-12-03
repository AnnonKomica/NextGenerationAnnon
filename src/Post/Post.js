// @flow
import React from "react";
import shallowCompare from "react-addons-shallow-compare";

type Props = {
    threadId: string,
    id: string,
    imgSrc?: string,
    nickName?: string,
    title?: string,
    userId: string,
    content: string,
    timestamp: string,
}

type State = {};

const DefaultValue = {
    TITLE: "無題",
};

export default class Post extends React.Component {

    props: Props;
    state: State;

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const {
            id: postId,
            threadId,
            imgSrc,
            title,
            nickName,
            userId: generatedUserId,
            content,
            timestamp,
        } = this.props;

        return (
            <div id={`${threadId}_${postId}`} className="post">
                {imgSrc ? <img src={imgSrc} /> : null}
                <div>{
                    `Title: ${title || DefaultValue.TITLE} ` +
                    `User: ${nickName || generatedUserId} ` +
                    `At: ${timestamp}`
                }</div>
                <p>{content}</p>
            </div>
        );
    }
}
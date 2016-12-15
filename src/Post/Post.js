// @flow
import React from "react";
import shallowCompare from "react-addons-shallow-compare";
import PostMedia from "./PostMedia";
import PostContent from "./PostContent";

type Props = {
    threadId: string,
    imgSrc?: string,
    nickName?: string,
    title?: string,
    userId: string,
    postNumber: string,
    content: string,
    timestamp: string,
}

type State = {};

const DefaultValue = {
    TITLE: "無題",
    NAME: "無名"
};

export default class Post extends React.Component {

    props: Props;
    state: State;

    shouldComponentUpdate(nextProps: Props, nextState: State) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const {
            imgSrc,
            title,
            nickName,
            userId: generatedUserId,
            content,
            postNumber,
            timestamp,
        } = this.props;

        return (
            <div id={`${postNumber}`} className="post">
                <div>
                    <span>{`${title || DefaultValue.TITLE} `}</span>
                    <span>{`${nickName || DefaultValue.NAME} `}</span>
                    <span>{`${new Date(timestamp).toLocaleDateString()} `}</span>
                    <span>{`${postNumber} `}</span>
                    <span>{`${generatedUserId}`}</span>
                </div>
                <PostMedia mediaSrc={imgSrc} />
                <PostContent>{content}</PostContent>
            </div>
        );
    }
}

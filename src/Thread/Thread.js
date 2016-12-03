// @flow
import React from "react";
import Post from "../Post";

type Props = {
    id: string,
    posts: PostObject[],
};

type PostObject = {
    id: string,
    imgSrc?: string,
    nickName?: string,
    title?: string,
    userId: string,
    content: string,
    timestamp: string,
}

export default class Thread extends React.Component {

    props: Props;

    _renderPosts() {
        const {
            posts,
            id: threadId,
        } = this.props;

        return posts.map((post) => (
            <Post
                key={post.id}
                threadId={threadId}
                {...post}
            />
        ));
    }

    render() {
        const {id: threadId} = this.props;

        return (
            <div id={threadId} className='thread'>
                {this._renderPosts()}
            </div>
        );
    }
}

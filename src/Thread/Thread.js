// @flow
import React from "react";
import Post from "../Post";

type Props = {
    id: string,
    posts: PostObject[],
};

type PostObject = {
    imgSrc?: string,
    nickName?: string,
    title?: string,
    userId: string,
    postNumber: string,
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
                key={post.postNumber}
                threadId={threadId}
                {...post}
            />
        ));
    }

    render() {
        return (
            <div className='thread'>
                {this._renderPosts()}
            </div>
        );
    }
}

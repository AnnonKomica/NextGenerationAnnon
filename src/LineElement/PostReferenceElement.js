// @flow
import React, {Component} from "react";

type Props = {
    postNumber: string
}

export default class PostReferenceElement extends Component {

    props: Props;

    render() {
        const {postNumber} = this.props;

        return (
            <a href={`#${postNumber}`}>
                >>{postNumber}
            </a>
        );
    }
}

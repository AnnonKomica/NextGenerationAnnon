// @flow
import React, {Component} from "react";
import PostReferenceElement from "./PostReferenceElement";
import YoutubeLinkElement from "./YoutubeLinkElement";
import EHLinkElement from "./EHLinkElement";

const POST_NUMBER_REG_EXP = /^>>(\d+)$/;
const YOUTUBE_LINK_FULL_REG_EXP = /^https:\/\/www.youtube.com\/watch\?v=([0-9a-zA-Z-_]+)$/;
const YOUTUBE_LINK_SHORT_REG_EXP = /^https:\/\/youtu.be\/([0-9a-zA-Z-_]+)$/;
const EH_LINK_REG_EXP = /g\/(\d+)\/([a-z0-9]+)\/?/;

type Props = {
    children: string
}

export default class LineElement extends Component {
    props: Props;

    render() {
        const {children} = this.props;
        let match = children.match(POST_NUMBER_REG_EXP);

        if (match) {
            return (
                <PostReferenceElement
                    postNumber={match[1]}
                />
            );
        }

        match = children.match(YOUTUBE_LINK_FULL_REG_EXP) || children.match(YOUTUBE_LINK_SHORT_REG_EXP);

        if (match) {
            return (
                <YoutubeLinkElement videoId={match[1]}>
                    {children}
                </YoutubeLinkElement>
            );
        }

        match = children.match(EH_LINK_REG_EXP);

        if (match) {
            return (
                <EHLinkElement galleryId={parseInt(match[1])} galleryToken={match[2]}/>
            );
        }

        return (<span>{children}</span>);
    }
}

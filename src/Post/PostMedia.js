// @flow
import React from "react";
import {ImageMediaElement, WebMMediaElement} from "../ThumbnailMediaElement";

type Props = {
    mediaSrc: ?string
};

type State = {
    isLoad: boolean,
};

const JPEG_REG_EXR = /.jpg$/;
const GIF_REG_EXR = /.gif$/;
const WEBM_REG_EXR = /.webm$/;

export default class PostMedia extends React.Component {

    props: Props;
    state: State;

    render() {
        const {mediaSrc} = this.props;

        if (!mediaSrc) {
            return null;
        }

        if (mediaSrc.match(JPEG_REG_EXR) || mediaSrc.match(GIF_REG_EXR)) {
            return (
                <ImageMediaElement
                    thumbnailSrc={mediaSrc}
                    rawMediaSrc={mediaSrc}
                />
            );
        }

        if (mediaSrc.match(WEBM_REG_EXR)) {
            return (
                <WebMMediaElement
                    thumbnailSrc={mediaSrc}
                    rawMediaSrc={mediaSrc}
                />
            );
        }

        // Unsupport image format
        return null;
    }
}

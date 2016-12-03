// @flow
import React from "react";
import ClassNameUtil from "../utils/ClassNameUtil";
import ThumbnailMediaElement from "./ThumbnailMediaElement";

export default class ImageMediaElement extends ThumbnailMediaElement {
    _getRawMediaElement(): ?Object {
        const {
            showRaw,
            detailLoaded
        } = this.state;

        if (!showRaw) {
            return null;
        }

        const rawMediaClass = ClassNameUtil.classNames(["thumbnail-media__raw-media--image"], {
            "thumbnail-media__raw-media--loading": !detailLoaded,
        });

        return (
            <img
                className={rawMediaClass}
                src={this.props.rawMediaSrc}
                onLoad={this._handleRawElementLoad}
                onClick={this._handleRawElementClick}
            />
        );
    }
}

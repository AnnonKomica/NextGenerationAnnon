// @flow
import React from "react";
import ThumbnailMediaElement from "./ThumbnailMediaElement";
import ClassNameUtil from "../utils/ClassNameUtil";

export default class WebMMediaElement extends ThumbnailMediaElement {
    _getRawMediaElement(): ?Object {
        const {
            showRaw,
            detailLoaded
        } = this.state;

        if (!showRaw) {
            return null;
        }

        const containerClass = ClassNameUtil.classNames(["thumbnail-media__raw-media-container"], {
            "hide": !detailLoaded,
        });


        return (
            <div className={containerClass}>
                <video
                    autoPlay
                    className="thumbnail-media__raw-media--webm"
                    controls
                    src={this.props.rawMediaSrc}
                    onCanPlay={this._handleRawElementLoad}
                />
                <div
                    className="thumbnail-media__raw-media-close-button"
                    onClick={this._handleRawElementClick}
                >
                    x
                </div>
            </div>
        );
    }
}

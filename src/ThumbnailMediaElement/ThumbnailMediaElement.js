// @flow
import React from "react";
import ClassNameUtil from "../utils/ClassNameUtil";

type Props = {
    thumbnailSrc: string,
    rawMediaSrc: string,
}

type State = {
    showRaw: boolean,
    detailLoaded: boolean
};

export default class ThumbnailMediaElement extends React.Component {

    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);

        this._handleRawElementLoad = this._handleRawElementLoad.bind(this);
        this._handleThumbnailClick = this._handleThumbnailClick.bind(this);
        this._handleRawElementClick = this._handleRawElementClick.bind(this);

        this.state = {
            showRaw: false,
            detailLoaded: false,
        };
    }

    _handleThumbnailClick() {
        this._toggleShowRaw();
    }

    _handleRawElementClick() {
        this._toggleShowRaw();
    }

    _handleRawElementLoad() {
        this.setState({
            detailLoaded: true
        });
    }

    _toggleShowRaw() {
        this.setState({
            showRaw: !this.state.showRaw
        });
    }


    _getRawMediaElement(): ?Object {
        // to be overrided
    }

    render() {
        const {
            thumbnailSrc,
        } = this.props;
        const {
            showRaw,
            detailLoaded
        } = this.state;
        const rawMediaElement = this._getRawMediaElement();
        const thumbnailClasses = ClassNameUtil.classNames(["thumbnail-media__thumbnail"], {
            "thumbnail-media__thumbnail--raw-loading": (showRaw && !detailLoaded),
            "thumbnail-media__thumbnail--show-raw": (showRaw && detailLoaded)
        });

        return (
            <div>
                <img
                    className={thumbnailClasses}
                    src={thumbnailSrc}
                    onClick={this._handleThumbnailClick}
                />
                {rawMediaElement}
            </div>
        );
    }
}

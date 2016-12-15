// @flow
import React, {Component} from "react";
import ClassNameUtil from "../utils/ClassNameUtil";
import YouTube from "react-youtube";

type Props = {
    videoId: string,
    children: string
}

type State = {
    loaded: boolean
}

export default class YoutubeLinkElement extends Component {

    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);

        this._handleVideoLoad = this._handleVideoLoad.bind(this);

        this.state = {
            loaded: false
        };
    }

    _handleVideoLoad() {
        this.setState({
            loaded: true
        });
    }

    render() {
        const {children, videoId} = this.props;

        const linkElement = (!this.state.loaded) ? (<div>Loading...</div>) : null;
        const youtubeClass = ClassNameUtil.classNames([], {hide: !this.state.loaded});

        return (
            <div>
                <span>{children}</span>
                {linkElement}
                <YouTube
                    className={youtubeClass}
                    videoId={videoId}
                    onReady={this._handleVideoLoad}
                />
            </div>
        );
    }
}

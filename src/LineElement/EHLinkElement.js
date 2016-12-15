// @flow
import React, {Component} from "react";

type Props = {
    galleryId: number,
    galleryToken: string
};

type State = {
    ehMeta: ?{
        title: string,
        thumbnail: string,
    },
}

type EhApiResponse = {
    gmetadata: GalleryMetadata[]
}

type GalleryMetadata = {
     gid: number,
     token: string,
     archiver_key: string,
     title: string,
     title_jpn: string,
     category: string,
     thumb: string,
     uploader: string,
     posted: string,
     filecount: string,
     filesize: number,
     expunged: boolean,
     rating: string,
     torrentcount: string,
     tags: string[]
}

const EH_HOST = "http://g.e-hentai.org";
const EH_API_PATH = `${EH_HOST}/api.php`;
const EH_GALLERY_PATH = `${EH_HOST}/g/`;

export default class EHLinkElement extends Component {

    props: Props;
    state: State;

    constructor(props: Props) {
        super(props);

        this._handleReceiveApiResponse = this._handleReceiveApiResponse.bind(this);

        this.state = {
            ehMeta: null,
        };
    }

    componentWillMount() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // Refer to https://ehwiki.org/wiki/API
        const options = {
            method: "POST",
            body: JSON.stringify({
                method: "gdata",
                gidlist: [
                    [this.props.galleryId, this.props.galleryToken]
                ],
                namespace: 1
            })
        };

        fetch(EH_API_PATH, options)
        .then((response) => {
            return response.json();
        })
        .then(this._handleReceiveApiResponse)
        .catch(() => {
            // TODO handle error
        });
    }

    _handleReceiveApiResponse(jsonResponse: EhApiResponse) {
        const {gmetadata: [{thumb, title}]} = jsonResponse;

        this.setState({
            ehMeta: {
                title,
                thumbnail: thumb
            }
        });
    }

    render() {
        const {ehMeta} = this.state;
        let linkContent;

        if (ehMeta) {
            // Show meta data
            linkContent = (
                <div>
                    <p>{ehMeta.title}</p>
                    <img src={ehMeta.thumbnail} />
                </div>
            );
        } else {
            // Show loading state
            linkContent = (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                <p>{`${EH_GALLERY_PATH}/${this.props.galleryId}/`}</p>
                {linkContent}
            </div>
        );
    }
}

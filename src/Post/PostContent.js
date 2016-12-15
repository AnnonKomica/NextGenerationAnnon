import React from "react";
import LineElement from "../LineElement";

type Props = {
    children: string,
};

export default class PostContent extends React.Component {

    props: Props;

    render() {
        const {children, postLineEventHandlers} = this.props;
        const lines: string[] = children.split("\n");

        return (
            <div>
                {lines.map((line, currentIndex) => {
                    const element = <LineElement postLineEventHandlers={postLineEventHandlers}>{line}</LineElement>;

                    if (!currentIndex) {
                        return element;
                    }

                    return [<br key="break" />, element];
                })}
            </div>
        );
    }
}

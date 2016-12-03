import React from "react";
import renderer from "react-test-renderer";

import WebMMediaElement from "../WebMMediaElement";

// eslint-disable-next-line
test("WebMMediaElement DOM should render correctly", () => {
    const component = renderer.create(
        <WebMMediaElement
            thumbnailSrc="thumbnailSrc"
            rawMediaSrc="rawMediaSrc"
        />
    );

    let tree = component.toJSON();

    // eslint-disable-next-line
    expect(tree).toMatchSnapshot();

    tree.children[0].props.onClick();
    tree = component.toJSON();

    // eslint-disable-next-line
    expect(tree).toMatchSnapshot();

    tree.children[1].children[0].props.onCanPlay();
    tree = component.toJSON();

    // eslint-disable-next-line
    expect(tree).toMatchSnapshot();


    tree.children[1].children[1].props.onClick();
    tree = component.toJSON();

    // eslint-disable-next-line
    expect(tree).toMatchSnapshot();
});

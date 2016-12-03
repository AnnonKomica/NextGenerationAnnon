import React from "react";
import renderer from "react-test-renderer";

import ImageMediaElement from "../ImageMediaElement";

// eslint-disable-next-line
test("ImageMediaElement DOM should render correctly", () => {
    const component = renderer.create(
        <ImageMediaElement
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

    tree.children[1].props.onLoad();
    tree = component.toJSON();

    // eslint-disable-next-line
    expect(tree).toMatchSnapshot();


    tree.children[1].props.onClick();
    tree = component.toJSON();

    // eslint-disable-next-line
    expect(tree).toMatchSnapshot();
});

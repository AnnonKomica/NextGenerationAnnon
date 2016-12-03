import React from "react";
import renderer from "react-test-renderer";

import Post from "../Post";

import POST from "./testData";

// eslint-disable-next-line
test("POST DOM should render correctly", () => {
    const component = renderer.create(
        <Post {...POST} />
    );

    let tree = component.toJSON();

    // eslint-disable-next-line
    expect(tree).toMatchSnapshot();
});

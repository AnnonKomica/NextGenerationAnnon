import React from "react";
import renderer from "react-test-renderer";

import Thread from "../Thread";

import THREAD from "./testData";

// eslint-disable-next-line
test("Thread DOM should render correctly", () => {
    const component = renderer.create(
        <Thread id={THREAD.id} posts={THREAD.posts} />
    );

    let tree = component.toJSON();

    // eslint-disable-next-line
    expect(tree).toMatchSnapshot();
});

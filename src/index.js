// @flow
import React from "react";
import ReactDOM from "react-dom";
import Thread from "./Thread";

require("./ThumbnailMediaElement/sass/ThumbnailMediaElement.scss");
require("./Thread/sass/Thread.scss");
require("./Post/sass/Post.scss");

const ThreadData = {
    id: "thread2",
    posts: [{
        id: "post0",
        imgSrc: "./images/testImage0.jpg",
        userId: "JKwelkf23jv",
        content: "content1",
        timestamp: "19911209",
    }, {
        id: "post1",
        userId: "12kjgvsk3mc",
        content: "content20l",
        timestamp: "19911210",
    }, {
        id: "post2",
        imgSrc: "./images/testImage1.jpg",
        userId: "12kg9q23ngvc",
        content: "content3",
        timestamp: "20160912",
    }, {
        id: "post3",
        imgSrc: "./images/testWebM.webm",
        userId: "12kg9q23ngvc",
        content: "content3",
        timestamp: "20160912",
    }]
};

ReactDOM.render(<Thread id={ThreadData.id} posts={ThreadData.posts} />, document.getElementById("root"));

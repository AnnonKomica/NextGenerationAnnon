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
        imgSrc: "./images/testImage0.jpg",
        userId: "JKwelkf23jv",
        content: "content1\ng/1002188/2c062bad62/",
        postNumber: "80008080",
        timestamp: "1991/12/09",
    }, {
        userId: "12kjgvsk3mc",
        content: "content20l",
        postNumber: "80008081",
        timestamp: "1991/12/10",
    }, {
        imgSrc: "./images/testImage1.jpg",
        userId: "12kg9q23ngvc",
        content: "content3",
        postNumber: "80008082",
        timestamp: "2016/09/12",
    }, {
        imgSrc: "./images/testWebM.webm",
        userId: "12kg9q23ngvc",
        content: ">>80008080\ncontent3\nhttps://youtu.be/sBtZKwCrg8Y",
        postNumber: "80008083",
        timestamp: "2016/09/12",
    }]
};

ReactDOM.render(<Thread id={ThreadData.id} posts={ThreadData.posts} />, document.getElementById("root"));

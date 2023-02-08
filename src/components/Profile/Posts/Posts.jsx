import React from "react";
import s from "./Posts.module.css";
import Post from "./PostElement/PostElement";


const Posts = (props) => {
    const post = props.profilePage.postData.map((d) => (
        <Post key={d.id} message={d.message} like={d.like}/>));

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost()
    };
    let updatePost = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
    };

    return (
        <div>
            <div className={s.block}>
        <textarea
            onChange={updatePost}
            id="text"
            value={props.profilePage.newText}
            ref={newPostElement}>
        </textarea>
                <div>
                    <button onClick={addPost}>add</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>{post}</div>
        </div>
    );
};


export default Posts;

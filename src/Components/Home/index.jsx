
import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddBlog } from "../../Action/BlogAction";

function Home() {
    let history = useHistory();
    const dispatch = useDispatch();

    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const PostHandler=()=>{
        const blogdata={
            Title:Title,
            Description:Description
        }
        dispatch(AddBlog(blogdata));
        console.log("blog data" + JSON.stringify(blogdata))
    }
  return (
    <>
    <div className="container">
    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
        Title
      </label>
      <input
        type="text"
        id="Title"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setTitle(e.target.value)}
        value={Title}
      />

    </div>
    <div className="col-auto">
    <label htmlFor="inputPassword6" className="col-form-label">
        Description
      </label>
      <textarea
        rows={5}
        type="text"
        id="Description"
        className="form-control"
        aria-describedby="passwordHelpInline"
        onChange={(e) => setDescription(e.target.value)}
        value={Description}
      />
    </div>
    <br></br>
    <br></br>
    <button 
    className="btn btn-primary" 
    type="submit" 
    disabled={!Title || !Description}
     onClick={PostHandler}
     >Post</button>
    </div>
  </>
  );
}

export default Home;

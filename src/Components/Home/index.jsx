
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { AddBlog,UpdateBlog,getBlog } from "../../Action/BlogAction";
import shortid from "shortid";

export default function Home() {
    let { id } = useParams();
    console.log(id)
    let history = useHistory();
    const dispatch = useDispatch();

    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const getblogSelector = useSelector((state) => state.blogs.blog)

    console.log("out",getblogSelector)
    const PostHandler=(e)=>{
      e.preventDefault()
      if(id)
      {
        const blogdata = {
          id: id,
          Title:Title,
          Description:Description
        }
        dispatch(UpdateBlog(blogdata));
        history.push("/Show");
      }
      else
      {
        const blogdata={
          id: shortid.generate(),
          Title:Title,
          Description:Description
      }
      dispatch(AddBlog(blogdata));
      console.log("blog data" + JSON.stringify(blogdata))
      history.push("/Show")
      }

    }

      useEffect(() => {
        if (id) {
          dispatch(getBlog(id));
        }
      }, [id]);
    
      useEffect(() => {
        console.log("getblogSelector in", getblogSelector);
        if (getblogSelector != null) {
          setTitle(getblogSelector.Title)
          setDescription(getblogSelector.Description)
    
        }
      }, [getblogSelector]);
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
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
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
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
    <br></br>
    <br></br>
    <button 
    className="btn btn-primary" 
    type="submit" 
    disabled={!Title || !Description}
     onClick={PostHandler}
     >{id ? "Update Post" : "Add Post"}</button>
    </div>
  </>
  );
}



import { useSelector ,useDispatch} from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { DeleteBlog,UpdateBlog} from '../../Action/BlogAction';
export default function Blog_view()
{
    let history = useHistory();
    const dispatch = useDispatch()
    const addanother = () => {
        history.push("/");
      }
  
    const blogSelector = useSelector((state) => state.blogs.blogs)
    console.log("blogSelector ", blogSelector)
    return(
                <div className="card-deck">
                  <div className="card">
                    <div className="card-body">
                    {blogSelector.map(blogs => (
                      <><h5 className="card-title">{blogs.Title}</h5>
                      <p className="card-text">{blogs.Description}</p>
                      <button type="button" class="btn btn-link btn-sm btn-block">Show More</button>
                      <br></br>
                      <br></br>
                      <button
                      type="button"
                      className="btn btn-sm btn-dark mx-3"
                       onClick={() => dispatch(DeleteBlog(blogs.id))}
                    >
                      Delete
                    </button>
                    <Link to={`/edit/${blogs.id}`}
                    >
                      <span>Edit</span>
                    </Link>
                    <hr></hr>
                    </>
                    ))}
                    </div>
                  </div>
                  <button type="button" 
                  class="btn btn-primary btn-sm "
                  onClick={addanother}
                  >Add Another Blog</button>
                </div>
              );
}
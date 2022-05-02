import { useSelector ,useDispatch} from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { DeleteBlog,UpdateBlog} from '../../Action/BlogAction';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import ReadMoreAndLess from 'react-read-more-less';
export default function Blog_view()
{
    let history = useHistory();
    const dispatch = useDispatch()
    const [delid, setdelid] = useState("");
    const blogSelector = useSelector((state) => state.blogs.blogs)
    console.log("blogSelector ", blogSelector)
    const addanother = () => {
        history.push("/");
      }
    const del = () => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to delete.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => dispatch(DeleteBlog(delid))
            },
            {
              label: 'No'
            }
          ]
        });
      };
    
    return(
                <div className="card-deck">
                  <div className="card">
                    <div className="card-body">
                    {blogSelector.map(blogs => (<>
                      <p className="card-text" onClick={()=>setdelid(blogs.id)}>Blog Id : {blogs.id}</p>
                      <h5 className="card-title">Blog Title : {blogs.Title}</h5>
                      <ReadMoreAndLess
                          className="read-more-content"
                          charLimit={20}
                          readMoreText="Read more"
                          readLessText="Read less"
                      >
                          {blogs.Description}
                      </ReadMoreAndLess>
                      <br></br>
                      <br></br>
        
                    <button
                      type="button"
                      className="btn btn-sm btn-dark mx-3"
                       onClick={del}
                       
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
                  <br></br>
                  <button type="button" 
                  class="btn btn-primary btn-lg "
                  onClick={addanother}
                  >Add Another Blog</button>
                  <br></br>
                  <br></br>
                  <p style={{color:"red"}}> Note : Kindly select id you want delete.</p>
                </div>
              );
}
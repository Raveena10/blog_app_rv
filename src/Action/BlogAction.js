export const AddBlog = (blogdata) => (
    console.log("addblogaction", blogdata),
    {
        type: "CREATE_BLOG",
        payload: blogdata,
    }
    );
export const getBlog = (getdata) => (
        console.log("getblogAction", getdata),
        {
            type: "GET_BLOG",
            payload: getdata,
        
        }
    );
    
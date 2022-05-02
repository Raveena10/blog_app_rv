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
            type: "READ_BLOG",
            payload: getdata,
        
        }
    );
export const DeleteBlog = (deletedata) => (
        console.log("DeleteblogAction", deletedata),
        {
            type: "DELETE_BLOG",
            payload: deletedata,
        
        }
    );
export const UpdateBlog = (updatedata) => (
        console.log("updateblogAction", updatedata),
        {
            type: "UPDATE_BLOG",
            payload: updatedata,
        
        }
    );

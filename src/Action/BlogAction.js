export const AddBlog = (blogdata) => (
    console.log("addblogaction", blogdata),
    {
        type: "CREATE_BLOG",
        payload: blogdata,
    }
    );
    
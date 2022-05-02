const initialstate={
    blogs:[
        {
            id:1,
            Title:"test",
            Description:"xyz"
        }
    ]

}

export const BlogReducer = (state=initialstate,action) => 
{
    switch (action.type) {
        case "CREATE_BLOG":
          {
            console.log("addReducer",action.payload)
            return {
              ...state,
              blogs: [action.payload, ...state.blogs],
            };
          }
          case "READ_BLOG":
            {
                console.log("getblog", action.payload);
                let arr = state.blogs.filter(
                  (blog) => blog.id == action.payload
                );
        
                arr = arr.values();
                
                for (let val of arr) {
                  arr = val;
                }
                console.log("getReducer", arr);
                return {
                  ...state,
                  blog: arr,
                };
            }
            case "DELETE_BLOG":
            {
              console.log("deleteReducer", action)
              console.log("deletestate", state)
              return {
                ...state,
                blogs: state.blogs.filter(
                  (blog) => blog.id != action.payload
                ),
              };

            }
            case "UPDATE_BLOG": {
              console.log(action.payload);
              return {
                ...state,
                blogs: state.blogs.map((blog) =>
                blog.id == action.payload.id ? action.payload : blog
                ),
              };
            }
           
    
          
          default:
      return state;
                                                                                                                                               
  }                                                                    
}
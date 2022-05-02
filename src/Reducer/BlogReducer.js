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
          default:
      return state;
                                                                                                                                               
  }                                                                    
}
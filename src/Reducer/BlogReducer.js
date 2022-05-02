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
          default:
      return state;
                                                                                                                                               
  }                                                                    
}
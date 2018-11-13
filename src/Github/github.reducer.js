const githubReducer = (
    state = { 
     username: ''
  }, action) => {
  switch(action.type) {
    case 'GITHUB_GET':
      return {
        ...state,
        githubUser: action.payload
      }
    case 'GITHUB_ERROR':
      console.log("IS THIS WORKING");
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}

export default githubReducer;
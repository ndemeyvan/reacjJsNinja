//ceci sont le svaleur initial
const initState = {
    name:"Ndeme yvan",
    posts: [{
            id: 1,
            title: "Bonjour c'est ndeme",
            body: "In publishing of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        },
        {
            id: 2,
            title: "Bonjour c'est Akah",
            body: "In publishing of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        }, {
            id: 3,
            title: "B onjour c'est Nde",
            body: "In publishing of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        }
    ]
}
//ceci est la fonction reducer voulu par la fonction createStore();
const rootReducer = (state = initState, action) => {
    console.log('This is the action : ', action);
    console.log('This is the actual state : ', state);
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id != post.id;
        })
        return {
            ...state,
            posts: newPosts,
        }
    } else if (action.type === 'CREATE_POST') {
        //do something
    }
    return state;
}
//ne pas oublie de l'importer
export default rootReducer;
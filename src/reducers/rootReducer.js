//ceci sont le svaleur initial
const initState = {
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
            title: "Bonjour c'est Nde",
            body: "In publishing of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
        }
    ]
}
//ceci est la fonction reducer voulu par la fonction createStore();
const rootReducer = (state = initState, action) => {
    return state;
}
//ne pas oublie de l'importer
export default rootReducer;
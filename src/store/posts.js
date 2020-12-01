const posts = {
    state: () => ({
        counter: 83,
        posts: [
            {
                id: 1,
                title: 'Post One',
                body: 'This is the body of post one'
            },
            {
                id: 2,
                title: 'Post Two',
                body: 'This is the body of post two'
            },
            {
                id: 3,
                title: 'Post Three',
                body: 'This is the body of post three'
            },
            {
                id: 4,
                title: 'Post Four',
                body: 'This is the body of post four'
            },
            {
                id: 5,
                title: 'Post Five',
                body: 'This is the body of post five'
            },
            {
                id: 6,
                title: 'Post Six',
                body: 'This is the body of post six'
            },
        ]
    }),
    mutations: {

    },
    actions: {

    },
    getters: {
        getAllPosts(state) {
            return state.posts
        },
        getPostById: (state) => (id) => {
            return state.posts.filter(post => {
                return post.id == id
            })[0]
        },
        getCounter(state) {
            return state.counter
        }
    }
}

module.exports = posts
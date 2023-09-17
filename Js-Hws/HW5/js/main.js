async function fetchUsersAndPosts() {
    try {
        const [usersResponse, postsResponse] = await Promise.all([
            fetch('https://ajax.test-danit.com/api/json/users'),
            fetch('https://ajax.test-danit.com/api/json/posts')
        ]);

        if (!usersResponse.ok || !postsResponse.ok) {
            throw new Error('Failed to fetch users and posts');
        }

        const [users, posts] = await Promise.all([
            usersResponse.json(),
            postsResponse.json()
        ]);

        return { users, posts };
    } catch (error) {
        console.error(error);
    }
}

async function displayPosts() {
    const { users, posts } = await fetchUsersAndPosts();
    const main = document.getElementById('main-container');

    for (const post of posts) {
        const user = users.find(user => user.id === post.userId);
        if (!user) continue;

        const card = new Card(post, user);
        main.append(card.createCardElements());
    }
}

displayPosts();

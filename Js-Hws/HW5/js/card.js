class Card {
  constructor(post, user) {
    this.post = post;
    this.user = user;
  }

  createCardElements() {
    const card = document.createElement("div");
    card.classList.add("card");

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = "×";
    deleteButton.addEventListener("click", () => this.deletePost(card));

    const container = document.createElement("div");
    container.classList.add("container");

    const title = document.createElement("h4");
    title.innerHTML = `<b>${this.post.title}</b>`;

    const text = document.createElement("p");
    text.innerHTML = this.post.body;

    const userInfo = document.createElement("p");
    userInfo.innerHTML = `<i>Posted by ${this.user.name} mail:${this.user.email}</i>`;

    container.append(deleteButton);
    container.append(title);
    container.append(text);
    container.append(userInfo);

    card.append(container);

    return card;
  }

  async deletePost(card) {
    try {
      const response = await fetch(
        `https://ajax.test-danit.com/api/json/posts/${this.post.id}`,
        { method: "DELETE" }
        );
      if (response.ok) {
        card.remove();
      } else {
        throw new Error(`Failed to delete post with id ${this.post.id}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

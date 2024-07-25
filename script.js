const createPostBtn = document.getElementById('createPostBtn');
const postsContainer = document.getElementById('postsContainer');

createPostBtn.addEventListener('click', () => {
  const postTitle = prompt('Enter the title of your post:');
  const postContent = prompt('Enter the content of your post:');

  if (postTitle && postContent) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.style.backgroundColor = '#f2f2f2';

    let upvotes = 0;
    let replies = 0;

    postElement.innerHTML = `
            <h3 style="color: #007bff;">${postTitle}</h3>
            <p style="color: #333;">${postContent}</p>
            <div>
                <button class="upvote-btn">Upvote</button>
                <span class="upvote-count">Upvotes: ${upvotes}</span>
                <button class="reply-btn">Reply</button>
                <span class="reply-count">Replies: ${replies}</span>
            </div>
            <div class="replies"></div>
        `;

    postsContainer.appendChild(postElement);

    const upvoteBtn = postElement.querySelector('.upvote-btn');
    const replyBtn = postElement.querySelector('.reply-btn');
    const repliesDiv = postElement.querySelector('.replies');

    upvoteBtn.addEventListener('click', () => {
      upvotes++;
      postElement.querySelector('.upvote-count').textContent = `Upvotes: ${upvotes}`;
    });

    replyBtn.addEventListener('click', () => {
      const replyTitle = prompt('Enter the title of your reply:');
      const replyContent = prompt('Enter the content of your reply:');

      if (replyTitle && replyContent) {
        const replyElement = document.createElement('div');
        replyElement.classList.add('reply');
        replyElement.innerHTML = `
                    <h4 style="color: #007bff;">${replyTitle}</h4>
                                        <p style="color: #333;">${replyContent}</p>
                `;

        replies++;
        postElement.querySelector('.reply-count').textContent = `Replies: ${replies}`;
        repliesDiv.appendChild(replyElement);
      } else {
        alert('Please fill in both the title and content to reply.');
      }
    });
  } else {
    alert('Please fill in both the title and content to create a post.');
  }
});

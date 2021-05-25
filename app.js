// adding comment 
const commentForm = document.querySelector('#commentForm');
const commentsContainer = document.querySelector('#comments');
commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = commentForm.elements.name;
    const commentInput = commentForm.elements.comment;
    addComment(nameInput.value, commentInput.value)
    nameInput.value = '';
    commentInput.value = '';
});

const addComment = (name, comment) => {
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(name)
    newComment.append(bTag);
    newComment.append(`- ${comment}`)
    commentsContainer.append(newComment);
}

commentsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})

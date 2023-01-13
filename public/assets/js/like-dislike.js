let like_el = document.querySelector('.like');
let dislike_el = document.querySelector('.dislike');
let likeCounter = document.querySelector('#l-counter');
let dislikeCounter = document.querySelector('#d-counter');

let likeBefore = false;
let dislikeBefore = false;

if (user_like === -1) {
    dislikeBefore = true;
} else if (user_like === 1) {
    likeBefore = true;
}

let likes = like_count;
let dislikes = dislike_count;
let is_fetching = false;

function sendLike(liked) {
    is_fetching = true;

    const formdata = new FormData();
    formdata.append("blog_id", blog_id);
    formdata.append("do_like", liked);

    const requestOptions = {
        method: 'POST',
        body: formdata,
    };

    fetch("/likes/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
        .finally(() => {
            is_fetching = false;
        });

}

function sendDislike(disliked) {
    is_fetching = true;

    const formdata = new FormData();
    formdata.append("blog_id", blog_id);
    formdata.append("do_dislike", disliked);

    const requestOptions = {
        method: 'POST',
        body: formdata,
    };

    fetch("/dislikes/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
        .finally(() => {
            is_fetching = false;
        });

}

if (user_is_authenticated) {
    like_el.addEventListener('click', evt => {
        if (is_fetching) return;
        if (likeBefore === false && dislikeBefore === false) {
            likeBefore = true;
            likeCounter.textContent = String(++likes);
            like_el.classList.add('active');
            sendLike(true);

        } else if (likeBefore === false && dislikeBefore === true) {
            likeBefore = true;
            dislikeBefore = false;
            dislikeCounter.textContent = String(--dislikes);
            likeCounter.textContent = String(++likes);
            dislike_el.classList.remove('active');
            like_el.classList.add('active');
            sendDislike(false);
            sendLike(true);

        } else if (likeBefore === true) {
            likeBefore = false;
            likeCounter.textContent = String(--likes);
            like_el.classList.remove('active');
            sendLike(false);
        }
    })

    dislike_el.addEventListener('click', evt => {
        if (is_fetching) return;
        if (likeBefore === false && dislikeBefore === false) {
            dislikeBefore = true;
            dislikeCounter.textContent = String(++dislikes);
            dislike_el.classList.add('active');
            sendDislike(true);

        } else if (likeBefore === true && dislikeBefore === false) {
            dislikeBefore = true;
            likeBefore = false;
            likeCounter.textContent = String(--likes);
            dislikeCounter.textContent = String(++dislikes);
            like_el.classList.remove('active');
            dislike_el.classList.add('active');
            sendLike(false);
            sendDislike(true);

        } else if (dislikeBefore === true) {
            dislikeBefore = false;
            dislikeCounter.textContent = String(--dislikes);
            dislike_el.classList.remove('active');
            sendDislike(false);
        }
    })
} else {
    const $_like_el = $(like_el);
    const $_dislike_el = $(dislike_el);

    $_like_el.attr('title', 'You need to log in.');
    $_dislike_el.attr('title', 'You need to log in.');

    $_like_el.tooltip();
    $_dislike_el.tooltip();
}
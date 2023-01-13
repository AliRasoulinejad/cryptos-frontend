"use strict";

window.addEventListener('load', function () {
    let input = document.querySelector('#input');
    let submit = document.querySelector('#submit');

    let comment_wrapper = document.querySelector('#list_comment');

    let popup = document.querySelector('.popup');
    let popup_el = document.querySelector('.popup-wrapper');
    let popupCloses = document.querySelectorAll('.popup-close');
    let popup_title = document.querySelector('#popup_title');
    let popup_message = document.querySelector('#popup_message');
    let domParser = new DOMParser();

    function openPopup(title, message) {
        popup_title.textContent = title;
        popup_message.textContent = message;

        popup.classList.add('show');
        popup_el.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    popupCloses.forEach(popupClose => {
        popupClose.addEventListener('click', env => {
            popup.classList.remove('show');
            popup_el.classList.remove('show');
            document.body.style.overflow = 'auto';
        })
    })


    submit.addEventListener('click', evt => {
        const val = input.value;

        if (val?.length < 2) {
            alert('comment length is too short !');
            return;
        }

        sendComment(val)

        input.value = ''
    });

    function sendComment(str) {
        const formdata = new FormData();
        formdata.append("text", str);
        formdata.append("blog_id", blog_id);

        const requestOptions = {
            method: 'POST',
            body: formdata,
        };

        fetch("/comments/", requestOptions)
            .then(response => response.json())
            .then(response => {
                if (response.status === 201) {
                    const date = new Date()
                    const parsed_dom = domParser.parseFromString(`
                                            <div class="commented-section mt-2 mb-3">
                                            <div class="d-flex flex-row align-items-center commented-user">
                                                <h5 class="mr-2" id="user">${user_name}</h5>
                                                <span class="dot mb-1"></span>
                                                <span class="mb-1 ml-2">${date.toDateString()}, ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span>
                                            </div>
                                            <div class="comment-text-sm"><span id="details">${str}</span>
                                            </div>
                                        </div>`, 'text/html')

                    const el = parsed_dom.body.firstChild;
                    comment_wrapper.append(el);

                } else {
                    throw 'not successful';
                }
            })
            .catch(() => {
                openPopup('Error!', 'Your comment has not submitted. Try again.');
            });
    }


    $("span[created_at]").each(function () {
        const el = $(this);
        const date = new Date(parseFloat(el.attr('created_at')) * 1000);
        el.text(`${date.toDateString()}, ${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`);
    })
});
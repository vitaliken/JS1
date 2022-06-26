function forms() {
//FORMS
    //--------------обычный формат---------------------
    // const forms = document.querySelectorAll('form');
    // const message = {
    //     loading: 'Загрузка',
    //     success: 'Спасибо! Скоро мы с вами свяжемся',
    //     failure: 'Что-то пошло не так...',
    // };

    // forms.forEach(item => {
    //     postData(item);
    // });

    // function postData(form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         const statusMessage = document.createElement('div');
    //         statusMessage.classList.add('status');
    //         statusMessage.textContent = message.loading;
    //         form.append(statusMessage);

    //         const r = new XMLHttpRequest();
    //         r.open('POST', 'server.php');

    //         //заголовок не надо ставить, т.к. он ставится автоматически. Иначе ошибка
    //         // r.setRequestHeader('Content-type', 'multipart/form-data');
    //         const formData = new FormData(form);

    //         r.send(formData);

    //         r.addEventListener('load', () => {
    //             if (r.status === 200) {
    //                 console.log(r.response);
    //                 statusMessage.textContent = message.success;
    //                 //очистка формы:
    //                 form.reset();
    //                 //очистка уведомления:
    //                 setTimeout(() => {
    //                     statusMessage.remove();
    //                 }, 2000);
    //             } else {
    //                 statusMessage.textContent = message.failure;
    //             }
    //         });
    //     });
    // };
    //--------------обычный формат---------------------

    //--------------JSON формат---------------------
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url,data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            // const r = new XMLHttpRequest();
            // r.open('POST', 'server.php');

            const formData = new FormData(form);

            //конвертация из formData в Object
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
            })

            // r.addEventListener('load', () => {
            //     if (r.status === 200) {
            //         console.log(r.response);
            //         showThanksModal(message.success);
            //         //очистка формы:
            //         form.reset();
            //         //очистка уведомления:
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    };
    //--------------JSON формат---------------------
    
    //спиннер
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal();

        const thanlksModal = document.createElement('div');
        thanlksModal.classList.add('modal__dialog');
        thanlksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanlksModal);
        setTimeout(() => {
            thanlksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000)
    };





    // //FETCH запросы
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: "POST",
    //     body: JSON.stringify({name: 'Alex'}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json))




    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
};

module.exports = forms;
const bootScreen =
    document.getElementById('bootScreen');

const sidebarLinks =
    document.querySelectorAll('.sidebar__link');

function openBootAnimation() {

    bootScreen.classList.remove(
        'boot-open'
    );

    bootScreen.classList.remove(
        'boot-hide'
    );

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            bootScreen.classList.add(
                'boot-open'
            );

            setTimeout(() => {

    bootScreen.classList.add('boot-hide');

            setTimeout(() => {

                bootScreen.style.display = 'none';

                }, 900);

            }, 1800);

        });
    });
}

function closeBootAnimation(callback) {

    bootScreen.classList.remove(
        'boot-hide'
    );

    bootScreen.classList.remove(
        'boot-open'
    );

    setTimeout(() => {

        callback();

    }, 1600);
}

window.addEventListener('load', () => {

    openBootAnimation();
});

sidebarLinks.forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target =
            this.getAttribute('href');

        closeBootAnimation(() => {

            window.location.href = target;
        });
    });
});
const postDiv = document.querySelector(".swiper-wrapper")
const loading = document.querySelector('.load');

document.addEventListener("DOMContentLoaded", () => {
    loadDataNew();
});
async function load_fromPlaceHolder_new() {
    //open the request 
    let response = await fetch('https://picsum.photos/v2/list?page=2&limit=20');
    let data = await response.json();
    return data;
}
function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `
                <div class="swiper-slide" style="background-image: url(${post.download_url}); background-size: cover;">
                </div>
`;
            });

            loading.classList.remove('active')
            postDiv.innerHTML = output;

            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        })
        .catch(function(err) {
            console.log(err);
        });
}

const postDiv1 = document.querySelector(".swiper-wrapper")
const loader = document.querySelector('.load');

document.addEventListener("DOMContentLoaded", () => {
    loadDataNew();
});
async function load_fromPlaceHolder_new() {
    //open the request 
    let response = await fetch('https://picsum.photos/v2/list');
    let data = await response.json();
    return data;
}
function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `
                <div class="swiper-slide" style="background-image: url(${post.download_url}); background-size: cover; background-repeat:no-repeat;">
                </div>
`;
            });
            loader.classList.remove('active')
            postDiv1.innerHTML = output;

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

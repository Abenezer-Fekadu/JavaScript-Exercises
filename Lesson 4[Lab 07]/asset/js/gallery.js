const postDiv1 = document.querySelector('.swiper-wrapper'); 

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
                <div class="swiper-slide">
                <img data-src="${post.download_ulr}" class="swiper-lazy">
                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
`;
            });
            console.log(output);
            postDiv1.innerHTML = output;
            console.log(postDiv1);
        })
        .catch(function(err) {
            console.log(err);
        });
}

  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000);
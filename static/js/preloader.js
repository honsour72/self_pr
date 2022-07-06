let
    images              = document.images,
    images_total_count  = images.length,
    images_loaded_count = 0,
    preloader           = document.getElementById('preloader'),
    perc_display        = document.getElementById('percents'),
    non_scrolled_body   = document.querySelector('.none__body');

//На случай пока на сайте нет изображений
if( images_total_count == 0 ) {
    images_total_count = 1;
}

for(let i = 0; i < images_total_count; i++) {
    image_clone         = new Image();
    image_clone.onload  = image_loaded;
    image_clone.onerror = image_loaded;
    if( images.length == 0) {
        image_clone.src = 0;
    } else {
        image_clone.src = images[i].src;
    }
}

function image_loaded() {
    images_loaded_count++;
    perc_display.innerHTML = (( 100 / images_total_count ) * images_loaded_count) << 0;

    if( images_loaded_count >= images_total_count ) {
        setTimeout(function() {
            if( !preloader.classList.contains('preloader__done') ) {
                preloader.classList.add('preloader__done');
                non_scrolled_body.classList.add('body__done');
            }
        }, 1000);
    }
}
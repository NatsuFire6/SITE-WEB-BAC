import "/javascript_JS//jeuvascript.js";
import "/javascript_JS/jquery.mousewheel.js";
import "<?php echo get_template_directory_uri(); ?>/javascript_JS/jquery.mousewheel.min.js";
import "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
import "http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js?ver=1.3.2";

(document).ready(function() {
    ("scroller").mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});

const scrollecontainer = document.querySelector('nav');
scrollecontainer.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    scrollecontainer.scrollLeft += evt.deltaY;
});



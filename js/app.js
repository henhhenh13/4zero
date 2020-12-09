document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#splide', {
    type: 'loop',
    perPage: 4,
    fixedWidth: '23.8%',
    flickMaxPages: 4,
    updateOnMove: true,
    breakpoints: {
		850: {
            perPage: 3,
            fixedWidth: '32%',  
            flickMaxPages: 2,
        },
        550: {
            perPage: 2,
            fixedWidth: '47.9%',  
            flickMaxPages: 1,
        },
	}
}).mount();

new Splide( '#splide-1' , {
    type: 'loop',
    perPage: 4,
    fixedWidth: '23.8%',
    flickMaxPages: 4,
    updateOnMove: true,
    breakpoints: {
		850: {
            perPage: 3,
            fixedWidth: '32%',  
            flickMaxPages: 2,
        },
        550: {
            perPage: 2,
            fixedWidth: '47.9%',  
            flickMaxPages: 1,
        },
	}
}).mount();

new Splide( '#splide-2' , {
    type: 'loop',
    perPage: 4,
    fixedWidth: '23.8%',
    flickMaxPages: 4,
    updateOnMove: true,
    breakpoints: {
		850: {
            perPage: 3,
            fixedWidth: '32%', 
            flickMaxPages: 2, 
        },
        550: {
            perPage: 2,
            fixedWidth: '47.9%',  
            flickMaxPages: 1,
        },
	}
}).mount();

new Splide( '#splide-3' , {
    type: 'loop',
    perPage: 4,
    fixedWidth: '23.8%',
    flickMaxPages: 4,
    updateOnMove: true,
    breakpoints: {
		850: {
            perPage: 3,
            fixedWidth: '32%',  
            flickMaxPages: 2,
        },
        550: {
            perPage: 2,
            fixedWidth: '47.9%', 
            flickMaxPages: 1, 
        },
	}
}).mount();

new Splide( '#splide-4', {
	type    : 'loop',
    perPage : 2,
    pagination : false,
    speed: 600,
    rewindSpeed: 0,
    classes: {
	arrow : 'splide__arrow news-arrow',
      },
      breakpoints: {
		850: {
            perPage: 1,
            fixedWidth: '100%',
		},
	}
} ).mount();

} );

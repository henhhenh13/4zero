document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#splide' , {
    type: 'loop',
    perPage: 4,
    fixedWidth: '23.8%',
    flickMaxPages: 4,
    updateOnMove: true,
    breakpoints: {
		850: {
            perPage: 3,
            fixedWidth: '32%',  
        },
        550: {
            perPage: 2,
            fixedWidth: '47.9%',  
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
        },
        550: {
            perPage: 2,
            fixedWidth: '47.9%',  
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
        },
        550: {
            perPage: 2,
            fixedWidth: '47.9%',  
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
        },
        550: {
            perPage: 2,
            fixedWidth: '47.9%',  
        },
	}
}).mount();

} );

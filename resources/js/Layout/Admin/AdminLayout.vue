<template>
    <div>
        <MobileHeader/>
        <div class="kt-grid kt-grid--hor kt-grid--root">
	    	<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                <button class="kt-aside-close " id="kt_aside_close_btn"><i class="la la-close"></i></button>
                <Sidenav/> 
                <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                    <Header/> 
                    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
                        <SubHeader/> 
                        <slot/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>

import MobileHeader from './Partials/MobileHeader.vue';
import Sidenav from './Partials/Sidenav.vue';
import Header from './Partials/Header.vue';
import Footer from './Partials/Footer.vue';
import SubHeader from './Partials/SubHeader.vue';
import "/public/assets/vendors/general/jquery/dist/jquery.js";
// import "/public/assets/vendors/general/popper.js/dist/umd/popper.js";
import "/public/assets/vendors/general/bootstrap/dist/js/bootstrap.min.js";
// import "/public/assets/vendors/general/js-cookie/src/js.cookie.js";
// import "/public/assets/vendors/general/moment/min/moment.min.js";
// import "/public/assets/vendors/general/tooltip.js/dist/umd/tooltip.min.js";
// import "/public/assets/vendors/general/perfect-scrollbar/dist/perfect-scrollbar.js";
// import "/public/assets/vendors/general/sticky-js/dist/sticky.min.js";
// import "/public/assets/vendors/general/wnumb/wNumb.js";

// import "/public/assets/demo/demo3/base/scripts.bundle.js" 
// import "/public/assets/vendors/custom/fullcalendar/fullcalendar.bundle.js"
// import "/public/assets/vendors/custom/gmaps/gmaps.js"
import "/public/assets/app/custom/general/dashboard.js"
// import "/public/assets/vendors/general/chart.js/dist/Chart.bundle.js"
// import "/public/assets/app/bundle/app.bundle.js"

import "https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js" 
		 
    WebFont.load({
        google: {
            "families": ["Poppins:300,400,500,600,700", "Roboto:300,400,500,600,700"]
        },
        active: function() {
            sessionStorage.fonts = true;
        }
    });
		 

</script>

<style>

    @import "/public/assets/vendors/general/perfect-scrollbar/css/perfect-scrollbar.css";
    @import "/public/assets/demo/demo3/base/style.bundle.css";
    @import "/public/assets/vendors/general/animate.css/animate.css";

</style>
<template>
    <div class="kt-grid kt-grid--ver kt-grid--root" style="height: 100vh;">
			<div class="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v2 kt-login--signin" id="kt_login">
				<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style="background-image: url(/assets/media//bg/bg-1.jpg);">
					<div class="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
						<div class="kt-login__container">
							<div class="kt-login__logo">
								<a href="#">
									<img src="/public/assets/media/logos/logo-mini-2-md.png">
								</a>
							</div>
                            <SignIn/>
                            <SignUp/>
                            <ForgotPassword/>
                            <div class="kt-login__account">
                                <span class="kt-login__account-msg">
                                    Don't have an account yet ?
                                </span>&nbsp;&nbsp;
                                <a href="javascript:;" id="kt_login_signup" class="kt-link kt-link--light kt-login__account-link">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</template>

<script setup>
import SignIn from '../../Pages/Admin/Auth/SignIn.vue';
import SignUp from '../../Pages/Admin/Auth/SignUp.vue';
import ForgotPassword from '../../Pages/Admin/Auth/ForgotPassword.vue';
 

import 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
WebFont.load({
    google: {
        "families": ["Poppins:300,400,500,600,700", "Roboto:300,400,500,600,700"]
    },
    active: function() {
        sessionStorage.fonts = true;
    }
});

import '/public/assets/vendors/general/jquery/dist/jquery.js';
// import '/public/assets/vendors/general/popper.js/dist/umd/popper.js';
import '/public/assets/vendors/general/bootstrap/dist/js/bootstrap.min.js';
import '/public/assets/vendors/general/js-cookie/src/js.cookie.js';
// import '/public/assets/vendors/general/moment/min/moment.min.js';
// import '/public/assets/vendors/general/tooltip.js/dist/umd/tooltip.min.js';
// import '/public/assets/vendors/general/perfect-scrollbar/dist/perfect-scrollbar.js';
// import '/public/assets/vendors/general/sticky-js/dist/sticky.min.js';
import '/public/assets/vendors/general/wnumb/wNumb.js';
// import '/public/assets/app/custom/login/login-general.js';


</script>

<style>
@import '/public/assets/app/custom/login/login-v2.default.css';
@import '/public/assets/demo/default/base/style.bundle.css';
@import '/public/assets/vendors/general/perfect-scrollbar/css/perfect-scrollbar.css';
</style>
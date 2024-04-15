<template>
    <div class="kt-login__signup">
        <div class="kt-login__head">
            <h3 class="kt-login__title">Sign Up</h3>
            <div class="kt-login__desc">Enter your details to create your account:</div>
        </div>
        <form class="kt-login__form kt-form" action="">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Fullname" name="fullname">
            </div>
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Email" name="email" autocomplete="off">
            </div>
            <div class="input-group">
                <input class="form-control" type="password" placeholder="Password" name="password">
            </div>
            <div class="input-group">
                <input class="form-control" type="password" placeholder="Confirm Password" name="rpassword">
            </div>
            <div class="row kt-login__extra">
                <div class="col kt-align-left">
                    <label class="kt-checkbox">
                        <input type="checkbox" name="agree">I Agree the <a href="#" class="kt-link kt-login__link kt-font-bold">terms and conditions</a>.
                        <span></span>
                    </label>
                    <span class="form-text text-muted"></span>
                </div>
            </div>
            <div class="kt-login__actions">
                <button id="kt_login_signup_submit" class="btn btn-pill kt-login__btn-primary">Sign Up</button>&nbsp;&nbsp;
                <button id="kt_login_signup_cancel" class="btn btn-pill kt-login__btn-secondary">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script setup>
 

</script>

<style scoped>

</style>
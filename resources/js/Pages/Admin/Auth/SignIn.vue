<template>
    <div class="kt-login__signin">
        <div class="kt-login__head">
            <h3 class="kt-login__title">Sign In To Admin</h3>
        </div>
        <form class="kt-form" action="">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Email" name="email" autocomplete="off">
            </div>
            <div class="input-group">
                <input class="form-control" type="password" placeholder="Password" name="password">
            </div>
            <div class="row kt-login__extra">
                <div class="col">
                    <label class="kt-checkbox">
                        <input type="checkbox" name="remember"> Remember me
                        <span></span>
                    </label>
                </div>
                <div class="col kt-align-right">
                    <Link :href="route('admin.forgot')" id="kt_login_forgot" class="kt-link kt-login__link">Forget Password ?</Link>
                </div>
            </div>
            <div class="kt-login__actions">
                <button id="kt_login_signin_submit"  class="btn btn-pill kt-login__btn-primary">Sign In</button>
            </div>
        </form>
    </div>
</template>

<script setup>
 
</script>

<style scoped>

</style>
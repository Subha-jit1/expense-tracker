<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/hello', function () {
    return view('welcome');
});

Route::name('admin.')->prefix('admin')->group(function () {
    
    Route::get('/signin', function () {
        return Inertia::render('Admin/Auth/SignIn');
    })->name('signin');    

    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    Route::get('/signup', function () {
        return Inertia::render('Admin/Auth/SignUp');
    })->name('signup');

    Route::get('/forgot-password', function () {
        return Inertia::render('Admin/Auth/ForgotPassword');
    })->name('forgot');
    
});




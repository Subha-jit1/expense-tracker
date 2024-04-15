<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/hello', function () {
    return view('welcome');
});

Route::name('admin.')->prefix('admin')->group(function () {
    
    Route::get('/login', function () {
        return Inertia::render('Admin/Auth/SignIn');
    })->name('signin');    

    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Auth/SignUp');
    })->name('dashboard');
    
});




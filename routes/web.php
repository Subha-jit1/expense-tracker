<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/hello', function () {
    return Inertia::render('Admin/Dashboard');
});
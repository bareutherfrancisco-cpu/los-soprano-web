<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/la-serie', fn () => Inertia::render('Series'))->name('series');
Route::get('/la-serie/sinopsis', fn () => Inertia::render('Synopsis'))->name('series.synopsis');
Route::get('/la-serie/temporadas', fn () => Inertia::render('Seasons'))->name('series.seasons');
Route::get('/la-serie/legado', fn () => Inertia::render('Legacy'))->name('series.legacy');
Route::get('/personajes', fn () => Inertia::render('Characters'))->name('characters');
Route::get('/galeria', fn () => Inertia::render('Gallery'))->name('gallery');
Route::get('/multimedia', fn () => Inertia::render('Multimedia'))->name('multimedia');
Route::get('/contacto', fn () => Inertia::render('Contact'))->name('contact');

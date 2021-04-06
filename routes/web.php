<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';


Route::group(['prefix' => 'intranet'], function () {
    Route::group(['middleware' => 'admin.user'], function () {
        Route::get('/users/suplantar/{id}', 'UserController@suplantar')->name('intranet.user.suplantar');
        Route::any('/cms/imagesave', 'Admin\VoyagerController@saveImage')->name('intranet.contentbuilder.saveimage');
        Route::get('/ayuda', function () {
            return view('vendor.voyager.ayuda.index');
        })->name('ayuda');
        Route::get('respuestas/{id_form}/{id_user?}','FormularioController@mostrarRespuestas')->name('mostrarRespuestas');
        Route::post('delete-respuestas','FormularioController@eliminarInscrito')->name('eliminarInscrito');

        Route::get('inscritos/{id}','FormularioController@mostrarInscritos')->name('mostrarInscritos');
        Route::post('save-form-intranet','FormularioController@saveFormIntranet')->name('save.form.intranet');
        Route::put('update-form-intranet/{id}','FormularioController@updateFormIntranet')->name('update.form.intranet');

    });
    Voyager::routes();
});

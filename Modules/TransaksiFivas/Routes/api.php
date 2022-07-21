<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'jwt.verify'], function (){
    // Route::get('/transaksifivas', 'TransaksiFivasController@index');
    // Route::post('/transaksifivas', 'TransaksiFivasController@store');
    // Route::get('/transaksifivas/{id}/edit', 'TransaksiFivasController@edit');
    // Route::put('/transaksifivas/{id}', 'TransaksiFivasController@update');
    // Route::delete('/transaksifivas/{id}', 'TransaksiFivasController@destroy');

    Route::resource('transaksifivas', 'TransaksiFivasController');
});

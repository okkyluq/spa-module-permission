<?php

use Illuminate\Http\Request;

Route::group(['middleware' => 'jwt.verify'], function (){
    Route::get('/importmygrapari', 'ImportMyGrapariController@index');

    Route::post('/importmygrapari/import', 'ImportMyGrapariController@import');
});

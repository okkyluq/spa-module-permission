<?php

Route::prefix('transaksifivas')->group(function() {
    Route::get('/', 'TransaksiFivasController@index');
});

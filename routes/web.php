<?php

use Illuminate\Support\Facades\Route;
// use Spatie\Permission\Models\Role;

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
    return view('index');
});


Route::any('/{slug}', function () {
    return view('index');
});

// Route::get('/tes', [App\Http\Controllers\DashboardController::class, 'tes']);

// Route::get('/tes', function () {
//     $role = Role::find(2);
//     $role->givePermissionTo('view_data_master');
//     $role->givePermissionTo('view_data_menu');
//     $role->givePermissionTo('create_data_menu');
//     $role->givePermissionTo('edit_data_menu');
//     $role->givePermissionTo('delete_data_menu');
//     $role->givePermissionTo('view_konfigurasi');
//     $role->givePermissionTo('view_otoritas_menu');
//     $role->givePermissionTo('create_otoritas_menu');
//     $role->givePermissionTo('edit_otoritas_menu');
//     $role->givePermissionTo('delete_otoritas_menu');
//     $role->givePermissionTo('view_data_anjing');

//     dd('ok');
// });

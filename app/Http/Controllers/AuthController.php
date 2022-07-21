<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login', 'register']]);
    // }

    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');
    	try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Username dan Password Salah'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => $e], 500);
        }

        $user = auth()->user();


        return response()->json([
            'token' => $token,
            'user' => JWTAuth::user(),
            'permision' => Auth::user()->getAllPermissions()->pluck('name')
        ]);

    }

    public function logout(Request $request)
    {
        if(JWTAuth::user()){
            JWTAuth::parseToken()->invalidate(true);
            return response()->json([
                'message' => 'Berhasil Logged out',
            ]);
        } else {
            return response()->json([
                'message' => 'Gagal Logout',
            ], 500);
        }


    }


}

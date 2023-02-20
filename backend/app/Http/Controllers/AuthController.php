<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('api-token')->plainTextToken;
            return response()->json(['token' => $token], 200);
        } else {
            return response()->json(['error' => 'Invalid email or password'], 401);
        }
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout(Request $request)
    {
        return response()->json($request);
        // $user = Auth::user(); // Retrieve the authenticated user
        // $token = $user->tokens()->where('id', $tokenId)->first();

        // if ($token) {
        //     $token->revoke(); // Revoke the token
        // }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\SocialAccount;
use App\Models\User;
use Str;
use Auth;

class SocialAuthController extends Controller
{
    public function redirectToProvider($provider) {
        $url = Socialite::driver($provider)->stateless()->redirect()->getTargetUrl();
        
        return response()->json([
            "url" => $url
        ]);
    }

    public function handleProviderCallback($provider) {
        $user = Socialite::driver($provider)->stateless()->user();
        if(!$user->token) {
            dd('failed');
        }

        $appUser = User::whereEmail($user->email)->first();
        if(!$appUser){
            $newUser = User::create([
                'name' => $user->name,
                'password' => bcrypt(Str::random(7)),
                'email' => $user->email
            ]);

            $newsocialAccount = SocialAccount::create([
                'provider' => $provider,
                'provider_user_id' => $user->id,
                'username' => $user->user['login'],
                'user_id' => $newUser->id
            ]);
    
            if (!$token = $newUser->createToken('auth-token')) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
    
            return $this->respondWithToken($token);
            
        }else{

            $socialAccount = $appUser->social_accounts()->where('provider', $provider)->first();

            if(!$socialAccount){
                $newSocialAccount = SocialAccount::create([
                    'provider' => $provider,
                    'provider_user_id' => $user->id,
                    'username' => $user->user['login'],
                    'user_id' => $appUser->id
                ]);
            }

            if (!$token = $appUser->createToken('auth-token')) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
    
            return $this->respondWithToken($token);
        }
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token->plainTextToken,
            'token_type' => 'bearer'
        ]);
    }
}

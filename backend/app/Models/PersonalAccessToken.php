<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalAccessToken extends Model
{
    use HasFactory;

    protected $table = 'personal_access_tokens';

    protected $fillable = [
        'tokenable_type',
        'tokenable_id',
        'name',
        'token',
        'abilities',
        'last_used_at',
        'ip_address',
    ];

    protected $hidden = [
        'token',
    ];

    protected $casts = [
        'abilities' => 'array',
        'last_used_at' => 'datetime',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'expires_at',
    ];
}

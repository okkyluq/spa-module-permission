<?php

namespace App\Services;

use App\Exceptions\PermissionException;
use Illuminate\Support\Facades\Auth;

class PermissionService
{
    public function checkPermission($permission)
    {
        $has_permission = Auth::user()->hasPermissionTo($permission);
        if($has_permission){
            throw new PermissionException('You do not have the required authorization.');
        }
    }
}

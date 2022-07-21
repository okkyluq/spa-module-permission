<?php

namespace App\Services;

use App\Exceptions\PermissionException;
use Illuminate\Support\Facades\Auth;

class CheckPermission
{
    public function Check($permission)
    {
        $has_permission = Auth::user()->hasPermissionTo($permission);
        if(!$has_permission){
            throw new PermissionException();
        }
    }
}

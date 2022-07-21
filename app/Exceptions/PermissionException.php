<?php

namespace App\Exceptions;

use Exception;

class PermissionException extends Exception
{
    public function render()
    {
        return response()->json([
            'message' => 'Anda tidak memiliki hak akses untuk membuat data produk',
        ], 406);
    }
}

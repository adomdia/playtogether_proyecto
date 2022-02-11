<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Browsershot\Browsershot;

class TestController extends Controller
{
    public function browsershot(){

       // Browsershot::html('<h1>Hello world!!</h1>')->save(asset('PDFs/pdf_file.pdf'));
    }
}

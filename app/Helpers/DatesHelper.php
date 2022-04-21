<?php

namespace App\Helpers;

use Carbon\Carbon;
use DateTime;

class DatesHelper
{

    public static function toSpanishDate($date=null){
            //TODO => Terminar
        if($date){
            $diaSemana=Carbon::parse($date)->formatLocalized('%A');
            $mes=Carbon::parse($date)->formatLocalized('%B');
            $diaNum=Carbon::parse($date)->formatLocalized('%d');
            $anio = Carbon::parse($date)->formatLocalized('%Y');
        }else{
            $diaSemana=Carbon::now()->formatLocalized('%A');
            $mes=Carbon::now()->formatLocalized('%B');
            $diaNum=getdate()['mday'];
            $anio = Carbon::now()->formatLocalized('%Y');
        }
       dd($diaNum);

        return [$diaSemana,$mes,$diaNum,$anio];
    }
    public static function toEuFormat($date=null){
        //TODO => Terminar
        if($date){
            return Carbon::parse($date)->format('d-m-Y H:i:s');
        }else{
            return Carbon::now()->format('d-m-Y H:i:s');
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class adminExtraController extends Controller
{
    public function suplantar($id)
    {
        $this->permissionCheck();
        $target = $this->getTargetUser($id);

        $real_id = Auth::id();
        Auth::logout();
        Auth::loginUsingId($id);
        session()->put('real_id', $real_id);

        return redirect()->route('voyager.dashboard');
    }

    private function permissionCheck()
    {

        if (Auth::user()->role_id != 3){

            $this->detectadaAccionProhibida();
        }
    }

    /**
     * @param $id
     * @return User|User[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model
     */
    private function getTargetUser($id)
    {
        $target = User::findOrFail($id);

        if ($target->role_id == 3){
            $this->detectadaAccionProhibida();
        }


        return $target;
    }

    private function onlyAdminCanSetAdmin(Request $request)
    {

        if (Auth::user()->role_id != 3) //no es admin
        {
            if ($request->get('role_id') === 1){
                $this->detectadaAccionProhibida();
            }


            $array = $request->get('user_belongstomany_role_relationship');
            if (!empty($array))
                foreach ($array as $role) {
                    if ($role == 1){

                        $this->detectadaAccionProhibida();
                    }
                }

        }
    }

    private function detectadaAccionProhibida()
    {
        die('Detectada acción prohibida');

    }
}

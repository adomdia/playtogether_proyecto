<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Stripe;
use Stripe\Charge;
use Stripe\Customer;
use Stripe\Subscription;

class SubscriptionController extends Controller
{
    public function index()
    {
        $productos_prices= [];
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $products=Stripe\Product::all(['active'=>true]);
        foreach($products as $producto) {
            $prices=Stripe\Price::all(['product'=>$producto->id]);
            $productos_prices+=[$producto->name =>$prices['data'][0]->id];
        }
        $products=Stripe\Product::all(); //Trae todos los productos creados en Stripe y los muestra en la vista
        return view('teststripe',compact('productos_prices'));
    }

    public function crearProducto(Request $request){

        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $new_product=Stripe\Product::create([
            'name' => 'Producto test diario',
            'description' => 'Producto test diario'
        ]);
        Stripe\Price::create([
            'unit_amount' => 15*100,
            'currency' => 'eur',
            'recurring' => ['interval' => 'day'],
            'product' => $new_product->id, //Asocia al precio el producto creado
        ]);
    }

    public function orderPost(Request $request)
    {
        $user = auth()->user();
        $input = $request->all();
        $token =  $request->stripeToken;
        $paymentMethod = $request->paymentMethod;
        try {
            Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
            $products=Stripe\Product::all();
            if (is_null($user->stripe_id)) {
                $stripeCustomer = $user->createAsStripeCustomer();
            }
            Customer::createSource($user->stripe_id, ['source'=>$token]);
            $charge = Charge::create(array(
                'customer'      => $user->stripe_id,
                'amount'        => 10*100,
                'currency'      => 'eur',
                'description'   => 'Some testing description'
            ));
            $subscription=Subscription::create(array(
                    'customer' => $user->stripe_id,
                    'items' => [
                        ['price' =>  $input['plane']],
                    ])
            );

            return back()->with('success','Subscription is completed.');
        } catch (\Exception $e) {
            return back()->with('success',$e->getMessage());
        }

    }

}

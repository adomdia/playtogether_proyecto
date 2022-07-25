@extends('layouts.app')
@section('last_head')
    {{--Aquí estilos solo para esta página--}}
@endsection
@section('content')

    <div class="container">
        <div class="row">
            <div class="col-md-3"><!--left col-->
                <div class="text-center">
                    <img src="{{\App\Helpers\ImagesVoyagerHelper::getImage(\Illuminate\Support\Facades\Auth::user()->avatar)}}" class="avatar img-circle img-thumbnail" alt="avatar">
                    <input type="file" name="avatar" class="text-center center-block file-upload">
                </div>
                <br>
            </div>
            <div class="col-md-6" style="margin: auto">
                <div class="tab-content">
                    <div class="tab-pane active" id="home">
                        <hr>
                        <form class="form" action="##" method="post" id="registrationForm" enctype="multipart/form-data">
                            <div class="form-group">

                                <div class="col-md-12">
                                    <label for="first_name"><h4>Nombre y aplliedos</h4></label>
                                    <input type="text" class="form-control" name="name_lastname" id="name_lastname" placeholder="" >
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                    <label for="last_name"><h4>Email</h4></label>
                                    <input type="email" class="form-control" name="email" id="email" placeholder="tu@email.com" title="Introduce tu email.">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-12">
                                    <label for="password"><h4>Contraseña</h4></label>
                                    <input type="password" class="form-control" name="password" id="password" placeholder="password" title="Introduce tu contraseña.">
                                </div>
                            </div>
                            <div class="form-group">

                                <div class="col-md-12">
                                    <label for="password2"><h4>Confirmar contraseña</h4></label>
                                    <input type="password" class="form-control" name="password_confirmed" id="" placeholder="" title="Confirma la contraseña">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <br>
                                    <button class="btn btn-lg btn-success" type="submit"><i class="glyphicon glyphicon-ok-sign"></i> Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div><!--/tab-pane-->
                </div><!--/tab-pane-->
            </div><!--/tab-content-->
        </div><!--/col-9-->
    </div><!--/row-->


@endsection
@section('javascript')
    {{-- Aquí scripts solo para esta página--}}
@endsection

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
   @include('layouts.head')
    <body class="font-sans antialiased">
    @include('layouts.navbar')
        <div class="min-h-screen bg-gray-100">


            {{-- Mensajes flash --}}
            @include('flash.todos')

            {{-- Contenido de la página --}}
            @yield('content')

        </div>
    {{-- Footer --}}
    @include('layouts.footer')

    {{-- Assets después del footer --}}
    @include('layouts.footer_meta')
    @yield('late_footer')

    {{-- Secciones para añadir assets al final desde una página que extienda --}}
    @yield('css')
    @yield('styles')
    @yield('style')
    @yield('javascript')
    @yield('js')
    </body>
</html>

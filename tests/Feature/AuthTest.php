<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthTest extends TestCase
{    
    public function testLoginAuthorized()
    {
        $response = $this->post('/login', [
            'username'=>'admin',
            'password'=>'secret123'
        ]);

        $response->assertRedirect(url('/dashboard'));
    }
    
    public function testLoginUnauthorized()
    {
        $response = $this->post('/login', [
            'username'=>'admin',
            'password'=>'secretx'
        ]);

        $response->assertRedirect(url('/'));
    }
}

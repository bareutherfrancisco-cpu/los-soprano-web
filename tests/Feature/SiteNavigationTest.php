<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class SiteNavigationTest extends TestCase
{
    public function test_public_pages_render_the_expected_inertia_components(): void
    {
        $pages = [
            '/' => 'Home',
            '/la-serie' => 'Series',
            '/la-serie/sinopsis' => 'Synopsis',
            '/la-serie/temporadas' => 'Seasons',
            '/la-serie/legado' => 'Legacy',
            '/personajes' => 'Characters',
            '/galeria' => 'Gallery',
            '/multimedia' => 'Multimedia',
            '/contacto' => 'Contact',
        ];

        foreach ($pages as $path => $component) {
            $this->get($path)
                ->assertOk()
                ->assertInertia(fn (Assert $page) => $page->component($component));
        }
    }
}

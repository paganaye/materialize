<script context="module">
  Waves.init();
</script>

<script lang="ts">
  import '../../dist/css/materialize.css';
  import * as Waves from 'node-waves';
  import { onMount } from 'svelte';
  export let name: string;
</script>

<style lang="scss">
   @import './vars.scss'; 
  $primary-color: #ff0;

  h1 {
    color: $primary-color;
  }
</style>

/* Cannot find any of modules: sass,node-sass Error: Node Sass does not yet support your current
environment: Windows 64-bit with Unsupported runtime (80) For more information on which environments
are supported please see: https://github.com/sass/node-sass/releases/tag/v4.14.1 The file cannot be
parsed because style requires a preprocessor that doesn't seem to be setup or failed during setup.
Did you setup a `svelte.config.js`? If you use SCSS, it may be necessary to add the path to your
NODE runtime to the setting `svelte.language-server.runtime`, or use `sass` instead of `node-sass`.
See
https://github.com/sveltejs/language-tools/tree/master/packages/svelte-vscode#using-with-preprocessors
for more info. */
<header>
  <nav class="top-nav">
    <div class="container">
      <div class="nav-wrapper">
        <div class="row">
          <div class="col s12 m10 offset-m1">
            <h1 class="header">Svelte</h1>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

<main>
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="row">
    <a class="waves-effect waves-light btn-small">Button</a>
    <a class="waves-effect waves-light btn-small"><i class="material-icons left">cloud</i>button</a>
    <a class="waves-effect waves-light btn-small"><i
        class="material-icons right">cloud</i>{name}</a>

    <a class="waves-effect waves-light btn">button</a>
    <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
    <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
  </div>
</main>
<footer class="page-footer docs-footer">
  <div class="container">
    <div class="row" style="margin-bottom: 0;">
      <div class="col s12 m10 offset-m1">
        <div class="row">
          <div class="col l4 s12">
            <h1>Help Materialize Grow11</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

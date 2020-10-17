<script lang="ts">
  import '../../dist/js/materialize.js';
  import '../../dist/css/materialize.css';
  export let name: string;
</script>

<style>
</style>

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
            <h5>Help Materialize Grow</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

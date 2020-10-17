<script context="module">
  Waves.init();
</script>

<script lang="ts">
  import * as Waves from 'node-waves';
  import 'node-waves/dist/waves.min.css';
  import Button from './Button.svelte';
  import Checkbox from './Checkbox.svelte';
  export let name: string;
  let x = false;

  let newStyle = document.createElement('style');
  document.body.append(newStyle);

  function changeH1() {
    x = !x;
    newStyle.innerText = 'h2 { color: ' + (x ? '#f23' : '#54f') + ' }';
  }
</script>

<style>
  h1 {
    color: #0f0;
  }
</style>

<header>
  <nav class="top-nav">
    <div class="container">
      <div class="nav-wrapper">
        <div class="row">
          <div class="col s12 m10 offset-m1">
            <h1 class="header">Svelte {name}</h1>
            <h2 class="header">Svelte2 {name}</h2>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

<main>
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="row">
    <Button leftIcon="cloud">Hello</Button>
    <Button rightIcon="cloud">Hello</Button>
    <Button leftIcon="cloud" rightIcon="cloud">Hello</Button>
    <Checkbox filledIn={true} checked={false}>Hello1</Checkbox>
    <Checkbox filledIn={true} checked={true}>Hello2</Checkbox>
    <Checkbox filledIn={true} checked={null}>Hello3</Checkbox>
    <Checkbox checked={false}>Hello4</Checkbox>
    <Checkbox checked={true}>Hello5</Checkbox>
    <Checkbox checked={null}>Hello6</Checkbox>

    <Checkbox>Hello7</Checkbox>
    <Checkbox checked={false} disabled={true}>Hello8</Checkbox>
    <Checkbox checked={true} disabled={true}>Hello9</Checkbox>
    <Checkbox checked={undefined} disabled={true}>Hello10</Checkbox>
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

<script context="module">
  Waves.init();
</script>

<script lang="ts">
  import * as Waves from 'node-waves';
  import 'node-waves/dist/waves.min.css';
  import Button from '../components/Button.svelte';
  let x = false;

  let newStyle = document.createElement('style');
  document.body.append(newStyle);

  function changeH1() {
    x = !x;
    newStyle.innerText = 'h2 { color: ' + (x ? '#f23' : '#54f') + ' }';
  }
</script>

<style>
</style>

<main>
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="row">
    <h2>Materialize-css buttons rewritten in svelte</h2>
    <pre>    
&lt;Button leftIcon="cloud"&gt;Hello&lt;/Button&gt;
&lt;Button rightIcon="cloud"&gt;Hello&lt;/Button&gt;
&lt;Button leftIcon="cloud" rightIcon="cloud"&gt;Hello&lt;/Button&gt;
  </pre>
    <div>
    <Button leftIcon="cloud">Hello</Button>
    <Button rightIcon="cloud">Hello</Button>
    <Button leftIcon="cloud" rightIcon="cloud">Hello</Button>
  </div>
  <div>

 
</main>

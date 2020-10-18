<script context="module">
</script>

<script lang="ts">
  import 'node-waves/dist/waves.min.css';
  import Checkbox from '../components/Checkbox.svelte';
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
  <div>
    <h2>Materialize-css checkboxes rewritten in svelte</h2>
    <pre>
&lt;Checkbox filledIn={true} checked={false}&gt;Hello1&lt;/Checkbox&gt;
&lt;Checkbox filledIn={true} checked={true}&gt;Hello1&lt;/Checkbox&gt;
... </pre>
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

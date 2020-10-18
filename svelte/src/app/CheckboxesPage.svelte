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
  //let checkBoxOneChecked;
</script>

<style>
</style>

<main>
  <div>
    <h3>Checkboxes</h3>
    <p>Here, I reproduced the checkbox behaviour of Materialcss in svelte.</p>
    <p>Again we have the nice looking materializecss and also have the super simple svelte binding.</p>
    <b>Full HTML code:</b>
    <pre>{`
<Checkbox filledIn={true} bind:checked={checkBoxOneChecked}>checkboxOne</Checkbox>
<p>checkBoxOneChecked = {checkBoxOneChecked}</p>
        `}
    </pre>
    <Checkbox filledIn={true} bind:checked={checkBoxOneChecked}>checkboxOne</Checkbox>
    <p>checkBoxOneChecked = {checkBoxOneChecked}</p>
  </div>
</main>

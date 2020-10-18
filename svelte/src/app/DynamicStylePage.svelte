<script context="module">
</script>

<script lang="ts">
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
    <h2>Materialize-css dynamic style</h2>
    <pre>
&lt;Checkbox filledIn={true} checked={false}&gt;Hello1&lt;/Checkbox&gt;
&lt;Checkbox filledIn={true} checked={true}&gt;Hello1&lt;/Checkbox&gt;
... </pre>
  </div>
</main>

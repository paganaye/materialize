<script lang="ts">
  import Col from '../components/Col.svelte';
  import Row from '../components/Row.svelte';
</script>

<h2>Responsive Grid System</h2>
<p>For now I kept a cut down version of the original Materialize grid system. It is based on bootstrap 3, I believe.</p>
<p>The size 6 columns below should be 12 wide on small screens</p>
<pre>
&lt;Row&gt;
  &lt;Col size={12}&gt;...&lt;/Col&gt;
  &lt;Col size={{s:12, m:6}}&gt;...&lt;/Col&gt;
  &lt;Col size={{s:12, m:6}}&gt;...&lt;/Col&gt;
&lt;/Row&gt;
</pre>
  <Row>
    <Col size={12}>This div is 12-columns wide on all screen sizes</Col>
    <Col size={{s:12, m:6}}>6-columns (one-half)</Col>
    <Col size={{s:12, m:6}}>6-columns (one-half)</Col>
  </Row>  
  <p>Ultimately we should perhaps migrate to bootstrap 4 grid system. It is based on flexbox, is more flexible and allows variable width content.</p>






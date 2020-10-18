<script lang="ts">
import type { ResponsiveValue, ResponsiveValueInterface } from "../types";

  export let size: ResponsiveValue = 12;
  export let offset: ResponsiveValue = undefined;
  export let push: ResponsiveValue = undefined;
  export let pull: ResponsiveValue = undefined;

  function addClass(classes: string[], prefix: string, value: ResponsiveValue) {
    if (!value) return;
    switch(typeof value) {
      case 'string': 
      case 'number':
        classes.push(prefix + 's' + value);
        break;
      case "object":
        let v = value as ResponsiveValueInterface;
        if (v.s) classes.push(prefix + 's' + v.s)
        if (v.m) classes.push(prefix + 'm' + v.m)
        if (v.l) classes.push(prefix + 'l' + v.l)
        if (v.xl) classes.push(prefix + 'xl' + v.xl)
        break;
    }
  }

  function getClass() {
    let classes:string[]=['col'];
    addClass(classes, '', size);
    addClass(classes, 'offset-', offset);
    addClass(classes, 'push-', push);
    addClass(classes, 'pull-', pull);
    return classes.join(' ');
  }


</script>

<style lang="scss">
.col {  
  margin-left: auto;
  left: auto;
  right: auto;
  border:1px dotted firebrick;
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 .75rem;
  min-height: 1px;
}
.col.s1 { width: 8.3333333333%; }
.col.s2 { width: 16.6666666667%; }
.col.s3 { width: 25%; }
.col.s4 { width: 33.3333333333%; }
.col.s5 { width: 41.6666666667%; }
.col.s6 { width: 50%; }
.col.s7 { width: 58.3333333333%; }
.col.s8 { width: 66.6666666667%; }
.col.s9 { width: 75%; }
.col.s10 { width: 83.3333333333%; }
.col.s11 { width: 91.6666666667%; }
.col.s12 { width: 100%; }

.col.offset-s1 { margin-left: 8.3333333333%; }
.col.offset-s2 { margin-left: 16.6666666667%; }
.col.offset-s3 { margin-left: 25%; }
.col.offset-s4 { margin-left: 33.3333333333%; }
.col.offset-s5 { margin-left: 41.6666666667%; }
.col.offset-s6 { margin-left: 50%; }
.col.offset-s7 { margin-left: 58.3333333333%; }
.col.offset-s8 { margin-left: 66.6666666667%; }
.col.offset-s9 { margin-left: 75%; }
.col.offset-s10 { margin-left: 83.3333333333%; }
.col.offset-s11 { margin-left: 91.6666666667%; }
.col.offset-s12 { margin-left: 100%; }

/*
.col.pull-s1 { right: 8.3333333333%; }
.col.pull-s2 { right: 16.6666666667%; }
.col.pull-s3 { right: 25%; }
.col.pull-s4 { right: 33.3333333333%; }
.col.pull-s5 { right: 41.6666666667%; }
.col.pull-s6 { right: 50%; }
.col.pull-s7 { right: 58.3333333333%; }
.col.pull-s8 { right: 66.6666666667%; }
.col.pull-s9 { right: 75%; }
.col.pull-s10 { right: 83.3333333333%; }
.col.pull-s11 { right: 91.6666666667%; }
.col.pull-s12 { right: 100%; }

.col.push-s1 { left: 8.3333333333%; }
.col.push-s2 { left: 16.6666666667%; }
.col.push-s3 { left: 25%; }
.col.push-s4 { left: 33.3333333333%; }
.col.push-s5 { left: 41.6666666667%; }
.col.push-s6 { left: 50%; }
.col.push-s7 { left: 58.3333333333%; }
.col.push-s8 { left: 66.6666666667%; }
.col.push-s9 { left: 75%; }
.col.push-s10 { left: 83.3333333333%; }
.col.push-s11 { left: 91.6666666667%; }
.col.push-s12 { left: 100%; }
*/

@media only screen and (min-width: 601px) { 
    .col.m1 { width: 8.3333333333%; }
    .col.m2 { width: 16.6666666667%; }
    .col.m3 { width: 25%; }
    .col.m4 { width: 33.3333333333%; }
    .col.m5 { width: 41.6666666667%; }
    .col.m6 { width: 50%; }
    .col.m7 { width: 58.3333333333%; }
    .col.m8 { width: 66.6666666667%; }
    .col.m9 { width: 75%; }
    .col.m10 { width: 83.3333333333%; }
    .col.m11 { width: 91.6666666667%; }
    .col.m12 { width: 100%; }
    .col.offset-m1 { margin-left: 8.3333333333%; }
    /* .col.pull-m1 { right: 8.3333333333%; }
    .col.push-m1 { left: 8.3333333333%; } */
    .col.offset-m2 { margin-left: 16.6666666667%; }
    /* .col.pull-m2 { right: 16.6666666667%; }
    .col.push-m2 { left: 16.6666666667%; } */
    .col.offset-m3 { margin-left: 25%; }
    /* .col.pull-m3 { right: 25%; }
    .col.push-m3 { left: 25%; } */
    .col.offset-m4 { margin-left: 33.3333333333%; }
    /* .col.pull-m4 { right: 33.3333333333%; }
    .col.push-m4 { left: 33.3333333333%; } */
    .col.offset-m5 { margin-left: 41.6666666667%; }
    /* .col.pull-m5 { right: 41.6666666667%; }
    .col.push-m5 { left: 41.6666666667%; } */
    .col.offset-m6 { margin-left: 50%; }
    /* .col.pull-m6 { right: 50%; }
    .col.push-m6 { left: 50%; } */
    .col.offset-m7 { margin-left: 58.3333333333%; }
    /* .col.pull-m7 { right: 58.3333333333%; }
    .col.push-m7 { left: 58.3333333333%; } */
    .col.offset-m8 { margin-left: 66.6666666667%; }
    /* .col.pull-m8 { right: 66.6666666667%; }
    .col.push-m8 { left: 66.6666666667%; } */
    .col.offset-m9 { margin-left: 75%; }
    /* .col.pull-m9 { right: 75%; }
    .col.push-m9 { left: 75%; } */
    .col.offset-m10 { margin-left: 83.3333333333%; }
    /* .col.pull-m10 { right: 83.3333333333%; }
    .col.push-m10 { left: 83.3333333333%; } */
    .col.offset-m11 { margin-left: 91.6666666667%; }
    /* .col.pull-m11 { right: 91.6666666667%; }
    .col.push-m11 { left: 91.6666666667%; } */
    .col.offset-m12 { margin-left: 100%; }
    /* .col.pull-m12 { right: 100%; }
    .col.push-m12 { left: 100%; } */
}

@media only screen and (min-width: 993px) { 
    .col.l1 { width: 8.3333333333%; }
    .col.l2 { width: 16.6666666667%; }
    .col.l3 { width: 25%; }
    .col.l4 { width: 33.3333333333%; }
    .col.l5 { width: 41.6666666667%; }
    .col.l6 { width: 50%; }
    .col.l7 { width: 58.3333333333%; }
    .col.l8 { width: 66.6666666667%; }
    .col.l9 { width: 75%; }
    .col.l10 { width: 83.3333333333%; }
    .col.l11 { width: 91.6666666667%; }
    .col.l12 { width: 100%; }
    .col.offset-l1 { margin-left: 8.3333333333%; }
    /* .col.pull-l1 { right: 8.3333333333%; }
    .col.push-l1 { left: 8.3333333333%; } */
    .col.offset-l2 { margin-left: 16.6666666667%; }
    /* .col.pull-l2 { right: 16.6666666667%; }
    .col.push-l2 { left: 16.6666666667%; } */
    .col.offset-l3 { margin-left: 25%; }
    /* .col.pull-l3 { right: 25%; }
    .col.push-l3 { left: 25%; } */
    .col.offset-l4 { margin-left: 33.3333333333%; }
    /* .col.pull-l4 { right: 33.3333333333%; }
    .col.push-l4 { left: 33.3333333333%; } */
    .col.offset-l5 { margin-left: 41.6666666667%; }
    /* .col.pull-l5 { right: 41.6666666667%; }
    .col.push-l5 { left: 41.6666666667%; } */
    .col.offset-l6 { margin-left: 50%; }
    /* .col.pull-l6 { right: 50%; }
    .col.push-l6 { left: 50%; } */
    .col.offset-l7 { margin-left: 58.3333333333%; }
    /* .col.pull-l7 { right: 58.3333333333%; }
    .col.push-l7 { left: 58.3333333333%; } */
    .col.offset-l8 { margin-left: 66.6666666667%; }
    /* .col.pull-l8 { right: 66.6666666667%; }
    .col.push-l8 { left: 66.6666666667%; } */
    .col.offset-l9 { margin-left: 75%; }
    /* .col.pull-l9 { right: 75%; }
    .col.push-l9 { left: 75%; } */
    .col.offset-l10 { margin-left: 83.3333333333%; }
    /* .col.pull-l10 { right: 83.3333333333%; }
    .col.push-l10 { left: 83.3333333333%; } */
    .col.offset-l11 { margin-left: 91.6666666667%; }
    /* .col.pull-l11 { right: 91.6666666667%; }
    .col.push-l11 { left: 91.6666666667%; } */
    .col.offset-l12 { margin-left: 100%; }
    /* .col.pull-l12 { right: 100%; }
    .col.push-l12 { left: 100%; } */
}

  @media only screen and (min-width: 1201px) { 
    .col.xl1 { width: 8.3333333333%; }
    .col.xl2 { width: 16.6666666667%; }
    .col.xl3 { width: 25%; }
    .col.xl4 { width: 33.3333333333%; }
    .col.xl5 { width: 41.6666666667%; }
    .col.xl6 { width: 50%; }
    .col.xl7 { width: 58.3333333333%; }
    .col.xl8 { width: 66.6666666667%; }
    .col.xl9 { width: 75%; }
    .col.xl10 { width: 83.3333333333%; }
    .col.xl11 { width: 91.6666666667%; }
    .col.xl12 { width: 100%; }
    .col.offset-xl1 { margin-left: 8.3333333333%; }
    /* .col.pull-xl1 { right: 8.3333333333%; }
    .col.push-xl1 { left: 8.3333333333%; } */
    .col.offset-xl2 { margin-left: 16.6666666667%; }
    /* .col.pull-xl2 { right: 16.6666666667%; }
    .col.push-xl2 { left: 16.6666666667%; } */
    .col.offset-xl3 { margin-left: 25%; }
    /* .col.pull-xl3 { right: 25%; }
    .col.push-xl3 { left: 25%; } */
    .col.offset-xl4 { margin-left: 33.3333333333%; }
    /* .col.pull-xl4 { right: 33.3333333333%; }
    .col.push-xl4 { left: 33.3333333333%; } */
    .col.offset-xl5 { margin-left: 41.6666666667%; }
    /* .col.pull-xl5 { right: 41.6666666667%; }
    .col.push-xl5 { left: 41.6666666667%; } */
    .col.offset-xl6 { margin-left: 50%; }
    /* .col.pull-xl6 { right: 50%; }
    .col.push-xl6 { left: 50%; } */
    .col.offset-xl7 { margin-left: 58.3333333333%; }
    /* .col.pull-xl7 { right: 58.3333333333%; }
    .col.push-xl7 { left: 58.3333333333%; } */
    .col.offset-xl8 { margin-left: 66.6666666667%; }
    /* .col.pull-xl8 { right: 66.6666666667%; }
    .col.push-xl8 { left: 66.6666666667%; } */
    .col.offset-xl9 { margin-left: 75%; }
    /* .col.pull-xl9 { right: 75%; }
    .col.push-xl9 { left: 75%; } */
    .col.offset-xl10 { margin-left: 83.3333333333%; }
    /* .col.pull-xl10 { right: 83.3333333333%; }
    .col.push-xl10 { left: 83.3333333333%; } */
    .col.offset-xl11 { margin-left: 91.6666666667%; }
    /* .col.pull-xl11 { right: 91.6666666667%; }
    .col.push-xl11 { left: 91.6666666667%; } */
    .col.offset-xl12 { margin-left: 100%; }
    /* .col.pull-xl12 { right: 100%; }
    .col.push-xl12 { left: 100%; } */
}

</style>


<div class={getClass()}>
  <slot />
</div>
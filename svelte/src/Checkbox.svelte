<script lang="ts">
  export let checked: boolean = false;
  export let filledIn: boolean = false;
  export let tabbed: boolean = false;
  export let disabled: boolean = false;
</script>

<style lang="scss">
label {
    font-size: .8rem;
    color: #9e9e9e;
}
input[type="checkbox"]+span {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    display: inline-block;
    height: 25px;
    line-height: 25px;
    font-size: 1rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Checkboxes
   ========================================================================== */
/* Remove default checkbox */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

[type="checkbox"] + span {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  font-size: 1rem;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

[type="checkbox"] + span:before,
[type="checkbox"]:not(.filled-in) + span:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  z-index: 0;
  border: 2px solid #5a5a5a;
  border-radius: 1px;
  margin-top: 3px;
  -webkit-transition: .2s;
  transition: .2s;
}

[type="checkbox"]:not(.filled-in) + span:after {
  border: 0;
  -webkit-transform: scale(0);
          transform: scale(0);
}

[type="checkbox"]:not(:checked):disabled + span:before {
  border: none;
  background-color: rgba(0, 0, 0, 0.42);
}

[type="checkbox"].tabbed:focus + span:after {
  -webkit-transform: scale(1);
          transform: scale(1);
  border: 0;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
}

[type="checkbox"]:checked + span:before {
  top: -4px;
  left: -5px;
  width: 12px;
  height: 22px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #26a69a;
  border-bottom: 2px solid #26a69a;
  -webkit-transform: rotate(40deg);
          transform: rotate(40deg);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}

[type="checkbox"]:checked:disabled + span:before {
  border-right: 2px solid rgba(0, 0, 0, 0.42);
  border-bottom: 2px solid rgba(0, 0, 0, 0.42);
}

/* Indeterminate checkbox */
[type="checkbox"]:indeterminate + span:before {
  top: -11px;
  left: -12px;
  width: 10px;
  height: 22px;
  border-top: none;
  border-left: none;
  border-right: 2px solid #26a69a;
  border-bottom: none;
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}

[type="checkbox"]:indeterminate:disabled + span:before {
  border-right: 2px solid rgba(0, 0, 0, 0.42);
  background-color: transparent;
}

[type="checkbox"].filled-in + span:after {
  border-radius: 2px;
}

[type="checkbox"].filled-in + span:before,
[type="checkbox"].filled-in + span:after {
  content: '';
  left: 0;
  position: absolute;
  /* .1s delay is for check animation */
  -webkit-transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;
  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;
  z-index: 1;
}

[type="checkbox"].filled-in:not(:checked) + span:before {
  width: 0;
  height: 0;
  border: 3px solid transparent;
  left: 6px;
  top: 10px;
  -webkit-transform: rotateZ(37deg);
          transform: rotateZ(37deg);
  -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}

[type="checkbox"].filled-in:not(:checked) + span:after {
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid #5a5a5a;
  top: 0px;
  z-index: 0;
}

input[type="checkbox"].filled-in:checked + span:before {
  top: 0;
  left: 1px;
  width: 8px;
  height: 13px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotateZ(37deg);
          transform: rotateZ(37deg);
  -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}

input[type="checkbox"].filled-in:checked + span:after {
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #26a69a;
  background-color: #26a69a;
  z-index: 0;
}

input[type="checkbox"].filled-in.tabbed:focus + span:after {
  border-radius: 2px;
  border-color: #5a5a5a;
  background-color: rgba(0, 0, 0, 0.1);
}

input[type="checkbox"].filled-in.tabbed:checked:focus + span:after {
  border-radius: 2px;
  background-color: #26a69a;
  border-color: #26a69a;
}

input[type="checkbox"].filled-in:disabled:not(:checked) + span:before {
  background-color: transparent;
  border: 2px solid transparent;
}

input[type="checkbox"].filled-in:disabled:not(:checked) + span:after {
  border-color: transparent;
  background-color: #949494;
}

input[type="checkbox"].filled-in:disabled:checked + span:before {
  background-color: transparent;
}

input[type="checkbox"].filled-in:disabled:checked + span:after {
  background-color: #949494;
  border-color: #949494;
}

</style>

<label>    
    <input type="checkbox" {disabled} class:tabbed={tabbed} class:filled-in={filledIn} bind:checked>
    <span><slot /></span>
</label>

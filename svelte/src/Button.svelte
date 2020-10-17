<script lang="ts">
  export let leftIcon: string=null;
  export let rightIcon: string=null;
</script>

<style lang="scss">
.btn {
    -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: .5px;
    -webkit-transition: background-color .2s ease-out;
    transition: background-color .2s ease-out;
    cursor: pointer;
    font-size: 14px;
    outline: 0;
    border: none;
    border-radius: 2px;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-transform: uppercase;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
}
.btn:hover {
    background-color: #2bbbad;
    -webkit-box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
}
.btn:focus {
    outline: -webkit-focus-ring-color auto 1px;
}
.btn i {
    font-size: 1.3rem;
    line-height: inherit;
}
i.left {
    margin-right: 10px;
    float: left;
}
i.right {
    margin-left: 10px;
    float: right;
}
</style>


<a class="waves-effect waves-light btn" href="#1" on:click>{#if leftIcon}
  <i class="material-icons left">{leftIcon}</i>
  {/if}<slot />{#if rightIcon}
  <i class="material-icons right">{rightIcon}</i>
  {/if}</a>

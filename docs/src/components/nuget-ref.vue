<template>
  <div class="package-reference-box">
    <div class="flex">
      <div class="flex-grow pre-container" style="background:#002440">
        <pre class="sh copy p-0 pl-2 align-middle" style="background:#002440"><label class="block font-normal text-xs sm:text-sm">&lt;PackageReference Include="{{packageName}}" Version="{{packageVersion}}" /&gt;</label></pre>
      </div>
      <div class="flex-shrink"><i class="svg-copy inline-block w-8 h-full" title="copy" @click="copy"></i><b></b></div>
    </div>
    <div class="copy-text w-full text-right h-6"><label v-show="copyShow">copied!</label></div>
  </div>

</template>

<script>
import { defineComponent, ref } from 'vue'
import useClipboard from 'vue-clipboard3'

export default defineComponent({
  setup(props) {
    const { toClipboard } = useClipboard()
    
    const copyShow = ref(false);

    const copy = async () => {
      try {
        await toClipboard('<PackageReference Include="' + props.packageName + '" Version="' + props.packageVersion +'" />')
        console.log('Copied to clipboard')
        copyShow.value = true;
        setTimeout(() => {
          copyShow.value = false;
        },3000);
      } catch (e) {
        console.error(e)
      }
    }
    
    return {
      copy: copy,
      copyShow: copyShow
    }
  },
  name: "nuget-ref",
  props: {
    packageName: String,
    packageVersion: String,
  }
})
</script>

<style scoped>
  pre {
    line-height: 0.25rem;
    color: white;
    margin:0;
  }
  .package-reference-box .svg-copy {
    background: #008ed6 url("data:image/svg+xml,%3Csvg fill='none' stroke='white' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'%3E%3C/path%3E%3C/svg%3E") no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: 1.4em;
    cursor: pointer;
  }
  .package-reference-box .svg-copy:hover {
    opacity: .8;
  }
  .package-reference-box pre.copy {
    display: inline-block;
    padding-right: .5rem;
  }
  .package-reference-box pre.sh {
    color:white;
  }
  .package-reference-box pre label {
    margin:0;
    white-space: nowrap;
    overflow: hidden;
    line-height: 2.5em;
  }
  .package-reference-box pre {
    margin-bottom: 0;
    border-radius: 0;
    border: none;
  }
  .package-reference-box .copy-text label {
    font-weight: 400;
    color: rgb(107, 114, 128);
  }

  .copy-cmd i.svg-copy {
    display: inline-block;
    vertical-align: middle;
    background-image: url("data:image/svg+xml,%3Csvg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2'%3E%3C/path%3E%3C/svg%3E");
  }
  .copy-cmd pre.sh::before {
    content: "$ ";
    color: #999;
  }
  .copy-cmd pre b { visibility: hidden; }
  .copy-cmd pre.copied b { visibility: visible; }
  .copy-cmd pre.copied i.svg-copy { opacity: 50% }


  @media (min-width: 1024px) {
    .package-reference-box {
      max-width: 500px;
    }
    .package-reference-box .copy label {
      max-width: 470px;
      overflow: hidden;
    }
  }
  @media (min-width: 1280px) {
    .package-reference-box {
      max-width: 540px;
    }
    .package-reference-box .copy label {
      max-width: 510px;
      overflow: hidden;
    }
  }
  
  .package-reference-box-lg .package-reference-box pre {
    display: flex;
  }
  .package-reference-box-lg pre label {
    font-size: 1.125rem;line-height: 1.75rem; /*.text-lg*/
    padding: .5rem 0;
  }
  .package-reference-box-lg .package-reference-box, .package-reference-box-lg .package-reference-box .copy label {
    max-width: unset;
  }

</style>
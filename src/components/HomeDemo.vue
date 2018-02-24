<template>
  <div>
    <h1>{{ msg }}</h1>
    <multicomp></multicomp>
  </div>
</template>

<script>
import multicomp from './MultiComp.vue'
import 'gconfig'
//import {jquery, $} from 'jquery' // Why cannot work
require('jquery')

export default {
  name: 'HomeDemo',
  components: { multicomp },
  data () {
    return {
      msg: 'My Vue component Demo'
    }
  },
  mounted () {
    window.document.title = 'Home Demo'
    //console.dir(gconfig)
    gconfig.show()
    console.log('v1: ' + gconfig.v1 + ', v2: ' + gconfig.v2)
    console.dir(jQuery)
  }
}
</script>

<template>
<div>

<el-row class="footer-menu">
  <!--
  <el-col :span="8">
    <el-menu
      default-active="2"
      class="footer-item"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index="1">
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4" class="none-item" disabled>
      </el-menu-item>
    </el-menu>
  </el-col>

  <el-col :span="8">
    <el-menu
      default-active="2"
      class="footer-item"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index="1">
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" class="none-item" disabled>
      </el-menu-item>
      <el-menu-item index="4" class="none-item" disabled>
      </el-menu-item>
    </el-menu>
  </el-col>

  <el-col :span="8">
    <el-menu
      default-active="2"
      class="footer-item"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff">
      <el-menu-item index="1">
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  -->

  <el-col :span="24">
    <el-menu
      class="footer-last-item"
      background-color="#545c64">
		  @2018
    </el-menu>
  </el-col>

</el-row>

</div>
</template>

<script>
export default {
  name: 'FootMenu',
  data () {
    return {
    }
  },
  mounted() {
      //console.log('handle reset password mounted')
  },
  methods: {
  }
}
</script>

<style>
/*
.footer-menu{
 text-align: center;
}
*/
.footer-item{
 text-align:center;
 border-right: none;
}
.none-item{
 cursor: auto !important;
}
.footer-last-item{
 padding: 40px 10px 40px 10px;
 color: #bdbdbd !important;
}
</style>

<template>
  <ul class="sidebar-menu">
    <li v-for="item in menuData">
      <a href="#">item.text</a>
      
      <SidebarMenu :menuData="item.children"/>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      menuData: Array
    }
  }
</script>

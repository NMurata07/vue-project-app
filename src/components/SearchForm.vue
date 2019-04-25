<template>
  <form @submit.prevent="">
    <p>
      <input type="text" v-model="searchFormData.placeName">
    </p>
    <p>
      <el-date-picker v-model="searchFormData.checkInDate" type="datetime" placeholder="チェックインの日付"></el-date-picker>
    </p>
    <p>
      <el-date-picker v-model="searchFormData.checkInDate" type="datetime" placeholder="チェックアウトの日付"></el-date-picker>
    </p>
  </form>
</template>

<script>
  export default {
    name: "search-form",
    props: ['searchFormData'],
  }
</script>

<style>
</style>

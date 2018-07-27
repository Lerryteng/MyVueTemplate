<template>
  <div>
    <h3>{{name}}</h3>
    <input type="text" v-model="newName">
    <button @click="updateNameFunc">commit new name</button>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        newName: ''
      }
    },
    computed: {
      name() {
        return this.$store.getters.getName;
      }
    },
    methods: {
      updateNameFunc() {
        this.$store.dispatch('updateNameAction', this.newName)
      }
    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  input {
    margin: 10px auto;
    padding: 2px 4px;
    display: block;
    width: 100px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #65A1F6;
    color: #fff;
  }
</style>

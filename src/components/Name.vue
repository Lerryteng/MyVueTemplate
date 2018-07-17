<template>
  <div>
    <h3>{{name}}</h3>
    <div style="text-align: center">
      <input type="text" v-model="newName">
      <button @click="updateNameFunc">commit new name</button>
    </div>
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

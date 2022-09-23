<template>
  <main>
    父層給的數字：{{ count }}
    <button @click="modify">改父層的數字</button>

    <hr />
    {{ info }}
    <button @click="add">+</button>
    {{ num }}
    <button @click="reduce">-</button>
    {{ info }}
  </main>
</template>

<script>
export default {
  props: ["info", "count"],
  data() {
    return {
      num: 100,
    };
  },
  methods: {
    add() {
      this.num += 1;
    },
    reduce() {
      this.num -= 1;
    },
    modify() {
      this.$emit("numadd", this.num);
    },
  },
};
</script>
<script>
export default {
  props: {},
  setup(props) {
    const count = ref(1)
    // return the render function
    return () => h('div', count.value)
  },
}
</script>

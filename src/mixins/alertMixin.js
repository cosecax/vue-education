
export default {
  emits: ['endedTime'],
  data () {
    return {
      timerId: null,
      timeCounter: 10,
      delay: 500 // 1sec
    }
  },
  methods: {
    startTimer () {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        if (this.timeCounter !== 0) {
          this.timeCounter -= 1
        }
      }, this.delay)
    }
  },
  mounted () {
    this.startTimer()
  },
  unmounted () {
    if (this.timerId) clearInterval(this.timerId)
  },
  watch: {
    timeCounter (newVal) {
      if (newVal === 0) {
        this.$emit('endedTime')
      }
    }
  }
}

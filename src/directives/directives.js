const defaultColor = 'darkred'
let timerId

const mouseover = (event) => {
  event.target.style.fontSize = '5em'
  event.target.style.transition = 'all 1s ease'
}
const mouseout = (event) => {
  event.target.style.fontSize = '2em'
  event.target.style.transition = 'all 1s ease'
}

export default {
  focus: {
    mounted (el) {
      el.focus()
    }
  },
  style: {
    mounted (el, binding) {
      el.style[binding.arg] = binding.value
      if (binding.modifiers.blink) {
        timerId = setInterval(() => {
          el.style.background = el.style.background === defaultColor ? '#fff' : defaultColor
        }, 1000)
      }
      if (binding.modifiers.hover) {
        el.addEventListener('mouseover', mouseover)
        el.addEventListener('mouseout', mouseout)
      }
    },
    unmounted (el) {
      if (timerId) clearInterval(timerId)
      el.removeEventListener('mouseover', mouseover)
      el.removeEventListener('mouseout', mouseout)
    }
  }
}

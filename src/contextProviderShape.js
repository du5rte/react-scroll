import { PropTypes } from 'react'

export default PropTypes.shape({
  position: PropTypes.number,
  positionRatio: PropTypes.number,
  start: PropTypes.number,
  end: PropTypes.number,
  viewHeight: PropTypes.number,
  scrollHeight: PropTypes.number,
  ready: PropTypes.bool,
  onStart: PropTypes.bool,
  onMiddle: PropTypes.bool,
  onEnd: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.object),

  autoFrame: PropTypes.bool,
  autoScroll: PropTypes.bool,

  originalPosition: PropTypes.number,
  changedPosition: PropTypes.number,
  timeStamp: PropTypes.number,
  scrolling: PropTypes.bool,
  wheeling: PropTypes.bool,
  touching: PropTypes.bool,
  moving: PropTypes.bool,
  resting: PropTypes.bool,
  // touches: PropTypes.object,

  node: PropTypes.object,

  setNode: PropTypes.func,
  unsetNode: PropTypes.func,
  handleScroll: PropTypes.func,
  handleWheel: PropTypes.func,
  handleTouchStart: PropTypes.func,
  handleTouchMove: PropTypes.func,
  handleTouchEnd: PropTypes.func,
  scrollTo: PropTypes.func,
  scrollToPosition: PropTypes.func,
  scrollToByIndex: PropTypes.func,
  scrollToTop: PropTypes.func,
  scrollToBottom: PropTypes.func,
  scrollToName: PropTypes.func,
  scrollToElement: PropTypes.func,
  setStateMove: PropTypes.func,
  setStateRest: PropTypes.func,
  setStateStart: PropTypes.func,
  setStateEnd: PropTypes.func,
})
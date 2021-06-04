import {
  ADD_COUNTER,
  ADD_TO_CART,
} from './mutation-types'

export default {
  //mutations唯一的目的是修改state的状态
  //mutations中每个方法尽可能完成的事比较单一
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  },
}
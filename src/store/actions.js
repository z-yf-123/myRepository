import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
  addCart(context, payload) { //注意actions传的参数是context，即{state,commit}
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve("当前的商品数量+1")
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve("添加了新的商品")
      }
    })
  }
}
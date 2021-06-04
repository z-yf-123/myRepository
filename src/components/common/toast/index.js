import Toast from './Toast.vue';
const obj = {};
obj.install = function (Vue) {
  //当Vue安装这个插件时，会调用这个install函数，并且传入Vue对象
  //1.创建组件构造器(利用导入的组件)
  const toastConstructor = Vue.extend(Toast);
  //2.利用组件构造器new出来一个新的组件
  const toast = new toastConstructor();
  //3.将new出来的组件对象，手动挂载到某个元素上
  toast.$mount(document.createElement('div'));
  //4.将这个组件的$el放到body中
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
}
export default obj
import Vue from "vue";
import GlobleToast from './GlobleToast.vue';
/**
 * 全局Toast组件
 * 多个Toat只显示最后一条
 * 默认显示时间为2S
 * @param message {String} 显示信息
 * @param delay {Number} 显示时间
 */


// 构造Toast组件
const ToastComponent = Vue.extend(GlobleToast);
let instance;
const Toast = function(message="",delay = 2000){
    // 防止加载多个实例
    if(instance){
        instance.isVisible = false;
    }
    // 实例化Toast组件，传入参数
    instance = new ToastComponent({
        data:{
            message,
            delay
        }
    });
    //手动挂载组件到指定元素上
    instance.$mount();
    document.body.appendChild(instance.$el);
    //更改组件状态为显示
    instance.isVisible = true;
};
export default GlobleToast;

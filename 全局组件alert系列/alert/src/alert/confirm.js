import Notification from './notification.js';

let messageInstance;

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance('confirm');
  return messageInstance;
}
function result () {
  let instance = getMessageInstance();
  console.log(instance)
  // 等待状态，挂起程序
  // let p = new Promise(function(resolve, reject){
   
  // });
  // return p
}
function notice({ content = '' }) {
  let instance = getMessageInstance();

  // console.log(instance)
  let a = instance.addConfirm({
    content: content,
  });
  return a
}

export default {
  notice,
  result,
};
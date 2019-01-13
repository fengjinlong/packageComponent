import Notification from './notification.js';

let messageInstance;

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance('confirm');
  return messageInstance;
}

function notice({ content = '' }) {
  let instance = getMessageInstance();

  instance.addConfirm({
    content: content,
  });
}

export default notice;
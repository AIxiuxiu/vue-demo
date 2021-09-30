module.exports = function (plop) {
  plop.setWelcomeMessage('请选择需要创建的模式：');
  plop.setGenerator('page', import('./plop-templates/page/prompt'));
  plop.setGenerator('component', import('./plop-templates/component/prompt'));
  plop.setGenerator('store', import('./plop-templates/store/prompt'));
};

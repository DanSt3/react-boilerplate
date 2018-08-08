const title = 'My Minimal React Webpack Babel Setup';

export default () => ((
  <div>{title}</div>,
  document.getElementById('app')
));

module.hot.accept();

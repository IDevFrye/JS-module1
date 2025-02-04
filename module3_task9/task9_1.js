'use strict';

{
  const files = ['module.jsx', 'index.html', 'style.css',
    'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

  const match = () => files.filter(file => /\.(js|jsx|ts)$/.test(file));
  console.log(match());
};

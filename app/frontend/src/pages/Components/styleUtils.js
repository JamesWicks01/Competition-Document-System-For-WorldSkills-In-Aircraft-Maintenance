export const loadStyle = (href) => {
  const link = document.createElement('link');
  link.href = href;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.setAttribute('data-dynamic-style', href); // mark it so we can find/remove it later
  document.head.appendChild(link);
};

export const unloadStyle = (href) => {
  const links = document.querySelectorAll(`link[data-dynamic-style="${href}"]`);
  links.forEach(link => link.remove());
};

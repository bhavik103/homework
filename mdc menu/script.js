  const m = window.mdc.menu;
  const btn = document.querySelector('.mdc-button');

  const menu = new m.MDCMenu(document.querySelector('.mdc-menu'));
  menu.setAnchorCorner(m.Corner.TOP_RIGHT)
  menu.setAnchorElement(document.querySelector('.mdc-button'));

  btn.addEventListener('click', () => {
    menu.open = !menu.open;
  });

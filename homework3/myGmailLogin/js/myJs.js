// Instantiate MDC Drawer
const drawerEl = document.querySelector('.mdc-drawer');
const drawer = new mdc.drawer.MDCDrawer.attachTo(drawerEl);

// Instantiate MDC Top App Bar (required)
const topAppBarEl = document.querySelector('.mdc-top-app-bar');
const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);

topAppBar.setScrollTarget(document.querySelector('.main-content'));
mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});


var toggleButton = new mdc.iconButton.MDCIconButtonToggle(document.getElementById('add-to-favorites1'));
var toggleButton = new mdc.iconButton.MDCIconButtonToggle(document.getElementById('add-to-favorites2'));

var toggleButton = new mdc.iconButton.MDCIconButtonToggle(document.getElementById('add-to-imp1'));
var toggleButton = new mdc.iconButton.MDCIconButtonToggle(document.getElementById('add-to-imp2'));

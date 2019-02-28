const chipSetEl = document.querySelector('.mdc-chip-set');
const chipSet = new mdc.chips.MDCChipSet(chipSetEl);
const chipSet1 = new mdc.chips.MDCChipSet(chipSetEl);
const chipSet2 = new mdc.chips.MDCChipSet(chipSetEl);
const chipSet3 = new mdc.chips.MDCChipSet(chipSetEl);
const chipSet4= new mdc.chips.MDCChipSet(chipSetEl);

const m = window.mdc.menu;
const btn = document.querySelector('.mdc-button');

const menu = new m.MDCMenu(document.querySelector('.mdc-menu'));
menu.setAnchorCorner(m.Corner.TOP_BOTTOM)
menu.setAnchorElement(document.querySelector('.mdc-button'));

btn.addEventListener('click', () => {
	menu.open = !menu.open;
});


const MDCSnackbar = mdc.snackbar.MDCSnackbar;
const MDCSnackbarFoundation = mdc.snackbar.MDCSnackbarFoundation;

import {
	selectCountry,
	selectType,
	searchBtn,
	ui
} from "./app.js";

class UI {
	editElement(elementName, opacity, disabled, cursor) {
		elementName.style.opacity = `${opacity}`;
		elementName.disabled = disabled;
		elementName.style.cursor = `${cursor}`;
	}

	hideElements() {
		selectType.selectedIndex = 0;
		ui.editElement(searchBtn, 0, true, "default");
	}

	slectFunction() {
		if (selectCountry.value != "") {
			ui.editElement(selectType, 1, false, "pointer");
		} else if (selectCountry.value == "") {
			ui.editElement(selectType, 0, true, "default");
			selectType.selectedIndex = 0;
			ui.editElement(searchBtn, 0, true, "default");
		}

		if (selectType.value != "") {
			ui.editElement(searchBtn, 1, false, "pointer");
		} else {
			ui.editElement(searchBtn, 0, true, "default");
		}
	}
}

export {
	UI
};
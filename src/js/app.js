import {
	XHR
} from "./xhr.js";
import {
	UI
} from "./ui.js";

const searchBtn = document.querySelector("#search-propositions"),
	selectCountry = document.querySelector("#select-country"),
	selectType = document.querySelector("#select-type"),
	selects = document.querySelectorAll(".choose-places .select"),
	defaultContent = document.querySelector("#default-content"),
	placesContanier = document.querySelector("#finded-places");

const xhr = new XHR();
const ui = new UI();

selects.forEach(select => select.addEventListener("change", ui.slectFunction));
searchBtn.addEventListener("click", xhr.findAttractions);
selectCountry.addEventListener("change", ui.hideElements);

export {
	selectCountry,
	selectType,
	searchBtn,
	defaultContent,
	placesContanier,
	xhr,
	ui
};
import {
	defaultContent,
	placesContanier
} from "./app.js";

class XHR {
	findAttractions() {
		defaultContent.style.display = "none";

		const selectedCountry = document.querySelector("#select-country").value,
			selectedType = document.querySelector("#select-type").value,
			req = new XMLHttpRequest();

		let link = `data/${selectedCountry}/${selectedType}.json`;

		req.open("GET", link, true);
		req.onload = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					const attractions = JSON.parse(this.responseText);

					let output = "";
					attractions.forEach(attraction => {
						output += `
						<div class="finded-places__single-place">
							<div class="finded-places__single-place--image" style="background-image: url(images/${selectedCountry}/${selectedType}/${attraction.image}.jpg);">
								<h2 class="heading-third">${attraction.name}</h2>
							</div>
							<p class="finded-places__single-place--description">${attraction.description}</p>
							<a href="${attraction.href}" class="link-btn" target="_blank">Learn more</a>
						</div>`;
					});

					placesContanier.innerHTML = output;
				} else {
					console.log("Error: ", req.statusText);
				}
			}
		};

		req.send();
	}
}

export {
	XHR
};
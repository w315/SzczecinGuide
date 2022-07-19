

// TABS //





const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabs = document.querySelectorAll(".content__tab");


tabsBtn.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if( ! currentBtn.classList.contains('active') ) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('active');
			});

			tabs.forEach(function(item) {
				item.classList.remove('content__tab_active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('content__tab_active');
		}
		
	});
});



document.querySelector('.tabs__btn').click();




// POP-UP //


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}
function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, flase);
		} 

		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (e.target.closest('.tabs__wrapper')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
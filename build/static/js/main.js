
let burgerBtn = document.querySelector('.burger-menu');
let burgerMenu = document.querySelector('.burger-menu__body');
let burgerSpan = document.querySelector('.burger-menu__span');

burgerBtn.addEventListener('click', function() {
	burgerMenu.classList.toggle('active');
	burgerSpan.classList.toggle('open-menu');
});

/* const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft
		}
	}
	animOnScroll();
} */

// let blocks = document.querySelectorAll('.main-subhead');

// function update() {

// 		for (let i = 0; i < blocks.length; i++) {
// 			let top = window.scrollY;
// 			let dot = window.scrollTo(0, 200);
// 			blocks[i].style.top = top + 'px';
// 			if (top > dot) {
// 				if (blocks[0].scrollY < 300) {
// 					blocks[0].style.top = 300 + 'px';
// 					break;
// 				}
// 				/* if (blocks[1].scrollY = 340) {
// 					break;
// 				}
// 				if (blocks[2].scrollY = 400) {
// 					break;
// 				} */
// 			}
			
// 		}
	
// }
// window.addEventListener('scroll', update);
// update();
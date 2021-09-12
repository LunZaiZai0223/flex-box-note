function addEvent(radios, handlerFunc) {
	radios.forEach(r => {
		r.addEventListener('change', handlerFunc);
	});
}

//==========================================================================
//============================FLEX-DIRECTION================================
//==========================================================================

const flexdirInput = document.querySelectorAll('input[type=radio][name="flex-dir"]');
const flexDirResult = document.querySelector('#flex-dir-result');

function changeFlexDir(event){
	flexDirResult.style.flexDirection = this.value;
}

addEvent(flexdirInput, changeFlexDir);

//==========================================================================
//===========================JUSTIFY-CONTENT================================
//==========================================================================

const radiosForRow = document.querySelectorAll('input[type=radio][name="justify-content-form-row"]');

addEvent(radiosForRow, changeHandlerForRow);

function changeHandlerForRow(event) {
	const result = document.querySelector('#flex-dir-row-result');
	result.style.justifyContent = this.value;

	//一開始想的方法：用 class，但後來想到就用 element.style.CSS-Attribute 就好了XD
	// switch (this.value) {
	// 	case 'flex-start':
	// 		result.className = `justify-content-${this.value}`;
	// 		break;
	// 	case 'flex-end':
	// 		result.className = `justify-content-${this.value}`;
	// 		break;
	// 	case 'center':
	// 		result.className = `justify-content-${this.value}`;
	// 		break;
	// 	case 'space-between':
	// 		result.className = `justify-content-${this.value}`;
	// 		break;
	// 	case 'space-around':
	// 		result.className = `justify-content-${this.value}`;
	// 		break;
	// 	case 'space-evenly':
	// 		result.className = `justify-content-${this.value}`;
	// 		break;
	// }
}

//==========================================================================
//================================FLEX-WRAP=================================
//==========================================================================

const radiosForWrap = document.querySelectorAll('input[type=radio][name="flex-wrap"]');

addEvent(radiosForWrap, changeFlexWrap);

// flex-wrap-handlers
function changeFlexWrap(event) {
	const result = document.querySelector('#flex-wrap-result');
	result.style.flexWrap = this.value;
}

//==========================================================================
//===============================ALIGN-ITEMS================================
//==========================================================================

const radiosForAlignItems = document.querySelectorAll('input[type=radio][name="align-items"]');

addEvent(radiosForAlignItems, changeAlignItems);

function changeAlignItems(event) {
	const result = document.querySelector('#align-items-result');
	switch (this.value) {
			case 'flex-start':
		result.className = `align-items-${this.value}`;
			break;
		case 'flex-end':
		result.className = `align-items-${this.value}`;
			break;
		case 'center':
		result.className = `align-items-${this.value}`;
			break;
			case 'stretch':
		result.className = `align-items-${this.value}`;
			break;
			case 'baseline':
		result.className = `align-items-${this.value}`;
			break;
	}
}

//==========================================================================
//==============================ALIGN-CONTENT===============================
//==========================================================================

const radiosForAlignContent = document.querySelectorAll('input[type=radio][name="align-content"]');

addEvent(radiosForAlignContent, changeAlignContent);

function changeAlignContent(event) {
	const result = document.querySelector('#align-content-result');
	result.style.alignContent = this.value;
}

//==========================================================================
//================================ORDER=====================================
//==========================================================================

const numInput = document.querySelectorAll('input[type=number][name="flex-order"]');
const divs = document.querySelectorAll('#flex-order-result div');

addEvent(numInput, changeOrderHandler);

function changeOrderHandler(event){
	//取得 event.currentTagert 元素的 id，並指選取最後的數字以便用 indexNum 叫用對應的 box
	let target = event.currentTarget.id;
	target = target.substr(target.length-1);
	//對應 box 的 order = 表單輸入的數字
	divs[target].style.order = this.value;
}

//==========================================================================
//=============================ALIGN-SELF===================================
//==========================================================================

const alignSelfBox3 = document.querySelector('.align-self-box-3');
const radiosForAlignSelf = document.querySelectorAll('input[type=radio][name="align-self"]');

addEvent(radiosForAlignSelf, changeAlignSelfHandler);

function changeAlignSelfHandler(event){
	alignSelfBox3.style.alignSelf = this.value;
}

//==========================================================================
//=============================FLEX-GROW====================================
//==========================================================================

const flexGrowInput = document.querySelectorAll('input[type=number][name="flex-grow"]');
const flexGrowDivs = document.querySelectorAll('#flex-grow-result div');

addEvent(flexGrowInput, changeFlexGrowHandler);

function changeFlexGrowHandler(event){
	console.log(event);
	let target = event.currentTarget.id;
	target = target.substr(target.length-1);
	flexGrowDivs[target].style.flexGrow = this.value;
}

//==========================================================================
//=============================FLEX-SHRINK==================================
//==========================================================================

const flexShrinkInput = document.querySelectorAll('input[type=number][name="flex-shrink"]');
const flexShrinkDivs = document.querySelectorAll('#flex-shrink-result div');

addEvent(flexShrinkInput, changeFlexShrinkHandler);

function changeFlexShrinkHandler(event){
	let target = event.currentTarget.id;
	target = target.substr(target.length-1);
	flexShrinkDivs[target].style.flexShrink = this.value;
}

//==========================================================================
//==============================FLEX-BASIS==================================
//==========================================================================

const flexBasisResult = document.querySelector('#flex-basis-result');
const flexBasisDirInput = document.querySelectorAll('input[type=radio][name="flex-basis-dir"]');
const flexBasisInput = document.querySelectorAll('input[type=number][name="flex-basis"]');

addEvent(flexBasisDirInput, changeFlexBasisDir);
addEvent(flexBasisInput, changeFlexBasisHandler);

function changeFlexBasisDir(event) {
	flexBasisResult.style.flexDirection = this.value;
}

function changeFlexBasisHandler(event){
	let target = event.currentTarget.id;
	target = target.substr(target.length-1);
	flexBasisResult.children[target].style.flexBasis = `${this.value}%`;
}

//==========================================================================
//================================FLEX======================================
//==========================================================================

const flexFlexGrowInput = document.querySelectorAll('input[name="flex-flex-grow"]');
const flexFlexShrinkInput = document.querySelectorAll('input[name="flex-flex-shrink"]');
const flexFlexBasisInput = document.querySelectorAll('input[name="flex-flex-basis"]');
const flexResult = document.querySelector('#flex-result');

addEvent(flexFlexGrowInput, changeFlexFlexGrow);
addEvent(flexFlexShrinkInput, changeFlexFlexShrink);
addEvent(flexFlexBasisInput, changeFlexFlexBasis);

function changeFlexFlexGrow(event) {
	let target = event.currentTarget.id;
	target = target.substr(target.length-1);
	flexResult.children[target].style.flexGrow = this.value;
}

function changeFlexFlexShrink(event) {
	let target = event.currentTarget.id;
	target = target.substr(target.length-1);
	flexResult.children[target].style.flexShrink = this.value;
}

function changeFlexFlexBasis(event) {
	let target = event.currentTarget.id;
	target = target.substr(target.length-1);
	flexResult.children[target].style.flexBasis = `${this.value}%`;
}
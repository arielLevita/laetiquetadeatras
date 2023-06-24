const imgContainer = document.querySelector('.details-image-container');
const imgElement = document.querySelector('.details-image-container img');

// Zoom percentage
const ZOOM = 300;

// Mouse enter event
imgContainer.onmouseenter = function() {
    imgElement.style.width = ZOOM + '%';
};

// Mouse leave event
imgContainer.onmouseleave = function() {
    imgElement.style.width = '100%';
    imgElement.style.transform = 'translate(0, 0)';
};

// Mouse move event
imgContainer.onmousemove = function(mouseEvent) {
    let obj = imgContainer;
    let obj_left = 0;
    let obj_top = 0;
    let xpos;
    let ypos;

    while (obj.offsetParent) {
        obj_left += obj.offsetLeft;
        obj_top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    if (mouseEvent) {
        // Firefox
        xpos = mouseEvent.clientX;
        ypos = mouseEvent.clientY;
    } else {
        // IE
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scrollTop - 2;
    }
    xpos -= obj_left;
    ypos -= obj_top;

    const imgWidth = imgElement.clientWidth;
    const imgHeight = imgElement.clientHeight;

    imgElement.style.transform = `translate(${-(((imgWidth - this.clientWidth) * xpos) / this.clientWidth)}px, ${-(((imgHeight - this.clientHeight) * ypos) / this.clientHeight)}px)`;
};

// Change image container size
function changeHeight() {
    imgContainer.style.height = imgContainer.clientWidth + 'px';
}
changeHeight();

// Change height on window resize
window.addEventListener('resize', changeHeight);

let canMove = false;
let first = {}



/**/function touchStart (e) {
    itemFirst.style.position = 'absolute' 
    canMove = true
    itemFirst.style.margin = '0'

   // solutionFirst.style.zIndex = '1000' 
    //let coords = getCoords(itemFirst);
   let x = itemFirst.getBoundingClientRect().left 
   let y = itemFirst.getBoundingClientRect().top 
    /**/first.x = e.touches[0].clientX - x
   /**/ first.y = e.touches[0].clientY - y
};
/**/function touchMove (e) {
if(canMove) {
    itemFirst.style.left = e.touches[0].clientX - first.x  + 'px'; 
    itemFirst.style.top = e.touches[0].clientY - first.y + 'px'; 
}
};
/**/function touchEnd(e) {
    canMove = false;
};
/**/function touchCancel() {
    canMove = false;
}; 


itemFirst.addEventListener('touchstart', touchStart);
itemFirst.addEventListener('touchmove', touchMove);
itemFirst.addEventListener('touchend', touchEnd);
itemFirst.addEventListener('touchcancel', touchCancel);

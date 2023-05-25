const itemFirst = document.getElementById('item_first')
const itemSecond = document.getElementById('item_second')
const itemThird = document.getElementById('item_third')
const itemFourth = document.getElementById('item_fourth') 

const fieldSolution = document.getElementById('field_solution')

const solutionFirst = document.getElementById('solution_first')
const solutionSecond = document.getElementById('solution_second')
const solutionThird = document.getElementById('solution_third')
const solutionFourth = document.getElementById('solution_fourth')
const sol1 = document.getElementById('sol_1')
const sol2 = document.getElementById('sol_2')
const sol3 = document.getElementById('sol_3')
const sol4 = document.getElementById('sol_4')

const victory = document.getElementById('victory')

//////////////////////////////////////////////////////////////////////////////////<= передвижение первого квадрата
/***/itemFirst.onmousedown = function(e) {
    itemFirst.style.position = 'absolute';
    solutionFirst.style.zIndex = '1000'          //добавляю Зет индекс для того чтоб была возможность решить фрагмент
    moveAt(e);
    document.body.appendChild(itemFirst);

    function moveAt(e) {
        itemFirst.style.left = e.pageX - itemFirst.offsetWidth - (itemFirst.offsetWidth / 2) + 'px';
        itemFirst.style.top = e.pageY - itemFirst.offsetHeight - (itemFirst.offsetHeight / 2) + 'px'
    }
    document.onmousemove = function(e) {
        moveAt(e);
    }
   ////////////////
   sol1.onmousemove = a
     function a () {
         
        solutionFirst.style.opacity = '1';    //при правильной постановке блока
        itemFirst.style.display = 'none'
        solutionFirst.textContent = ''
/////////////////////////
       if(window.getComputedStyle(solutionFirst).opacity === '1' && window.getComputedStyle(solutionFourth).opacity === '1' && window.getComputedStyle(solutionThird).opacity === '1' && window.getComputedStyle(solutionSecond).opacity === '1') {
        solutionFirst.style.border = 'none';  
        solutionFirst.style.borderRadius = '0';
        solutionSecond.style.border = 'none';
        solutionSecond.style.borderRadius = '0';
        solutionThird.style.border = 'none'; 
        solutionThird.style.borderRadius = '0';
        solutionFourth.style.border = 'none'; 
        solutionFourth.style.borderRadius = '0';
           return victory.style.display = 'flex'
            }   /////// условие ЗАВЕРШЕНИЯ - сложениея ВСЕГО пазла
    };
   /////////////
    itemFirst.onmouseup = function() {
        document.onmousemove = null;
        itemFirst.onmouseup = null;
        sol1.onmousemove = null;
        solutionFirst.style.zIndex = '0'                                 // уменьшаю Зет индекс элемента решения при отжатии клавиши мыши
    };
}; ///////////////////////////////////////////////////////////////////////////////////<=<= передвижение первого квадрата

//<=ПЕРЕДВИЖЕНИЕ ВТОРОГО КВАДРАТА РЕШЕНИЯ
itemSecond.onmousedown = function(e) {
    itemSecond.style.position = 'absolute';
    solutionFourth.style.zIndex = '1000'   //добавляю Зет индекс для того чтоб была возможность решить фрагмент
    moveAt(e);
    document.body.appendChild(itemSecond);
   

    function moveAt(e) {
        itemSecond.style.left = e.pageX - itemSecond.offsetWidth - (itemSecond.offsetWidth / 2) + 'px';
        itemSecond.style.top = e.pageY - itemSecond.offsetHeight - (itemSecond.offsetHeight / 2) + 'px'
    }
    document.onmousemove = function(e) {
        moveAt(e);
    }
 ////////////////
 sol4.onmousemove = a
 function a () {
     
    solutionFourth.style.opacity = '1';    //при правильной постановке блока
    itemSecond.style.display = 'none'
    solutionFourth.textContent = ''
    /////////////////////////
    if(window.getComputedStyle(solutionFirst).opacity === '1' && window.getComputedStyle(solutionFourth).opacity === '1' && window.getComputedStyle(solutionThird).opacity === '1' && window.getComputedStyle(solutionSecond).opacity === '1') {
        solutionFirst.style.border = 'none';  
        solutionFirst.style.borderRadius = '0';
        solutionSecond.style.border = 'none';
        solutionSecond.style.borderRadius = '0';
        solutionThird.style.border = 'none'; 
        solutionThird.style.borderRadius = '0';
        solutionFourth.style.border = 'none'; 
        solutionFourth.style.borderRadius = '0';
        return victory.style.display = 'flex'
         }   /////// условие ЗАВЕРШЕНИЯ - сложениея ВСЕГО пазла
};
/////////////

    itemSecond.onmouseup = function() {
        document.onmousemove = null;
        itemSecond.onmouseup = null;
        sol4.onmousemove = null;
        solutionFourth.style.zIndex = '0' // уменьшаю Зет индекс элемента решения при отжатии клавиши мыши
    };
};
////////////////////<=ПЕРЕДВИЖЕНИЕ ВТОРОГО КВАДРАТА РЕШЕНИЯ


//////////////////////////////////////////////<=ПЕРЕДВИЖЕНИЕ !!третьего!! КВАДРАТА РЕШЕНИЯ
itemThird.onmousedown = function(e) {
    itemThird.style.position = 'absolute';
    solutionSecond.style.zIndex = '1000'   //добавляю Зет индекс для того чтоб была возможность решить фрагмент
    moveAt(e);
    document.body.appendChild(itemThird);
   

    function moveAt(e) {
        itemThird.style.left = e.pageX - itemThird.offsetWidth - (itemThird.offsetWidth / 2) + 'px';
        itemThird.style.top = e.pageY - itemThird.offsetHeight - (itemThird.offsetHeight / 2) + 'px'
    }
    document.onmousemove = function(e) {
        moveAt(e);
    }
 ////////////////
 sol2.onmousemove = a
 function a () {
      
    solutionSecond.style.opacity = '1';    //при правильной постановке блока
    itemThird.style.display = 'none'
    solutionSecond.textContent = ''
    /////////////////////////
    if(window.getComputedStyle(solutionFirst).opacity === '1' && window.getComputedStyle(solutionFourth).opacity === '1' && window.getComputedStyle(solutionThird).opacity === '1' && window.getComputedStyle(solutionSecond).opacity === '1') {
        solutionFirst.style.border = 'none';  
        solutionFirst.style.borderRadius = '0';
        solutionSecond.style.border = 'none';
        solutionSecond.style.borderRadius = '0';
        solutionThird.style.border = 'none'; 
        solutionThird.style.borderRadius = '0';
        solutionFourth.style.border = 'none'; 
        solutionFourth.style.borderRadius = '0';
        return victory.style.display = 'flex'
         }   /////// условие ЗАВЕРШЕНИЯ - сложениея ВСЕГО пазла
};
/////////////

itemThird.onmouseup = function() {
        document.onmousemove = null;
        itemThird.onmouseup = null;
        sol2.onmousemove = null;
        solutionSecond.style.zIndex = '0' // уменьшаю Зет индекс элемента решения при отжатии клавиши мыши
    };
};
////////////////////<=ПЕРЕДВИЖЕНИЕ !!третьего!! КВАДРАТА РЕШЕНИЯ


//////////////////////////////////////////////<=ПЕРЕДВИЖЕНИЕ !!ЧЕТВЕРТОГО!! КВАДРАТА РЕШЕНИЯ
itemFourth.onmousedown = function(e) {
    itemFourth.style.position = 'absolute';
    solutionThird.style.zIndex = '1000'   //добавляю Зет индекс для того чтоб была возможность решить фрагмент
    moveAt(e);
    document.body.appendChild(itemFourth);
   

    function moveAt(e) {
        itemFourth.style.left = e.pageX - itemFourth.offsetWidth - (itemFourth.offsetWidth / 2) + 'px';
        itemFourth.style.top = e.pageY - itemFourth.offsetHeight - (itemFourth.offsetHeight / 2) + 'px'
    }
    document.onmousemove = function(e) {
        moveAt(e);
    }
 ////////////////
 sol3.onmousemove = a
 function a () {  
    solutionThird.style.opacity = '1';    //при правильной постановке блока
    itemFourth.style.display = 'none'
    solutionThird.textContent = ''
    /////////////////////////
    if(window.getComputedStyle(solutionFirst).opacity === '1' && window.getComputedStyle(solutionFourth).opacity === '1' && window.getComputedStyle(solutionThird).opacity === '1' && window.getComputedStyle(solutionSecond).opacity === '1') {
        solutionFirst.style.border = 'none';  
        solutionFirst.style.borderRadius = '0';
        solutionSecond.style.border = 'none';
        solutionSecond.style.borderRadius = '0';
        solutionThird.style.border = 'none'; 
        solutionThird.style.borderRadius = '0';
        solutionFourth.style.border = 'none'; 
        solutionFourth.style.borderRadius = '0';
        return victory.style.display = 'flex';
        
         }   /////// условие ЗАВЕРШЕНИЯ - сложениея ВСЕГО пазла
};
/////////////

itemFourth.onmouseup = function() {
        document.onmousemove = null;
        itemFourth.onmouseup = null;
        sol3.onmousemove = null;
        solutionThird.style.zIndex = '0' // уменьшаю Зет индекс элемента решения при отжатии клавиши мыши
    };
};
////////////////////<=ПЕРЕДВИЖЕНИЕ !!ЧЕТВЕРТОГО!! КВАДРАТА РЕШЕНИЯ

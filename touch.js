let item = [itemFirst, itemSecond, itemThird, itemFourth]
let solItem = [solutionFirst, solutionSecond, solutionThird, solutionFourth]
let count = 0                                  //количество сложеных пазлов

solutionFirst.onclick = fg                   //для настройки             (onmouseover)//window.getComputedStyle(solutionFirst).background
function fg (e) {
  config.innerHTML = 'положение мыши на левом верхем решении по У : ' + (e.clientY - solutionFirst.getBoundingClientRect().top)   
  + '<br>' + 'положение мыши на левом верхем решении по Х : ' + (e.clientX - solutionFirst.getBoundingClientRect().left)
  + '<br>' + 'ширина компонента: ' + solutionFirst.clientWidth
  + '<br>' + '*граница отступа слева внутри обьекта: ' + (solutionFirst.clientWidth / 4)
  + '<br>' + '*граница отступа справа внутри обьекта: ' + ( solutionFirst.clientWidth - solutionFirst.clientWidth / 4)
  + '<br>' + 'положение мыши на всей странице  ' + 'Y: ' + e.clientY + 'X: ' + e.clientX 
  + '<br>' + 'положение верхнего края solutionFirst относительно страницы: top(Y): ' + solutionFirst.getBoundingClientRect().top + '   left(X): '  + solutionFirst.getBoundingClientRect().left
  + '<br>' + 'координаты верхнего края(Y) вутренего отступа solutionFirst: ' + (solutionFirst.getBoundingClientRect().top + (solutionFirst.clientHeight / 3)) + 'нижнего (тоже Y): ' + (solutionFirst.getBoundingClientRect().top + (solutionFirst.clientHeight - solutionFirst.clientHeight / 3))
  + '<br>' + 'координаты левого края(Х) вутренего отступа solutionFirst: ' + (solutionFirst.getBoundingClientRect().left + (solutionFirst.clientWidth / 3)) + 'правого(тоже Х): ' + (solutionFirst.getBoundingClientRect().left + ( solutionFirst.clientWidth - solutionFirst.clientWidth / 3))
  + '<br>' +  '<br>' + 'рамки в которые нужно попасть по(У): ' + 'значение внутренего верхнего отступа (перемещяемого)' + "<=" + 'нижнего (тоже Y): ' + (solutionFirst.getBoundingClientRect().top + (solutionFirst.clientHeight - solutionFirst.clientHeight / 3))
   + ' "&&" значение внутренего нижнего отступа (перемещяемого)' + '>= ' + (solutionFirst.getBoundingClientRect().top + (solutionFirst.clientHeight / 3))
  + '<br>'  + '<br>' + 'рамки в которые нужно попасть по(Х): ' + 'значение внутреннего левого отступа (перемещяемого)' + "<=" + 'правого(тоже Х): ' + (solutionFirst.getBoundingClientRect().left + ( solutionFirst.clientWidth - solutionFirst.clientWidth / 3))
  + ' "&&" значение внутренего правого отступа (перемещяемого)' + (solutionFirst.getBoundingClientRect().left + (solutionFirst.clientWidth / 3))
} 

let canMove = false;
let first = {}
//<=<=<=<=
item.forEach(i => {                                 
    i.addEventListener('touchstart', (e) => {
        i.style.position = 'absolute' 
        canMove = true
        i.style.margin = '0'
    
       // solutionFirst.style.zIndex = '1000' 
        //let coords = getCoords(itemFirst);
       let x = i.getBoundingClientRect().left + pageXOffset
       let y = i.getBoundingClientRect().top + pageYOffset
        /**/first.x = e.touches[0].clientX - x
       /**/ first.y = e.touches[0].clientY - y
    })
} );
//<=<=<=
item.forEach(i => {
    i.addEventListener('touchmove', (e) => {
        if(canMove) {
            i.style.left = e.touches[0].clientX - first.x  + 'px'; 
            i.style.top = e.touches[0].clientY - first.y + 'px'; 
        }
       // if(i.style.top)
       solItem.forEach(j => {
            if(i.getBoundingClientRect().top + (i.clientHeight / 3) <=  j.getBoundingClientRect().top + (j.clientHeight - j.clientHeight / 3) && i.getBoundingClientRect().top + (i.clientHeight - i.clientHeight / 3) >= j.getBoundingClientRect().top + (j.clientHeight / 3)
            &&  i.getBoundingClientRect().left + (i.clientWidth / 3) <= j.getBoundingClientRect().left + ( j.clientWidth - j.clientWidth / 3) &&  i.getBoundingClientRect().left + ( i.clientWidth - i.clientWidth / 3) >= j.getBoundingClientRect().left + (j.clientWidth / 3) 
            && window.getComputedStyle(i).background === window.getComputedStyle(j).background ) {
                //alert('qwe')
                i.style.display = 'none'
                j.style.opacity = '1'
               count++
            }
        }); // закрытие скобоп для solItem.forEach
            if(count === item.length) {
                solItem.forEach(j => {
                    j.style.border = 'none';  
                    j.style.borderRadius = '0';
                    victory.style.display = 'flex'
                });
            }
    })
});
//<=<=<=<=
item.forEach(i => {
    i.addEventListener('touchend', () => {
        canMove = false;
       // alert(window.getComputedStyle(i).background === window.getComputedStyle(solutionFirst).background)                пример проверки изрбражения
       //alert(i.style.top)
    }) 
});
//<=<=<=
item.forEach(i => {
    i.addEventListener('touchcancel', () => {
        canMove = false;
    })
});

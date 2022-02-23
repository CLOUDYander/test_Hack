el.onclick = function() {
    document.getElementById("botton-panel").style = "margin-top: 0px";
    out.insertAdjacentHTML('beforebegin', '<div id="outblock" class="opacity-block"><div class="flex-name"><h1>Ель</h1><img src="img/pen.svg"></div><p>Возраст дерева: 1 год.</p><p>Местоположение дерева:<br>парк 30-летия Октября </p><p>Разновидность дерева:<br>ель, хвойное вечнозелёное дерево с кроной конусообразной формы</p><p>  Дата посадки: 01.01.2022 </p></div>');
    setTimeout(del, 10000);
}
yasen.onclick = function() {
    document.getElementById("botton-panel").style = "margin-top: 0px";
    out.insertAdjacentHTML('beforebegin', '<div id="outblock" class="opacity-block"><div class="flex-name"><h1>Ясень</h1><img src="img/pen.svg"></div><p>Возраст дерева: 2 год.</p><p>Местоположение дерева:<br>парк 30-летия Октября </p><p>Разновидность дерева:<br>род древесных растений из семейства Маслиновые</p><p>  Дата посадки: 02.01.2022 </p></div>');
    setTimeout(del, 10000);
}
function del(){
    document.getElementById("botton-panel").style = "margin-top: 1320px";
    outblock.remove();
}

 

var addItemId = 0;
function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId)
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var tit = document.createElement('div');
    tit.innerText = item.children[2].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[1].innerText;
    var select = document.createElement('span')
    select.innerText = item.children[2].value;
    label.append(select);
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick', 'del('+addItemId+')');
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(tit);
    // selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}

function del(item) {
    document.getElementById(item).remove();
}

var removeCartItemButtons = document.getElementsByClassName('clear')
// console.log( removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click',function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}

var noti = document.querySelector('.head')
var button = document.getElementsByTagName('button');
for(but of button)
{
    but.addEventListener('click', (e)=>{
        var add = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');
    })
}
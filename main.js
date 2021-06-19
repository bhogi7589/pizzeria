menu = ["Veg Margherita Pizza", "Deluxe Veg Pizza", "Mexican Green Wave", "Veggie Paradise"];
menu.sort();

function getmenu(){
    var inner = "";
    for (var i = 0; i < menu.length; i++) {
        var nexti = i + 1;
        inner += nexti.toString() + ". " + menu[i] + "<br>";
    }
    document.getElementById("menu").innerHTML = inner;
}

function add_item(){
    var item = document.getElementById("item_to_add").value;
    menu.push(item);
    menu.sort();
    getmenu();
    var inner = "";
    for (var i = 0; i < menu.length; i++) {
        var str = '<div class="template"><img src="images/pizzaImg.png"><p>' + menu[i] + '</p></div>';
        inner += str;
    }
    document.getElementById("added").innerHTML = inner;
    document.getElementById("item_to_add").value = "";
}
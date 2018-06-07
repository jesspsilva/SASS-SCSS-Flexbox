var items = ['Dresses', 'T-shirts', 'Shorts', 'Coats', 'Jeans', 'Bikinis'];
for (var i in items) {
    var newItem = document.createElement('div');
    newItem.className = "shop-items";

    document.getElementsByClassName('shop')[0].appendChild(newItem);

}

for (var i in items) {
    var newItemDescription = document.createElement('button');
    newItemDescription.setAttribute("type", "button");
    newItemDescription.className = "shop-items_button";
    newItemDescription.innerHTML = items[i];
    document.getElementsByClassName('shop-items')[i].appendChild(newItemDescription);
}


for (var i in items) {
    var image = items[i];
    var urlString = 'url(assets/' + image + '.jpeg)';
    document.getElementsByClassName('shop-items')[i].style.backgroundImage = urlString;
}

for (var i in items) {
    var src = items[i] + '.html';
    var href = "window.location.href=" + "'" + src + "'";
    document.getElementsByClassName('shop-items_button')[i].setAttribute("onclick", href);
}

//var p = {
// "p1": "value1",
//  "p2": "value2",
//  "p3": "value3"
//};

//for (var key in p) {
//  if (p.hasOwnProperty(key)) {
//    console.log(key + " -> " + p[key]);
// }
//}
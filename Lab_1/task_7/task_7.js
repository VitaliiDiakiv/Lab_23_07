const mod = require('custommodules');

// Додавання портів
let port1 =mod.add_Port("Port_1");
let port2 =mod.add_Port("Port_2");
let port3 =mod.add_Port("Port_3");
let port4 =mod.add_Port("Port_4");

// Список портів
mod.get_Port_List();

// Видалення порту
console.log("Видалення порта: Port_4");
mod.remove_Port(port4);

// Список портів
mod.get_Port_List();

// Зміна портів
console.log("Зміна порта: Port_2");
mod.edit_Port("Port_2",  "Port_222");

// Список портів
mod.get_Port_List();

// Пошук порту
let port_1 = mod.find_Port("Port_1");
console.log(`Пошук порту Port_1: ${port_1 !== -1 ? "знайдено" : "не знайдено"}`);
let port_2 = mod.find_Port("Port_5");
console.log(`Пошук порту Port_5: ${port_2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання кораблів
let ship1 =mod.add_Ship("Millenial Spirit", "Moldova");
let ship2 =mod.add_Ship("Namura Queen", "Panama");
let ship3 =mod.add_Ship("Helt", "Estonia");
let ship4 =mod.add_Ship("Lehmann","Germany");


// Список кораблів у порті Port_1
mod.get_Ship_List(port1);

// Видалення корабля
console.log("Видалення корабля: Helt");
mod.remove_Ship("Helt", "Estonia");

// Список кораблів у порті Port_1
mod.get_Ship_List(port1);

// Редагування корабля
console.log("Редагування корабля: Namura Queen");
mod.edit_Ship("Namura Queen", "Panama", "Queen", "Panama");

// Список кораблів у порті Port_1
mod.get_Ship_List(port1);

// Пошук корабля
let doc1 = mod.find_Ship("Lehmann","Germany", port1);
console.log(`Пошук корабля - Lehmann: ${doc1 !== -1 ? "знайдено" : "не знайдено"}`);
let doc2 = mod.find_Ship("Mamura ", "Panama", port1);
console.log(`Пошук корабля - Mamura: ${doc2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання пристані
mod.add_Pier(port1.name,"Pier_1");
mod.add_Pier(port1.name,"Pier_2");
mod.add_Pier(port1.name,"Pier_3");

// Список пристаней у порті Port_1
mod.get_Piers_List(port1);

// Видалення пристані
console.log("Видалення пристані: Pier_3");
mod.remove_Pier(port1,"Pier_3" );

// Список пристаней у порті Port_1
mod.get_Piers_List(port1);

//Додавання кораблів на пристань
mod.add_Ship_to_Pier(ship1, port_1.pierList[0]);
mod.add_Ship_to_Pier(ship2, port_1.pierList[0]);
mod.add_Ship_to_Pier(ship3, port_1.pierList[0]);

//Список кораблів на пристані
mod.show_Ships_on_Pier(port_1.pierList[0]);

//Видалення корабля з пристані
console.log("Видалення корабля : Helt");
mod.remove_ship_from_Pier(ship3, port_1.pierList[0]);

//Список кораблів на пристані
mod.show_Ships_on_Pier(port_1.pierList[0]);



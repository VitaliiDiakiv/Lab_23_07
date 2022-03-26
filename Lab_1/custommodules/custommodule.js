//Класс Порт
class Port {
    constructor(name) {
        this.name = name;
        this.pierList = [];
        this.shipList = [];

        if (typeof name === 'undefined')    { this.name = "Невідомий порт"; }
    }
}
// Список усіх портів
let global_port_List = [];
//Функція пошуку порту в колекції
exports.find_Port = (name) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let port = global_port_List[i];
        if (port.name === name) {
            return port;
        }
    }
    return -1;
}

//Додавання порту в колекцію
exports.add_Port = (name) => {
    let port = new Port(name);
    global_port_List.push(port);

    return port;
}

//Видалення порту з колекції
exports.remove_Port = (port) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let portRem = global_port_List[i];
        if (portRem.name === port.name) {
            global_port_List.splice(i, 1);
            return 1;
        }
    }
    return -1;
}

//Редагування порту в колекції
exports.edit_Port = (name, new_Name) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let port = global_port_List[i];
        if (port.name === name) {
            global_port_List[i].name = new_Name;
            return 1;
        }
    }
    return -1;
}

//Вивід всіх портів в колекції
exports.get_Port_List = () => {
    console.log("Port list : ");
    for (let i = 0; i < global_port_List.length; i++) {
        let port = global_port_List[i];
        console.log(`\tPort name : ${port.name}`);
    }
    console.log();
    return global_port_List;
}

////////////////////////////////////////////////////////////////////////////////////

//Клас Пристань
class Pier {
    constructor(name) {
        this.name = name;
        this.shipList = [];

        if (typeof name === 'undefined') { this.name = "Невідома пристань"; }
    }
}

//Додавання пристані до порту
exports.add_Pier = (port_name, pier_name) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let port = global_port_List[i];
        if (port.name === port_name) {
            port.pierList.push(new Pier(pier_name));
            return 1;
        }
    }
    return -1;
}

//Видалення пристані із порту
exports.remove_Pier = (port, pier_name) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let portG = global_port_List[i];
        if (portG.name === port.name) {
            for (let j = 0; j < port.pierList.length; j++) {
                let pier = port.pierList[j];
                if (pier.name === pier_name) {
                    portG.pierList.splice(j, 1);
                    return 1;
                }
            }
        }
    }
    return -1;
}

//Вивід пристаней в порті
exports.get_Piers_List = (port) => {
    console.log("Pier list : ");
    for (let i = 0; i < port.pierList.length; i++) {
        let hort = port.pierList[i];
        console.log(`\tPier name : ${hort.name}`);
    }
    console.log();
    return port.pierList;
}

//Функція повернення дати і часу
get_Date = () => {
    let today = new Date();
    return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "-" +today.getHours() + ":" + today.getMinutes();
}

//Додавання корабля на пристань
exports.add_Ship_to_Pier = (ship, pier) => {
    if (pier.shipList.length < 4) {
        pier.shipList.push(ship);
        ship.arriveTime = get_Date();
        return 1;
    } else {
        console.log("Pier is full");
        return -1;
    }
}

//Видалення корабля із пристані
exports.remove_ship_from_Pier = (ship, pier) => {
    for (let i = 0; i < pier.shipList.length; i++) {
        let shipAdd = pier.shipList[i];
        if (shipAdd.name === ship.name) {
            pier.shipList.splice(i, 1);
            for (let j = 0; j < global_ship_List.length; j++) {
                let removeShip = global_ship_List[j];
                if (removeShip.name === ship.name) {
                    removeShip.leaveTime = get_Date();
                }
            }
            return 1;
        }
    }
}

//Функція виводу кораблів на пристані
exports.show_Ships_on_Pier = (pier) => {
    console.log(`\nShips on ${pier.name} : `);
    for (let i = 0; i < pier.shipList.length; i++) {
        let ship = pier.shipList[i];
        console.log(`\tShip name : ${ship.name}`);
    }
    console.log();
    return pier.shipList;
}

////////////////////////////////////////////////////////////////////////////////////

//Клас Корабель
class Ship {
    constructor(name,country) {
        this.name = name;
        this.country = country;
        this.arriveTime = "";
        this.leaveTime = "";

        if (typeof name === 'undefined') { this.name = "Невідомий корабель"; }
        if (typeof country === 'undefined') { this.country = "Невідомий корабель"; }
    }

}

// Список усіх кораблів
let global_ship_List = [];

//Пошук  корабля в колекції
exports.find_Ship = (name) => {
    for (let i = 0; i < global_ship_List.length; i++) {
        let ship = global_ship_List[i];
        if (ship.name === name) {
            return ship;
        }
    }
    return -1;
}

//Додавання корабля в колекцію
exports.add_Ship =(name, country) => {
    let ship = new Ship(name, country);
    global_ship_List.push(ship);

    return ship;
}

//Видалення корабля із колекції
exports.remove_Ship = (name,country) => {
    for (let i = 0; i < global_ship_List.length; i++) {
        let ship = global_ship_List[i];
        if (ship.name === name) {
            global_ship_List.splice(i, 1);
            return 1;
        }
    }
    return -1;
}

//Редагування корабля в колекції
exports.edit_Ship = (name, country,new_Name,new_Country)=>{
    for (let i = 0; i < global_ship_List.length; i++) {
        let ship = global_ship_List[i];
        if (ship.name === name && ship.country===country) {
            global_ship_List[i].name = new_Name;
            global_ship_List[i].country=new_Country;
            return 1;
        }
    }
    return -1;
}
//Вивід всіх кораблів колекції
exports.get_Ship_List = () =>{
    console.log("\n"+`Ship list :`);
    for (let i = 0; i < global_ship_List.length; i++) {
        let ship = global_ship_List[i];
        console.log(`\tShip name : ${ship.name}, country: ${ship.country}`);
    }
    console.log();
    return global_ship_List;
}

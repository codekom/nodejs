const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',function(x,y){
    console.log('Tutorial Event: ',x+y);
});
eventEmitter.emit('tutorial',3,7);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
let koms = new Person('Komal');
koms.on('name',function(){
    console.log('I am '+koms.name);
});
koms.emit('name');

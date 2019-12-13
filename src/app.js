import { alertMessage, gretting } from './modules/alertMessage';
import Person from './modules/Person';

const na = alertMessage;

// alertMessage('Hellow world');
// na('Hello world!');
gretting();

const diego = new Person('Diego Salas', 23);
const juan = new Person('Juan Jimenez', 21);
diego.showInfo();
juan.showInfo();

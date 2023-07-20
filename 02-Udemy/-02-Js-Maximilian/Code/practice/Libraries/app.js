// import {_} from "./lodash.min";

const customers = ['Max', 'Manuel', 'Anna'];
const activeCustomers = ['Max', 'Anna'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
import {Costumer,Seller,Admin} from "../common/dataclass.js"
import {users,products,cart} from "../common/staticdata.js"
import {storageModule} from "../common/storageModule.js"

storageModule.setItem('products',products);
storageModule.setItem('users',users);



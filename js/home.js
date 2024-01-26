
import {users,products,orders,ordersHistory ,currentUser,cart} from "../common/staticdata.js"
import {storageModule} from "../common/storageModule.js"
import { IDGenerator } from "../common/idclass.js";


storageModule.setItem('products',products);
storageModule.setItem('users',users);


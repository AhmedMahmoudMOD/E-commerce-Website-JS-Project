let IDGenerator  = {
  UserID : 10,
  ProductID : 50,
  OrderID : 0,
  generateID(type)  {
        switch (type.toLowerCase()) {
            case "user":
                return "U" + ++IDGenerator.UserID;
            case "product":
                return "P" + ++IDGenerator.ProductID;
            case "order":
                return "O" + ++IDGenerator.OrderID;
        } 
    }
};
export {IDGenerator};
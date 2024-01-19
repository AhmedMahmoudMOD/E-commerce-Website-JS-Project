export class IDGenerator {
    static UserID = 10;
    static ProductID = 50;
    static OrderID = 0;
    static generateUserID(type) {
        switch (type) {
            case "user":
                return "U" + ++IDGenerator.UserID;
            case "product":
                return "P" + ++IDGenerator.ProductID;
            case "order":
                return "O" + ++IDGenerator.OrderID;
        } 
    }
}
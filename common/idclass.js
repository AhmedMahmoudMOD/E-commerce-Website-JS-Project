let IDGenerator = {
 generateUserId : () =>  {
    let userId = localStorage.getItem('userId') || 10;
    userId++;
    localStorage.setItem('userId', userId);
    return 'U' + userId;
  },


// Function to generate unique product ID
  generateProductId : () => {
    let productId = localStorage.getItem('productId') || 50;
    productId++;
    localStorage.setItem('productId', productId);
    return 'P' + productId;
  },
  
  // Function to generate unique order ID
   generateOrderId : () => {
    let orderId = localStorage.getItem('orderId') || 0;
    orderId++;
    localStorage.setItem('orderId', orderId);
    return 'O' + orderId;
  },

}

export {IDGenerator};
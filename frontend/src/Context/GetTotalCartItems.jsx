
const GetTotalCartItems = (cartItems) => {
    let totalItem = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0){
            totalItem += cartItems[item];
        }
    }
  return totalItem;
}

export default GetTotalCartItems
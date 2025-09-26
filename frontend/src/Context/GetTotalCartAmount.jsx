
const GetTotalCartAmount = (cartItems,all_product) => {
    let totalAmout = 0;
    for(const item in cartItems){
        if (cartItems[item]>0){
            let itemInfo = all_product.find((Product)=>Product.id === Number(item));
            if(itemInfo){
                totalAmout += itemInfo.new_price * cartItems[item];
            }
        }
    }

  return totalAmout
}

export default GetTotalCartAmount
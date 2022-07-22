//Centralized State (Rdux Store) for all compoments in the application.
const InitialState = {
  CartItems: [{
    id: 3,
    title: "IPHONE 13 PRO MAX 3",
    desc: "lorem ispsum",
    img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
    // Price and Price Quantity must be same
    price: 33,
    priceQuantity:33, 
    quantity:1,
    category:"phones",
    popular:"yes",
    "Main Features": "RAM : 4 GB | ROM : 32 GB",
    specs:{
        RAM: "4 GB",
        ROM: "32 GB",
        "Dual SIM": "YES",
        Battery: "Li-Ion 3240 mAh, non-removable (12.41 Wh)",
        "Main Camera": "12 MP, f/1.6, 26mm (wide), 1.7µm, dual pixel PDAF, sensor-shift OIS",
    },
    colors:{
        color1: "58FF33",
        color2: "FF33F3",
        color3: "3346FF",
    },
},{
  id: 1,
  title: "IPHONE 13 PRO",
  desc: "Apple iPhone 13 Pro smartphone. Announced Sep 2021. Features 6.1″ display, Apple A15 Bionic chipset, 3095 mAh battery, 1024 GB storage, 6 GB RAM.",
  img: "https://gagadget.com/media/post_big/iphone-13-pro-review-dan-baker-35_gAtW7pC.jpg",
  // Price and Price Quantity must be same
  price: 220000,
  priceQuantity:220000, 
  quantity:2,
  category:"phones",
  popular:"yes",
  "Main Features": "A15 Bionic chipset | 256 GB ROM | 6 GB RAM",
  specs:{
      RAM: "6 GB",
      ROM: "256 GB",
      "Network Technology": "GSM / CDMA / HSPA / EVDO / LTE / 5G",
      "Announced": "2021, September 14",
      "Status": "Available. Released 2021, September 24",
      "Dimensions": "146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)",
      "Weight": "204 g (7.20 oz)",
      "Card slot": "No",
      "Internal": "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
      "MAIN CAMERA": "12 MP, f/1.5, 26mm (wide), 1.9µm, dual pixel PDAF, sensor-shift OIS",
      "SELFIE CAMERA": "12 MP, f/2.2, 23mm (wide), 1/3.6",
      "Loudspeaker": "Yes, with stereo speakers",
      "WLAN": "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      "Sensors": "Face ID, accelerometer, gyro, proximity, compass, barometer",
      "BATTERY": "Li-Ion 3095 mAh, non-removable (12.11 Wh)",
  },
  colors:{
      color1: "58FF33",
      color2: "FF33F3",
      color3: "3346FFX",
  },
},{
  id: 0,
  title: "MACBOOK PRO 13-inch",
  desc: "M2 is the next generation of Apple silicon. Its 8-core CPU lets you zip through everyday tasks like creating documents and presentations, or take on more intensive workflows like developing in Xcode or mixing tracks in Logic Pro.",
  img: "https://149426355.v2.pressablecdn.com/wp-content/uploads/2020/05/13pro-keyboard.jpg",
  // Price and Price Quantity must be same
  price: 320000,
  priceQuantity:320000, 
  quantity:2,
  category:"laptops",
  popular:"yes",
  "Main Features": "8-Core CPU | 10-Core GPU",
  specs:{
      "Display": "Retina display",
      "Battery and Power": "4Up to 20 hours Apple TV app movie playbackGB",
      "Memory": "8GB unified memory",
      "Storage": "256GB SSD",
      "Charg­ing and Expan­sion": "Two Thunderbolt / USB 4 ports",
      "Key­board and Track­pad": "Backlit Magic Keyboard",
      "Wireless": "Wi-Fi 802.11ax Wi-Fi 6 wireless networking",
      "Bluetooth": "Bluetooth 5.0 wireless technology",
      "Camera": "720p FaceTime HD camera",
      "Audio": "Stereo speakers with high dynamic range",
      "Display Support": "Native DisplayPort output over USB‑C",
  },
  colors:{
      color1: "58FF33",
      color2: "FF33F3",
      color3: "3346FF",
  },
},],
  TotalCartItems: 3,
  totalPriceCartItems:1234,
};
const CartItemReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "ItemAddedCart":{
      //Getting the quanity of all Items in cart and storing to TotalCartItems
      let TotalCartIterator=0;
      for(const item of state.CartItems){
        console.log(item.quantity);
        console.log("--------");
        // Getting previous total items in cart;
        TotalCartIterator=TotalCartIterator+item.quantity;
      }
      //For new prodcut added to cart;
      ++TotalCartIterator;
      return {
        // returning a copy of orignal state
        ...state, //spreading the original state
        CartItems: [...state.CartItems, action.payload], // new CartItem array
        // Updating the cart total quantity
        TotalCartItems:TotalCartIterator,
      };
    }
    case "ItemDeletedCart":{
      const itemquantity=action.payload.quantity;

      return {
        // returning a copy of orignal state
        ...state, //copying the original state
        CartItems: state.CartItems.filter((todo) => todo.id !== action.payload.id),
        TotalCartItems:state.TotalCartItems-itemquantity
      };
    }
      
    case "IncreaseQuantity": {
      //Getting the quanity of all Items in cart and storing to TotalCartItems
      let TotalCartIterator=0;
      for(const item of state.CartItems){
        console.log(item.quantity);
        console.log("--------");
        // Getting previous total items in cart;
        TotalCartIterator=TotalCartIterator+item.quantity;
      }
      //For new prodcut added to cart;
      ++TotalCartIterator;
      const index = state.CartItems.findIndex(
        (CartItem) => CartItem.id === action.payload
      ); //finding index of the item                                                                      
      const newArray = [...state.CartItems]; //making a new array
      newArray[index].quantity++; //changing value in the new array
      return {
        ...state, //copying the orignal state
        CartItems: newArray, //reassingning CartItem to new array
        TotalCartItems:TotalCartIterator,
      };
    }
    case "DecreaseQuantity": {
      //Getting the quanity of all Items in cart and storing to TotalCartItems
      let TotalCartIterator=0;
      for(const item of state.CartItems){
        console.log(item.quantity);
        console.log("--------");
        // Getting previous total items in cart;
        TotalCartIterator=TotalCartIterator+item.quantity;
      }
      //For new prodcut added to cart;
      
      const index = state.CartItems.findIndex(
        (CartItem) => CartItem.id === action.payload
      ); //finding index of the item                                                                      
      const newArray = [...state.CartItems]; //making a new array
      newArray[index].quantity--; //changing value in the new array
      //Preventing quantity to be zero or negative;
      const qunatity = newArray[index].quantity;
      if (qunatity < 1) {
        newArray[index].quantity = 1;
      }else{
        --TotalCartIterator;
      }
      return {
        ...state, //copying the orignal state
        CartItems: newArray, //reassingning CartItem to new array
        TotalCartItems:TotalCartIterator,
      };
    }
    default:
      return state;
  }
};
export default CartItemReducer;

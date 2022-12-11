const initialState = {
  name: "Kabir",
};

const myReducer = (defaultStoreData = initialState, action) => {
  switch (action.type) {
    case "NAME":
      defaultStoreData = {
        name: action.payload,
      };
      break;
  }
  return defaultStoreData;
};

export default myReducer;

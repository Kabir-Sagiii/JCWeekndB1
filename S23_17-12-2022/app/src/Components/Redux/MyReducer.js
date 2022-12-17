const initialState = {
  name: "Kabir",
  users: [],
};

const myReducer = (defaultStoreData = initialState, action) => {
  switch (action.type) {
    case "NAME":
      defaultStoreData = {
        name: action.payload,
      };
      break;

    case "USERS":
      defaultStoreData = {
        ...defaultStoreData,
        users: action.payload,
      };
      break;
  }
  return defaultStoreData;
};

export default myReducer;

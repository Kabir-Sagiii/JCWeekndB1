var intialValue = {
  cityname: "",
};

const cityReducer = (state = intialValue, action) => {
  switch (action.type) {
    case "CITY":
      state = {
        cityname: action.payload,
      };
      break;
  }
  return state;
};

export default cityReducer;

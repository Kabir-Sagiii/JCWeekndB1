const cityAction = (data, dispatch) => {
  dispatch({
    type: "CITY",
    payload: data,
  });
};

export default cityAction;

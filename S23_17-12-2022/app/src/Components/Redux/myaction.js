import myStore from "./Store";

const myaction = (componentdata) => {
  myStore.dispatch({
    type: "NAME",
    payload: componentdata,
  });
};

export const usersAction = (usersdata, dispatch) => {
  dispatch({
    type: "USERS",
    payload: usersdata,
  });
};

export default myaction;

import myStore from "./Store";

const myaction = (componentdata) => {
  myStore.dispatch({
    type: "NAME",
    payload: componentdata,
  });
};

export default myaction;

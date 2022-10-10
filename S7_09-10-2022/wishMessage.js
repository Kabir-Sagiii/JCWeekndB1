//gm - Good Morning, Kabir

//ga - Good Afternoon Kabir

//gn - Good Night Kabir

function wishMessage(message) {
  if (message === "gm") {
    console.log("Good Morning, Kabir");
  } else if (message === "ga") {
    console.log("Good Afternoon, Kabir");
  } else if (message === "gn") {
    console.log("Good Night, Kabir");
  } else {
    console.log("No wish Message For Kabir");
  }
}

wishMessage("gm");

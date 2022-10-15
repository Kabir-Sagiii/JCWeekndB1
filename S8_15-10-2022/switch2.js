function wishMessage(message) {
  switch (message) {
    case "gm":
      console.log("Good Morning, Kabir");
      break;

    case "ga":
      console.log("Good Afternoon, Kabir");
      break;

    case "ge":
      console.log("Good Evening, Kabir");
      break;

    case "gn":
      console.log("Good Night, Kabir");
      break;

    default:
      console.log("No wish Message For Kabir");
  }
}

wishMessage("gm"); // Good Morning, Kabir
wishMessage("ga"); //Good Afternoon, Kabir
wishMessage("ge"); //Good Evening, Kabir
wishMessage("gn"); //Good Night, Kabir
wishMessage("gmcsajbcjb"); // No Wish Message for Kabir

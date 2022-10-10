function printRole(experience) {
  if (experience >= 0 && experience <= 2) {
    console.log("Junior Developer");
  } else if (experience >= 3 && experience <= 5) {
    console.log("Senior Developer");
  } else if (experience >= 6 && experience <= 8) {
    console.log("Team Lead");
  } else if (experience >= 9 && experience <= 12) {
    console.log("Project Manager");
  } else {
    console.log("Software Architect");
  }
}

printRole(11);

// studentHogwarts module
const studentHogwarts = () => {
    let privateScore = 0;
    let name = null;
  
    const changeScoreBy = (points) => {
      privateScore += points;
    };
  
    return {
      setName: (newName) => {
        name = newName;
      },
      rewardStudent: () => {
        changeScoreBy(1);
      },
      penalizeStudent: () => {
        changeScoreBy(-1);
      },
      getScore: () => {
        return `${name}: ${privateScore}`;
      },
    };
  };
  
  // Creating instances of studentHogwarts
  const harry = studentHogwarts();
  harry.setName("Harry");
  
  const draco = studentHogwarts();
  draco.setName("Draco");
  
  // Performing actions on students
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  
  // Logging scores to the console
  console.log(harry.getScore());
  console.log(draco.getScore());
  
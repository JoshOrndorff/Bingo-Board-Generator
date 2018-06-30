"use strict"

window.addEventListener("DOMContentLoaded", () => {

  var boardDim = 5
  var defaultActivities = `Balerinas join the party\nSomeone climbs the balcony\nBricky sighting`
  var defaultNumBoards = 25

  var activitiesBox = document.getElementById("activities")
  var boardsContainer = document.getElementById("boards")
  var genButton = document.getElementById("generate-button")
  var numBoardsBox = document.getElementById("num-boards")

  // Check for user-supplied values, and use defaults if necessary
  if(activitiesBox.value === ""){
    activitiesBox.value = defaultActivities
  }
  if(numBoardsBox.value === ""){
    numBoardsBox.value = defaultNumBoards
  }


  // Handle clicks on the generate button
  genButton.addEventListener("click", () => generateBoards())

  /**
   * Generates the DOM-supplied number of boards, replacing any previous boards.
   */
  function generateBoards() {
    // Validate activities
    var activities = activitiesBox.value.split("\n")
    if (activities.length < boardDim ** 2){
      alert("You have entered " + activities.length + " of the minimum" + boardDim ** 2 + " activities.")
      return
    }

    //TODO Validate number of boards
    var numBoards = parseInt(numBoardsBox.value)

    // Clear out old boards
    boardsContainer.innerHTML = ""

    // Create the requested number of new boards
    while (numBoards-- > 0) {
      let nameLine = document.createElement("h1")
      nameLine.innerHTML = "Player Name: ______________________"
      boards.append(nameLine)

      let newBoard = document.createElement("div")
      newBoard.classList.add("board")
      generateBoard(newBoard, activities)
      boards.append(newBoard)
    }
  }

  /**
   * Generates one bingo board in the given element from the given activities.
   * @param div The div element to populate with a board
   * @param activs The activities to choose from when generating.
   */
  function generateBoard(div, activs){
    // Duplicate the activities so we can safely mutate them
    var activities = activs.slice()

    // Make all the boxes and insert them
    for(var i = 0; i < boardDim ** 2; i++){
      // Special case to get center text
      var text;
      if (i == Math.floor((boardDim **2)/2)){
        text = "Have a drink"
      }
      else {
        var index = Math.floor(Math.random()*activities.length)
        text = activities[index]
        activities.splice(index, 1)
      }

      // Make the element
      var box = document.createElement("div")
      box.classList.add("box")
      box.innerHTML = text
      div.append(box)
    }
  }

})

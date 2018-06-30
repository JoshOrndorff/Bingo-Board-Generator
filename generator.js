"use strict"

window.addEventListener("DOMContentLoaded", () => {

  var boardDim = 5
  var numBoards = 3
  var defaultActivities = `Balerinas join the party\nSomeone climbs the balcony\nBricky sighting`

  var activitiesBox = document.getElementById("activities")
  var boardsContainer = document.getElementById("boards")
  var genButton = document.getElementById("generate-button")

  // If there are no activities, use the defaults
  if(activitiesBox.value === ""){
    activitiesBox.value = defaultActivities
  }

  // Handle clicks on the generate button
  genButton.addEventListener("click", () => generateBoards(numBoards))

  /**
   * Generates the given number of boards replacing any previously generated boards.
   * @param n the number of boards to generate
   */
  function generateBoards(n) {
    // Clear out old boards
    boardsContainer.innerHTML = ""

    // Create the requested number of new boards
    while (n-- > 0) {
      let nameLine = document.createElement("h1")
      nameLine.innerHTML = "Player&nbsp;Name:&nbsp;______________________"
      boards.append(nameLine)

      let newBoard = document.createElement("div")
      newBoard.classList.add("board")
      generateBoard(newBoard)
      boards.append(newBoard)
    }
  }


  /**
   * Generates one bingo board in the given element.
   * @param div The div element to populate with a board
   */
  function generateBoard(div){
    // Get activities from DOM and confirm there are enough
    var activities = activitiesBox.value.split("\n")
    if (activities.length < boardDim ** 2){
      alert("You have entered " + activities.length + " of the minimum" + boardDim ** 2 + " activities.")
      return
    }

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

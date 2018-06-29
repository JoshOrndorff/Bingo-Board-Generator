"use strict"

window.addEventListener("DOMContentLoaded", () => {

  var boardDim = 5
  var defaultActivities = `Balerinas join the party\nSomeone climbs the balcony\nBricky sighting`

  var activitiesBox = document.getElementById("activities")
  var boardContainer = document.getElementById("board")
  var genButton = document.getElementById("generate-button")

  // If there are no activities, use the defaults
  if(activitiesBox.value === ""){
    activitiesBox.value = defaultActivities
  }

  // Add click listener to generate button
  genButton.addEventListener("click", generateOne)


  /**
   * Generates one bingo board
   */
  function generateOne(){
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
      boardContainer.append(box)
    }
  }

})

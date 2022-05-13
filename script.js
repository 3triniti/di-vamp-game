/**
 * JS API Function to use are:
 *
 * alert(); - standard text for read-only
 * let answer = confirm(); - yes or no questions
 * let otherAnswer = prompt(); - open ended questions
 *
 */
let playerName;
let playerAge;
let wantsToPlay;
let PerformanceNavigationTiming;

const continueTheGame = () => {
  alert("Thank you for playing with me!");
};

const startAdventure = () => {
  alert("Lets's go on an adventure!'");
  playerName = prompt("What's your name?");
  alert(`Hello ${playerName}, it's nice to meet you.`);
  playerAge = prompt("Do you mind if I ask how old you are");

  if (playerAge < 18) {
    return alert("Sorry but you must be at 18 to play");
  }

  wantsToPlay = confirm("Do you want to play a game with me?");

  if (wantsToPlay) {
    alert("YAY! 🎉");
    continueTheGame();
  } else {
    alert("FINE! 😡");
  }
  gameName = prompt("The Light and the Lair");
  alert("Save the people from the vampires");
  if (playerWin === PerformanceNavigationTiming) {
    alert("YAY! 🎉");
    continueTheGame("Do you want to go to level 2?");
  } else if (playerLose === PerformanceNavigationTiming) {
    alert("FINE! 😡");
    continueTheGame("Do you want to try again?");
  } else if (playerLose === PerformanceNavigationTiming) {
    alert("FINE! 😡");
    endTheGame("Thank you for playing, Goodbye");
  } else if (playerWin === PerformanceNavigationTiming) {
    alert("YAY! 🎉");
    endTheGame("Thank you for playing, Goodbye");
  }
  wantsToPlay = confirm(
    "You are the last of the DayWalkers, but, there are three VIP's who are trapped in the basement of the Federal Trust building, the basement is setup like a maze, and you will need to hurry and find them, because there are three vampires lurking in the shadows. I have equiped you with UV light grenades, that if you use it at the right time, will send the vampires back into hiding.  Make sure you use them as needed, you only have three.  If the vampires get to the VIP's before you, you lose, are you sure you want to continue?"
  );
  if (wantsToPlay) {
    alert("GREAT!! Lets Go!");
    continueTheGame();
  } else {
    alert("Alright, well have a great day!");
  }
};
userAnswer = prompt(
  "You have just entered the rear of the basement level, and walked down a flight of stairs into the shadows.  You have used your vampire strength to break through the door, but now the Adventure begins.  Do you go Left or Right!!??"
);

if (userAnswer === "left") {
  // ("You have great intuition.  But, you have come to a door.  Who knows what is on the other side.  Now you have to make another chose.  Do you open the door or take a right, down another hallway?");
} else if (userAnswer === "right") {
  // ("Alright, you have chosen well.  But, you have come to a door.  Who knows what is on the other side.  Now you have to make another decision.  Do you open the door, or do you take a left down another hallway?");
}
userAnswer = prompt(
  "You have great intuition.  But, you have come to a door.  Who knows what is on the other side.  Now you have to make another chose.  Do you open the door or take a right, down another hallway?"
);

if (userAnswer === "open_door") {
  // ("Great job!! You have found AJ Webb.  He's a little banged up, but he'll live.  You just need to find the other two.  Be careful, the Vampires are close!! Now you can take that right, and continue down the hallway.  Now you have come to a four way intersection.  Do you go in that room to the left, the long corridor to right, or do you continue straight?");
} else if (userAnswer === "right") {
  // ("OK, you have chosen to bypass the first door, and continue down the hallway to the right.  Now you've come to a four way intersection.  Do you go in the area to the left, the long corridor to the right, or continue straight down the hallway?");
}
userAnswer = prompt(
  "Alright, you have chosen well.  But, you have come to a door.  Who knows what is on the other side.  Now you have to make another decision.  Do you open the door, or you take a left down another hallway?"
);

if (userAnswer === "open_door") {
  // (Ooooh Noooo!!! You have entered the room of a blood sucking vampire.  And yes, he is not afraid of any halfbreed.  Use one of your UV light grenades to decimate him.  He is a big one, so be quick.  He knocked you back into the wall, and your sunglasses are broken, but you managed to end his existence.  Continue down the hallway to the left, but remember, there are two more Vampires.  Even more vicious.  Now you have come to a four way intersection.  Which way do you go, the area to the right, the long corridor to the left, or continue straight on down the hallway?);
} else if (userAnswer === "left") {
  // (Good, you have chosen to bypass the first door, and continue down the hallway to the left.  Now you've come to a four way intersection.  Do you go in the area to the right, the long corridor the left, or continue straight down the hallway?);
}
userAnswer = prompt(
  "Great job!! You have found AJ Webb.  He's a little banged up, but he'll live.  You just need to find the other two.  Be careful, the Vampires are close!! Now you can take that right, and continue down the hallway.  Now you have come to a four way intersection.  Do you go in that room to the left, the long corridor to right, or do you continue straight?"
);

if (userAnswer === "right") {
  // (You have chosen to go that long corridor.  OK, there is a shadowy area straight ahead, or you can take a left, or right.  Choose wisely!  If you go in circles, chances are the Vampires will know of your presence and end your adventure.  Which way? Straight, left, or right?);
} else if (userAnswer === "left") {
  // (You have entered an area occupied by a hyper-Vampire.  Watch out, they are very fast!! She attacks with a fierce array of slashes and kicks, you are down.  She has opened a huge gash on your arm, but you've managed to gather enough strength to unleash your UV light grenade.  She is now a distant nightmare.  Now pick yourself up, and move on.  Either go straight down the long corridor or continue left down the hallway.);
} else if (userAnswer === "straight") {
  // (You have gone straight to the end of the hallway, bypassing the area to the left and the corridor to the right.  Now you have to choose to go into the door on the left, or the long corridor to the right.  OK, what is it going to be, left or right?);
}
userAnswer = prompt(
  "OK, you have chosen to bypass the first door, and continue down the hallway to the right.  Now you've come to a four way intersection.  Do you go in the area to the left, the long corridor to the right, or continue straight down the hallway?"
);

if (userAnswer === "left") {
  // (You have entered an area occupied by a hyper-Vampire.  Watch out, they are very fast!! She attacks with a fierce array of slashes and kicks, you are down.  She has opened a huge gash on your arm, but you've managed to gather enough strength to unleash your UV light grenade.  She is now a distant nightmare.  Now pick yourself up, and move on.  Either go straight down the long corridor or continue left down the hallway.);
} else if (userAnswer === "right") {
  // (You have chosen to go that long corridor.  Ok, there is a shadowy area straight ahead, or you can take a left, or right.  Choose wisely!  If you go in circles, chances are the Vampires will know of your presence and end your adventure.  Which way?  Straight, left, or right?);
} else if (userAnswer === "straight") {
  // (You have gone straight to the end of the hallway, bypassing the area to the left and the corridor to the right.  Now you have to choose to go into the door on the left, or the long corridor to the right.  Ok, what is it going to be, left or right?);
}
userAnswer = prompt(
  "Ooooh Nooo!!!  You have entered the room of a blood sucking vampire.  And yes, he is not afraid of any halfbreed.  Use one of your UV light grenades to decimate him.  He is a big one, so be quick.  He knocked you back into the wall, and your sunglasses are broken, but you managed to end his existence.  Continue down the hallway to the left, but remember, there are two more Vampires.  Even more vicious.  Now you have come to a four way intersection.  Which way do you go, the area to the right, the long corridor to the left, or continue straight on down the hallway?"
);

if (userAnswer === "right") {
  // (WOW!! Perfect! You have found Danni, she is tied up, but seems to be in good spirits.  Don't just let her sit there, untie her!  You've now found one VIP, keep up the great work.  Now that you have gotten this far, the stakes are higher.  Be careful.  Which way to we go now?  Straight, down the long corridor, or right, toward the front of the basement?);)
} else if (userAnswer === "left") {
  // (You have chosen to go down that long corridor.  OK, there is a shadowy area straight ahead, or you can take a left, or right.  Choose wisely!  If you go in circles, chances are the Vampires will know of your presence and end your adventure.  Which way? Straight, left, or right);
} else if (userAnswer === "straight") {
  //   (You have gone straight to the end of the hallway, bypassing the area to the right and the corridor to the left.  Now you have to choose to go into the door on the right or the long corridor to the left.  Ok, what is your move?  Left or right?);
}
userAnswer = prompt(
  "Good, you have chosen to bypass the first door, and continue down the hallway to the left.  Now you've come to a four way intersection.  Do you go in the area to the right, the long corridor the left, or continue straight down the hallway"
);

if (userAnswer === "right") {
  //  ("WOW!! Perfect! You have found Danni, she is tied up, but seems to be in good spirits.  Don't just let her sit there, untie her!  You've now found one VIP, keep up the great work.  Now that you have gotten this far, the stakes are higher.  Be careful.  Which way to we go now?  Left, toward the back entrance where we came from, or right, toward the front of the basement?
} else if (userAnswer === "left") {
  // (you have chosen to go down that long corridor.  Ok, there is a shadowy area straight ahead, or you can take a left, or right.  Choose wisely!  If you go in circles, chances are the Vampires will detect your presence and end your adventure.  Which way?  Straight, left, or right);
} else if (userAnswer === "straight") {
  // (You have gone straight to the end of the hallway, bypassing the area to the right and the corridor to the left.  Now you have to choose to go into the door on the right or the long corridor to the left.  Ok, what is your move? Left or right?);
}

userAnswer = prompt(
  "You have chosen to go down that long corridor.  Ok, there is a shadowy area straight ahead, or you can take a left, or right.  Choose wisely!  If you go in circles, chances are the Vampires will know of your presence and end your adventure.  Which way? Straight, left, or right"
);
if (userAnswer === "straight") {
  // (WOW!! Perfect! You have found Danni, she is tied up, but seems to be in good spirits.  Don't just let her stand there, untie her!  You've now found AJ and Danni, keep up the great work.  Now that you have gotten this far, the stakes are higher.  Be careful.  Which way to we go now?  Left, toward the back entrance where we came from, or right, toward the front of the basement?);
} else if (userAnswer === "left") {
  // (You have bypassed the shadowy area and the right that would have brought you back to opposite rear of the basement.  You come to the end of the hallway.  You see a door on the right and another hallway to your left.  Which way do you go?  Left or Right!!??);
} else if (userAnswer === "right") {
  // (Ok, you have returned to the back of the basement, where started from.  But, now you are faced with opening the door on the left, or going back down the hallway you came from.  Don't forget, there are 3 Vampires lurking in the shadows. Be extra careful.  Is it going to be left, through the door or go back?);
}

userAnswer = prompt(
  "You have entered an area occupied by a hyper-Vampire.  Watch out, they are very fast!! She attacks with a fierce array of slashes and kicks, you are down.  She has opened a huge gash on your arm, but you've managed to gather enough strength to unleash your UV light grenade.  She is now a distant nightmare.  Now pick yourself up, and move on.  Either go straight down the long corridor or continue left down the hallway"
);
if (userAnswer === "left") {
  // (You have chosen to go continue down the hallway.  You have come to the end.  There is a door on the left, and a hallway on the right.  Make your chose.  Is it going to be the door on the left, or the hallway on the right?);
} else if (userAnswer === "straight") {
  // (You have chosen the long corridor.  In from of you is another shadowy area. To left is the hallway leading to the front of the basement.  To the right is the back of the basement, where you started, but on the opposite side.  Which way, straight, left, or right?);
}

userAnswer = prompt(
  "You have gone straight to the end of the hallway, bypassing the area to the left and the corridor to the right.  Now you have to choose to go into the door on the left, or the long corridor to the right.  OK, what is it going to be, left or right?"
);
if (userAnswer === "left") {
  // (Great!!  You have found Rich!!  He is little ticked off because you took so long, but he'll survive.  You've found AJ and Rich.  Only one left.  The sensible choice now is to continue straight down the hallway in front of the door.  Or? You could go right, back down the hallway where you came from, but that could lead to certain disaster.  Ok, what is it going to be?  Straigt, or right?);
} else if (userAnswer === "right") {
  // (You have bypassed the uncertainty of the door on the left, and proceeded down the shadowy hallway on the left.  Halfway down the hallway, you notice a door on the right.  What do you do?  Do you open that door?  or do you continue down the hallway?);
}

userAnswer = prompt(
  "WOW!! Perfect! You have found Danni, she is tied up, but seems to be in good spirits.  Don't just let her stand there, untie her!  You've now found AJ and Danni, keep up the great work.  Now that you have gotten this far, the stakes are higher.  Be careful.  Which way to we go now?  Left, toward the back entrance where we came from, or right, toward the front of the basement?"
);
if (userAnswer === "") {
  // you have come to the end of a hallway, bypassing the open area straight ahead, or going right, back toward the rear of the basement.  There is a door on the right, and a door hallway on the left.  Which direction will you go, left or right?);
} else if (userAnswer === "straight") {
  // you have come to the end of a hallway, bypassing the open area straight ahead, or going left, toward the front of the basement.  There is a door on the left and the place you started from.  You have two choices.  You through the door on the left or go back the way you came.  What will it be? left or back?);
}
userAnswer = prompt(
  "You have chosen to go down that long corridor.  Ok, there is a shadowy area straight ahead, or you can take a left, or right.  Choose wisely!  If you go in circles, chances are the Vampires will know of your presence and end your adventure.  Which way? Straight, left, or right"
);

const btn = document.querySelector("button");
btn.addEventListener("click", startAdventure, false);

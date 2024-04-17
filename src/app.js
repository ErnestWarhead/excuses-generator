let data = {
  iCant: [
    "I can't",
    "I won't be able to",
    "I shan't",
    "I may not",
    "I have the right not to",
    "I've earned not to",
    "It's impossible for me to"
  ],
  what: [
    "go to school",
    "do the homework",
    "get a shower",
    "walk the dog",
    "stop gaming",
    "join",
    "show up"
  ],
  because: ["because"],
  reason: [
    "my wife",
    "my dog",
    "a parrot",
    "my doctor",
    "a random person",
    "a squirrel",
    "a ghost",
    "terminator",
    "Indiana Jones"
  ],
  why: ["ate", "bit", "stole", "hid", "teleported", "ruined"],
  object: [
    "the car.",
    "my homework.",
    "the TV.",
    "the weed.",
    "my motivation.",
    "my golden goose."
  ]
};
let button = document.getElementById("button");
button.addEventListener("click", function() {
  let generating = "";
  Object.keys(data).forEach(function(key) {
    let currentarray = data[key];
    let min = 0;
    let max = currentarray.length - 1;
    let selector = Math.floor(Math.random() * (max - min + 1)) + min;
    generating += (generating === "" ? "" : " ") + currentarray[selector];
  });
  let excuse = document.querySelector(".excuses");
  excuse.innerText = generating;
});

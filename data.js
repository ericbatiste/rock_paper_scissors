var user = {
    name: "Human",
    currentFighter: null,
    wins: 0,
    victor: false
  }

var comp = {
    name: "Steve",
    currentFighter: null,
    wins: 0,
    victor: false
  }

var classicFighters = [
  {
    name: "Rock",
    icon: "assets/Rock.png",
    defeats: ["Scissors"]
  },
  {
    name: "Scissors",
    icon: "assets/Scissors.png",
    defeats: ["Paper"]
  },
  {
    name: "Paper",
    icon: "assets/Paper.png",
    defeats: ["Rock"]
  },
]

var extendedFighters = [
  {
    name: "Gemini",
    icon: "assets/Gemini.png",
    defeats: ["Leo", "Sagittarius"]
  },
  {
    name: "Leo",
    icon: "assets/Leo.png",
    defeats: ["Sagittarius", "Scorpio"]
  },
  {
    name: "Sagittarius",
    icon: "assets/Sagittarius.png",
    defeats: ["Scorpio", "Virgo"]
  },
  {
    name: "Scorpio",
    icon: "assets/Scorpio.png",
    defeats: ["Virgo", "Gemini"]
  },
  {
    name: "Virgo",
    icon: "assets/Virgo.png",
    defeats: ["Gemini", "Leo"]
  }
]

import simon from "./images/simon.png"
import simonSM from "./images/simonSM.png";
import planetMotion from "./images/planetMotion1.png";
import planetMotionSM from "./images/planetMotionSM.png";
import tinpurr from "./images/tinpurr.png";
import tinpurrSM from "./images/tinpurrSM.png";
import todo from "./images/todo.png";
import todoSM from "./images/todoSM.png";
import dicee from "./images/dicee.png";
import diceeSM from "./images/diceeSM.png";
import drumkit from "./images/drumkit.png";
import drumkitSM from "./images/drumkitSM.png";
import weather from "./images/weatherApp.png";
import weatherSM from "./images/weatherAppSM.png";
import secrets from "./images/mySecrets.png";
import secretsSM from "./images/secretsSM.png";
import newsletter from "./images/newsLetter.png";
import newsletterSM from "./images/newsLetterSM.png";
import blog from "./images/blogg.png";
import blogSM from "./images/blogSM.png";



 const cards = [{
    //      Styling
    normalCard: "normalCard",
    classexpandedCard: "expandedCardVer simonColor",
    classExpandedImg: "classExpandedImgVer",
    info: "infoVer simonColor",
    //      Images
    expandedImg: simon,
    imagesm: simonSM,
    //      Text
    titleh1: "Simon Game",
    expandedP2: "Practiced with JQuery and callback functions.",
    expandedP: "A fun game to press the correct color in the order in which the pattern excecutes.",
    expandedH2: "Simon Says",
    anchor: "https://github.com/Dannique/SimonSays",
    anchorText: "Check out my code at github"
  },
  {
    //      Styling
    normalCard: "normalCard",
    info: "infoHor",
    classexpandedCard: "expandedCardHor motionColor",
    classExpandedImg: "classExpandedImgHor",
    //      Images
    expandedImg: planetMotion,
    imagesm: planetMotionSM,
    //      Text
    titleh1: "Motion of the Planets",
    expandedP2: "Practiced with HTML Canvas and the constructor function method",
    expandedP: "Shows how long it takes for the planets from Mercury to Mars to orbit around the Sun.",
    expandedH2: "Moving Planets",
    anchor: "https://github.com/Dannique/Motion-of-the-Inner-Planets",
    anchorText: "Check out my code at github.com"
  },
  {
    //      Styling
    normalCard: "normalCard",
    classexpandedCard: "expandedCardHor whiteBackground",
    info: "infoHor",
    classExpandedImg: "classExpandedImgHor",
    //      Images
    imagesm: tinpurrSM,
    expandedImg: tinpurr,
    //      Text
    titleh1: "TinPurr",
    expandedP2: "Practiced with Bootstrap",
    expandedP: "A design focused on selling a product.",
    expandedH2: "Tinpurr UI",
    anchor: "https://tinpurr2021.herokuapp.com",
    anchorText: "Check out my deployed website"
  },
  {
    //      Styling
    normalCard: "normalCard",
    classexpandedCard: "expandedCardVer todoColor",
    classExpandedImg: "classExpandedImgVer",
    info: "infoVer todoColor",
    //      Images
    expandedImg: todo,
    imagesm: todoSM,
    //      Text
    titleh1: "To-do List",
    expandedP2: "Practiced with NodeJS, EJS and MongoDB.",
    expandedP: "A to-do list with an option to create your own custom list by name to get directed by route and the option to delete items by checkbox.",
    expandedH2: "To-do List",
    anchor: "http://todolist-dannique.herokuapp.com",
    anchorText: "Check out my deployed website"
  },
  {
    //      Styling
    normalCard: "normalCard",
    classexpandedCard: "expandedCardVer whiteBackground",
    classExpandedImg: "classExpandedImgVer",
    info: "infoVer whiteBackground",
    //      Images
    expandedImg: dicee,
    imagesm: diceeSM,
    //      Text
    titleh1: "Dicee",
    expandedP2: "Practiced with DOM Manipulation.",
    expandedP: "A simple game when you press the button, the dice images will show a random outcome. The player with the highest result, wins.",
    expandedH2: "Dicee Game",
    anchor: "https://github.com/Dannique/Dicee",
    anchorText: "Check out my code at github"
  },
  {
    //      Styling
    normalCard: "normalCard",
    classexpandedCard: "expandedCardHor whiteBackground",
    info: "infoHor drumkitColor",
    classExpandedImg: "classExpandedImgHor",
    //      Images
    imagesm: drumkitSM,
    expandedImg: drumkit,
    //      Text
    titleh1: "Drumkit",
    expandedP2: "Practiced with DOM Manipulation, Callback Functions and Switch Statments.",
    expandedP: "A fun app where you can use your keys to play the drums.",
    expandedH2: "Expanded h2",
    anchor: "https://github.com/Dannique/Drum-Kit",
    anchorText: "Check out my code at github"
  },
  {
    normalCard: "normalCard",
    classexpandedCard: "expandedCardVer weatherAppColor",
    classExpandedImg: "classExpandedImgVer",
    info: "infoVer whiteBackground",
    //      Images
    expandedImg: weather,
    imagesm: weatherSM,
    //      Text
    titleh1: "Weather-App",
    expandedP2: "Practiced with the OpenWeatherMap API, NodeJS and Bootstrap.",
    expandedP: "Type a place anywhere in the world in the input and get information about the weather.",
    expandedH2: "World Weather",
    anchor: "https://github.com/Dannique/WorldWeather",
    anchorText: "Check out my code at github"
  },
  {
    //      Styling
    normalCard: "normalCard",
    info: "infoHor",
    classexpandedCard: "expandedCardHor secretColor",
    classExpandedImg: "classExpandedImgHor",
    //      Images
    expandedImg: secrets,
    imagesm: secretsSM,
    //      Text
    titleh1: "Secrets",
    expandedP2: "Practiced with Oauth, PassportJS, MongoDB, EJS and NodeJS.",
    expandedP: "You can log in with E-mail, Facebook and Google to post a secret anonymously. Search your own posts with the option to delete it.",
    expandedH2: "Secret App",
    anchor: "https://github.com/Dannique/Secrets",
    anchorText: "Check out my code at github"
  }, {
    //      Styling
    normalCard: "normalCard",
    classexpandedCard: "expandedCardVer newsletterColor",
    classExpandedImg: "classExpandedImgVer",
    info: "infoVer whiteBackground",
    //      Images
    expandedImg: newsletter,
    imagesm: newsletterSM,
    //      Text
    titleh1: "Newsletter Signup",
    expandedP2: "Practiced with MailChimp API, NodeJS, https and Bootstrap.",
    expandedP: "A newsletter sign-up page with an integrated API from MailChimp.",
    expandedH2: "Newsletter Signup",
    anchor: "http://newslettersignup-2020.herokuapp.com",
    anchorText: "Check out my deployed website"
  }, {
    //      Styling
    normalCard: "normalCard",
    info: "infoHor",
    classexpandedCard: "expandedCardHor motionColor",
    classExpandedImg: "classExpandedImgHor",
    //      Images
    expandedImg: blog,
    imagesm: blogSM,
    //      Text
    titleh1: "Daily Journal",
    expandedP2: "Practiced with EJS, NodeJS, MongoDB and Bootstrap",
    expandedP: `Free to post app, with a compose page and a "read more" option to read the complete post.`,
    expandedH2: "Daily Journal Blog",
    anchor: "https://github.com/Dannique/Blog",
    anchorText: "Check out my code at github.com"
  }
];

export default cards
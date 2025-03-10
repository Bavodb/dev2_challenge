import express, { Request, Response, Router } from "express";
import { url } from "inspector";

const router: Router = express.Router();

// Homepagina
router.get("/", (req: Request, res: Response): void => {
  res.render("index", { title: "Escape Room" });
});

//redirect get request op /quiz naar /
router.get("/quiz", (req: Request, res: Response): void => {
  res.redirect("/");
});

// Quiz verwerken
router.post("/quiz", (req: Request, res: Response): void => {
  const correctAntwoord: string = "newton24duizendpoot";
  const userAntwoord: string = req.body.antwoord?.trim() || "";
  const isCorrect: boolean =  userAntwoord === correctAntwoord;
    userAntwoord.toLowerCase() === correctAntwoord.toLowerCase();
  const message: string = isCorrect
    ? "Correct! 🎉"
    : "Fout! 😢 Probeer opnieuw.";

    if(isCorrect) {
      fetch(
          "https://api.deweirdt.be/games/index.php", {
              method: "POST",
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
              },
              body: new URLSearchParams({username: req.body.userName, game_key: "DigitaleEscapeR00m!"})
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .then(error => console.error(error));
  }
  res.render("result", { title: "Challenge resultaat", boodschap: message });
});

// Homepagina
router.get("/breinbreker", (_: Request, res: Response): void => {
  res.render("breinbreker", { title: "Escape Room" });
});

export default router;

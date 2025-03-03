import express, { Application } from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import routes from "./routes";

const app: Application = express();
const PORT: number = parseInt(<string>process.env.PORT, 10) || 3000;

// Vercel Server
app.set("views", path.join(__dirname, "views"));

// EJS als template-engine instellen
app.set("view engine", "ejs");

// Middleware voor layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Middleware om statische bestanden te serveren
app.use(express.static(path.join(__dirname, "/public")));

// Middleware om formulierdata te verwerken
app.use(express.urlencoded({ extended: true }));

// Routes gebruiken
app.use("/", routes);

// Server starten
app.listen(PORT, (): void => {
  console.log(`Server draait op http://localhost:${PORT}`);
});

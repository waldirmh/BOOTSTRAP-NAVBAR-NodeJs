// importamos router par ano utilizar app
// example :app.get("/", (req, res) => res.render("index"));
import { Router } from "express";
const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "First website with nodejs" })
);
router.get("/about", (req, res) => res.render("about", { title: "my about" }));
router.get("/contact", (req, res) =>
  res.render("contact", { title: "contact me" })
);

export default router;

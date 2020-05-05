const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't access database" });
    });
});

router.get('/:id/shoppingList', (req, res) => {
  const id = req.params.id;

  Recipes.getShoppingList(id)
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json({ message: "Couldn't access database" });
    });
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json({ message: "Huge error " });
    });
});

module.exports = router;
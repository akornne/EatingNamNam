const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    const recipes = await tables.recipe.readAll(); // req.query pour recuperer la date d'entrée et limiter le nombre de card carousel
    if (recipes == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(recipes);
    }
  } catch (error) {
    next(error);
  }
};

// The R of BREAD - Read operation

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipe = await tables.recipe.read(parseInt(id, 10));

    const stepsByRecipe = await tables.step.read(parseInt(id, 10));
    const commentsByRecipe = await tables.comment.read(parseInt(id, 10));

    const data = {
      infos: recipe,
      steps: stepsByRecipe,
      comments: commentsByRecipe,
    };
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    next(error);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedRecipe = req.body;
    const recipe = await tables.recipe.update(updatedRecipe, parseInt(id, 10));
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: `Recipe #${id} updated` });
    }
  } catch (error) {
    next(error);
  }
};

// The A of BREAD - Add (Create) operation

const add = async (req, res, next) => {
  try {
    const { info, ingredients, steps } = req.body;
    const { sub } = req.auth;
    const newRecipeID = await tables.recipe.create(info);
    if (newRecipeID == null) {
      res.sendStatus(404);
    } else {
      for (let i = 0; i < ingredients.length; i += 1) {
        tables.ingredient_recipe.create(newRecipeID, ingredients[i]);
      }
      for (let i = 0; i < steps.length; i += 1) {
        tables.step.create(newRecipeID, steps[i].step);
      }
      tables.recipe_user.create(newRecipeID, Number(sub));

      res.status(200).json({ id: newRecipeID, message: `Recette ajoutée` });
    }
  } catch (error) {
    next(error);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const recipe = await tables.recipe.delete(parseInt(req.params.id, 10));
    if (recipe == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "Recipe deleted" });
    }
  } catch (error) {
    next(error);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};

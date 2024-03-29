/* ************************************************************************* */
// Register Data Managers for Tables
/* ************************************************************************* */

// Import the manager modules responsible for handling data operations on the tables
const FavRecipeManager = require("./models/FavRecipeManager");
const CommentManager = require("./models/CommentManager");
const IngredientManager = require("./models/IngredientManager");
const RecipeManager = require("./models/RecipeManager");
const SuccessManager = require("./models/SuccessManager");
const UserManager = require("./models/UserManager");
const RoleManager = require("./models/RoleManager");
const UnitManager = require("./models/UnitManager");
const RecipeCommentManager = require("./models/RecipeCommentManager");
const ContactManager = require("./models/ContactManager");
const IngredientRecipeManager = require("./models/IngredientRecipeManager");
const StepManager = require("./models/StepManager");
const NotationManager = require("./models/NotationManager");
const RecipeUserManager = require("./models/RecipeUserManager");

const managers = [
  FavRecipeManager,
  CommentManager,
  IngredientManager,
  RecipeManager,
  SuccessManager,
  UserManager,
  RoleManager,
  UnitManager,
  RecipeCommentManager,
  ContactManager,
  IngredientRecipeManager,
  StepManager,
  NotationManager,
  RecipeUserManager,
];

// Create an empty object to hold data managers for different tables
const tables = {};

// Register each manager as data access point for its table
managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();

  tables[manager.table] = manager;
});

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});

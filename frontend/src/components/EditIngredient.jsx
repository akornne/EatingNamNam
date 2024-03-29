import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import { toast } from "react-toastify";

function EditIngredient() {
  // ce state sert à filtrer les ingrédients quand on tape son nom dans l'input
  const [editIngredient, setEditIngredient] = useState([]);
  // ce state sert à afficher un ingrédient quand on le selectionne dans l'option
  const [selectedIngredient, setSelectedIngredient] = useState({});
  // ce state permet de controller le useEffect et le re-render
  const [isNotDeleted, setIsNotDeleted] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleDeleteIngredient = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/ingredient/${
          selectedIngredient.id
        }`
      );
      setIsNotDeleted(true);
      // afin de vider le champ de selection
      setSelectedIngredient({});
      reset();

      toast.success("ingrédient a bien été supprimé!");
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancelIngredient = () => {
    if (selectedIngredient) {
      setSelectedIngredient({});
      reset();

      toast.success("ingredient a été  modifié");
    } else {
      toast.info("une erreur est survenue");
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/ingredient`)
      .then((res) => setEditIngredient(res.data));
    setIsNotDeleted(false);
  }, [isNotDeleted]);

  // fonction pour filtrer les options ingredients
  const handleIngredientChange = (e) => {
    reset();
    const inputIngredientName = e.target.value;
    setEditIngredient(
      editIngredient.filter((d) => d.name.includes(inputIngredientName))
    );
  };

  // fonction pour selectionner un ingredient et le modifier ensuite
  const handleEditIngredient = (e) => {
    const selectedIngredientName = e.target.value;
    setSelectedIngredient(
      editIngredient.find((i) => i.name === selectedIngredientName)
    );
  };

  const { auth } = useOutletContext();

  const onSubmit = async (data) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/ingredient/${
          selectedIngredient.id
        }`,
        data,
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      );

      reset();
      toast.success("Ingrédient mis à jour avec succès");
    } catch (error) {
      toast.error("Erreur lors de la mise à jour de l'ingrédient");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mt-16 border-orange border-b-2">
        Modifier les ingredients
      </h1>
      <div className="border-ttop-solid p-3 rounded-2xl">
        <div className="mb-6 mt-2">
          <input
            type="text"
            className="mb-2"
            placeholder="rechercher l'ingredient"
            onChange={handleIngredientChange}
          />
          <select
            className="w-46 h-6 md:ml-2"
            name=""
            onChange={handleEditIngredient}
          >
            <option value="">Liste des ingrédients</option>
            {editIngredient.map((i) => (
              <option key={i.id} value={i.name} id={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="hidden"
              name="id"
              value={selectedIngredient.id}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("id", {
                valueAsNumber: "Un nombre est obligatoire",
              })}
            />
            <input
              type="text"
              className="w-32 mr-4"
              name="name"
              value={selectedIngredient.name}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("name")}
            />
            <input
              type="number"
              className="w-28 ml-2 mr-4"
              name="quantity"
              min={0}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("quantity", {
                required: "Ce champ est obligatoire",
                valueAsNumber: "Un nombre est obligatoire",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Vous ne pouvez mettre que des chiffres",
                },
                min: {
                  value: 1,
                  message: "Vous devez au moins mettre une quantité de 1",
                },
              })}
            />
            {errors.quantity && (
              <span className="bg-red-600 text-white py-1 px-4" role="alert">
                {errors.quantity?.message}
              </span>
            )}
            <label htmlFor="unit_id">Liquide ou solide : </label>
            <select
              name="unit_id"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("unit_id", {
                required: "Ce champ est obligatoire",
                valueAsNumber: "Un nombre est obligatoire",
              })}
            >
              <option value="">---</option>
              <option value="2">Liquide</option>
              <option value="1">Solide</option>
            </select>
            {errors.unit_id && (
              <span className="bg-red-600 text-white py-1 px-4" role="alert">
                {errors.unit_id?.message}
              </span>
            )}
            <div className="flex flex-col md:flex-row mt-6">
              <label>
                <div>Calories:</div>
                <input
                  className="w-28 ml-2 mr-2"
                  type="number"
                  name="calories"
                  placeholder={selectedIngredient.calories}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("calories", {
                    required: "Ce champ est obligatoire",
                    valueAsNumber: "Un nombre est obligatoire",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Vous ne pouvez mettre que des chiffres",
                    },
                    min: {
                      value: 1,
                      message: "Vous devez au moins mettre une quantité de 1",
                    },
                  })}
                />
                {errors.calories && (
                  <span className="text-red-500">
                    {errors.calories?.message}
                  </span>
                )}
              </label>

              <label>
                <div>Fat:</div>
                <input
                  className="w-28 ml-2 mr-2"
                  type="number"
                  name="fat"
                  placeholder={selectedIngredient.fat}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("fat", {
                    required: "Ce champ est obligatoire",
                    valueAsNumber: "Un nombre est obligatoire",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Vous ne pouvez mettre que des chiffres",
                    },
                    min: {
                      value: 1,
                      message: "Vous devez au moins mettre une quantité de 1",
                    },
                  })}
                />
                {errors.fat && (
                  <span className="text-red-500">{errors.fat?.message}</span>
                )}
              </label>

              <label>
                <div>Sucre:</div>
                <input
                  className="w-28 ml-2 mr-2"
                  type="number"
                  name="sugar"
                  placeholder={selectedIngredient.sugar}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("sugar", {
                    required: "Ce champ est obligatoire",
                    valueAsNumber: "Un nombre est obligatoire",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Vous ne pouvez mettre que des chiffres",
                    },
                    min: {
                      value: 1,
                      message: "Vous devez au moins mettre une quantité de 1",
                    },
                  })}
                />
                {errors.sugar && (
                  <span className="text-red-500">{errors.sugar?.message}</span>
                )}
              </label>

              <label>
                <div>Protein:</div>
                <input
                  className="w-28 ml-2 mr-2"
                  type="number"
                  name="protein"
                  placeholder={selectedIngredient.protein}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register("protein", {
                    required: "Ce champ est obligatoire",
                    valueAsNumber: "Un nombre est obligatoire",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Vous ne pouvez mettre que des chiffres",
                    },
                    min: {
                      value: 1,
                      message: "Vous devez au moins mettre une quantité de 1",
                    },
                  })}
                />
                {errors.protein && (
                  <span className="text-red-500">
                    {errors.protein?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex flex-col mt-6">
              <button type="submit">Modifier un ingrédient 🥕</button>
              <button type="button" onClick={handleDeleteIngredient}>
                Supprimer un ingrédient 🥕
              </button>
              <button type="button" onClick={handleCancelIngredient}>
                Annuler un ingrédient 🥕
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditIngredient;

EditIngredient.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  unit: PropTypes.oneOfType([
    PropTypes.shape,
    () => null,
    PropTypes.instanceOf(Error),
  ]).isRequired,
};

/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export default function RecipeStepForm({ selectedSteps, setSelectedSteps }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setSelectedSteps([...selectedSteps, data]);
    reset();
  };

  const handleDeleteStep = (element) => {
    const index = selectedSteps.findIndex((e) => e === element);
    setSelectedSteps(selectedSteps.toSpliced(index, 1));
  };
  return (
    <div className="flex flex-col rounded-2xl items-center mb-4 p-3 bg-orange">
      <h2>Détaillez, ici, les étapes de réalisation de votre recette</h2>
      <ul className="flex flex-col gap-4 my-2">
        {selectedSteps.map((s, index) => (
          <li className="flex flex-row gap-4" key={selectedSteps.indexOf(s)}>
            {" "}
            Etape {index + 1} : {s.step}
            <button type="button" onClick={() => handleDeleteStep(s)}>
              Supprimer cette étape
            </button>
          </li>
        ))}
      </ul>
      <form
        className="flex flex-col items-center gap-2 w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          className="w-full"
          placeholder="Etape :"
          name="step"
          {...register("step", {
            required: "ce champ est obligatoire",
            minLength: {
              value: 10,
              message:
                "Votre étape est trop courte, un peu plus de détails serait mieux",
            },
            maxLenght: {
              value: 1000,
              message:
                "Vous avez tapé trop de caractères, pensez à créer une nouvelle étape ;)",
            },
          })}
        />
        {errors.step && (
          <span className="bg-red-600 text-white py-1 px-4" role="alert">
            {errors.step?.message}
          </span>
        )}
        <button
          className="shadow-lg border-2 border-green rounded-md p-2 hover:bg-green hover:font-bold hover:text-orange"
          type="submit"
        >
          Valider cette étape
        </button>
      </form>
    </div>
  );
}

RecipeStepForm.propTypes = {
  selectedSteps: PropTypes.arrayOf.isRequired,
  setSelectedSteps: PropTypes.func.isRequired,
};
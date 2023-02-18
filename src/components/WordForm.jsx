import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";

function WordForm({ getWordInfoHandler }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      word: "",
    },
  });
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${data.word}`
      );
      const dataResponse = await response.json();
      getWordInfoHandler(dataResponse);
    } catch (error) {
      console.log("there is not searched word");
      toast.error("There is no data!");
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <ColorRing
        className="p-5 transition duration-300 animate-fadeIn"
        colors={["#e9d5ff", "#a855f7", "#c084fc", "#e9d5ff", "#a855f7"]}
      />
    );
  }

  return (
    <div className="w-full py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={
          errors.word
            ? "flex bg-gray-100 px-4 py-1 mx-2 rounded-2xl border-2 border-red-400 transition-all"
            : "flex bg-gray-100 px-4 py-1 mx-2 rounded-2xl transition-all "
        }
      >
        <input
          className="flex-1 bg-inherit p-2 border-0 outline-none font-extrabold font-serif text-base text-neutral-700 focus:bg-transparent"
          type="text"
          autoComplete="off"
          {...register("word", {
            required: "This is required",
            pattern: {
              value: /^[A-Za-z-]+$/i,
              message: "Please search for only one word at time.",
            },
          })}
          placeholder="Enter one word"
        />
        <button type="submit" className="px-1">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-xl text-purple-500 transition-all duration-300 hover:text-purple-400"
          />
        </button>
      </form>
    </div>
  );
}

export default WordForm;

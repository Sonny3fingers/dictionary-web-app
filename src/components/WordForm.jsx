import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function WordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      word: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <div className="w-full py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex bg-gray-100 px-4 py-1 mx-2 rounded-2xl"
      >
        <input
          className="flex-1 bg-inherit p-2 border-0 outline-none font-extrabold font-serif text-base text-neutral-700"
          type="text"
          {...register("word", {
            required: "This is required",
            pattern: {
              value: /^[A-Za-z-]+$/i,
              message: "Searched word can not contain space or numbers",
            },
          })}
          placeholder="Enter word"
        />
        {/* <input type="submit"></input> */}
        <button type="submit" className="px-1">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-xl text-purple-500 transition-all hover:text-blue-500"
          />
        </button>
        {errors.word && <p>{errors.word?.message}</p>}
      </form>
    </div>
  );
}

export default WordForm;

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("word", {
            required: "This is required",
            pattern: {
              value: /^[A-Za-z-]+$/i,
              message: "Searched word can not contain space or numbers",
            },
          })}
          placeholder="Enter unknown word"
        />
        <input type="submit"></input>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-2xl hover:text-blue-500"
        />
        {errors.word && <p>{errors.word?.message}</p>}
      </form>
    </div>
  );
}

export default WordForm;

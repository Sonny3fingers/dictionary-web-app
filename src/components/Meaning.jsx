import React from "react";

function Meaning({ item }) {
  return (
    <div className="border-t-2 relative mt-4">
      <h3 className="text-xl font-bold pb-3 bg-white dark:bg-gray-800 absolute -top-4 left-0 pr-2 md:text-2xl md:-top-5">
        {item.partOfSpeech}
      </h3>
      <span className="text-base font-medium text-gray-500 dark:text-gray-50 pt-10 pb-4 block md:text-xl md:pt-16">
        Meaning
      </span>
      <div className="ml-3 md:ml-8 md:mb-6">
        <ul className="list-disc ml-2">
          {item.definitions.map((definition) => (
            <li
              key={crypto.randomUUID().toString()}
              className="pb-3 font-medium text-base text-neutral-500 dark:text-neutral-50 md:text-lg"
            >
              {definition.definition}
            </li>
          ))}
        </ul>
      </div>
      {item.synonyms.length !== 0 && (
        <div className="py-4 text-base font-normal flex md:py-8 md:text-lg md:mb-5">
          <span className="mr-2  text-gray-500 dark:text-gray-100 block-inline font-medium">
            Synonyms
          </span>
          <ul className="flex flex-1 flex-wrap">
            {item.synonyms.map((synonym) => (
              <li
                key={crypto.randomUUID().toString()}
                className="text-purple-500 pr-1"
              >
                {synonym}
                {item.synonyms[item.synonyms.length - 1] !== synonym ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Meaning;

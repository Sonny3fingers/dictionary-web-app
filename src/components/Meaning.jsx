import React from "react";

function Meaning({ item }) {
  return (
    <div>
      <h3 className="text-xl font-bold pb-3">{item.partOfSpeech}</h3>
      <span className="text-base font-normal text-gray-500 py-4 block">
        Meaning
      </span>
      <ul className="list-disc ml-5 mb-2">
        {item.definitions.map((definition) => (
          <li className="pb-3 font-medium text-base text-neutral-500">
            {definition.definition}
          </li>
        ))}
      </ul>
      {item.synonyms.length !== 0 && (
        <div className="py-4 text-base font-normal flex">
          <span className="mr-2  text-gray-500 block-inline">Synonyms</span>
          <ul className="flex flex-1 flex-wrap">
            {item.synonyms.map((synonym) => (
              <li className="text-purple-400 pr-1">{synonym},</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Meaning;

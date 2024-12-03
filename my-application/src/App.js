import React from "react";
import Book from "./Book";

function App() {
  const bookData = {
    image:
      "https://www.imdb.com/title/tt13622970/mediaviewer/rm1958044417/?ref_=tt_ov_i",
    title: "Moana 2",
    description:
      "Moana and Maui reunite for a new mission, with the original voice cast returning after Moana became 2023's most-streamed movie.",
    characters: ["Moana", "Maui", "Heihei"],
  };

  const handleButtonClick = (title, characters) => {
    console.log(`Book Title: ${title}`);
    console.log("Characters:");
    characters.forEach((character) => console.log(`- ${character}`));
  };

  return (
    <div>
      <Book
        image={bookData.image}
        title={bookData.title}
        description={bookData.description}
        characters={bookData.characters}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;

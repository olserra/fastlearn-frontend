import React from "react";
import CardDefault from "./Card";

const CardList = ({ cards }: any) => {
  const mockData = [
    {
      id: 1,
      title: "Introduction to Python",
      description:
        "Learn the basics of Python programming language and understand its fundamental concepts.",
      imageUrl: "https://example.com/python_intro.png",
    },
    {
      id: 2,
      title: "Python Data Types",
      description:
        "Explore different data types in Python, such as strings, numbers, lists, tuples, and dictionaries.",
      imageUrl: "https://example.com/python_data_types.png",
    },
    {
      id: 3,
      title: "Control Flow in Python",
      description:
        "Learn about control flow statements like if-else, for, and while loops in Python.",
      imageUrl: "https://example.com/python_control_flow.png",
    },
    {
      id: 4,
      title: "Functions in Python",
      description:
        "Understand how to define and execute functions, handle functions with arguments and return values.",
      imageUrl: "https://example.com/python_functions.png",
    },
    {
      id: 5,
      title: "Python Modules",
      description:
        "Learn how to use and import built-in and external modules in Python.",
      imageUrl: "https://example.com/python_modules.png",
    },
    {
      id: 6,
      title: "File Handling in Python",
      description: "Learn how to read from and write to files using Python.",
      imageUrl: "https://example.com/python_file_handling.png",
    },
    {
      id: 7,
      title: "Exception Handling in Python",
      description:
        "Understand how to handle and manage exceptions in Python to write robust code.",
      imageUrl: "https://example.com/python_exception_handling.png",
    },
    {
      id: 8,
      title: "Object-Oriented Programming in Python",
      description:
        "Explore the principles of object-oriented programming (OOP) in Python.",
      imageUrl: "https://example.com/python_oop.png",
    },
    {
      id: 9,
      title: "Python Libraries and Frameworks",
      description:
        "Discover popular libraries and frameworks in Python, such as NumPy, Pandas, and Django.",
      imageUrl: "https://example.com/python_libraries.png",
    },
  ];

  console.log("cards", cards);
  console.log("typeof cards: ", typeof cards);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
      {cards.map(
        (
          card: {
            title: string;
            description: string;
            imageUrl: string;
            id: number;
          },
          index: React.Key | null | undefined
        ) => (
          <CardDefault
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            id={card.id}
          />
        )
      )}
    </div>
  );
};

export default CardList;

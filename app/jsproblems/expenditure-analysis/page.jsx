"use client";
import { useCallback, useEffect, useState } from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Expenditureanalysis() {
  const codeString = `function calculateTotalSpentByCategory(transactions) {
    const totalSpentByCategory = {};
    transactions.forEach((transaction) => {
      if (!totalSpentByCategory[transaction.category]) {
        totalSpentByCategory[transaction.category] = 0;
      }
      totalSpentByCategory[transaction.category] += transaction.price;
    });
    console.log("totalSpentByCategory", totalSpentByCategory);
    return Object.keys(totalSpentByCategory).map((category) => ({
      category,
      totalSpent: totalSpentByCategory[category],
    }));
  }`;

  const problemSting = `{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here`;

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^solution^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^6
  function calculateTotalSpentByCategory(transactions) {
    const totalSpentByCategory = {};
    transactions.forEach((transaction) => {
      if (!totalSpentByCategory[transaction.category]) {
        totalSpentByCategory[transaction.category] = 0;
      }
      totalSpentByCategory[transaction.category] += transaction.price;
    });
    return Object.keys(totalSpentByCategory).map((category) => ({
      category,
      totalSpent: totalSpentByCategory[category],
    }));
  }

  const transactions = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: "Food",
      itemName: "Pizza",
    },
    {
      id: 2,
      timestamp: 1656259600000,
      price: 20,
      category: "Food",
      itemName: "Burger",
    },
    {
      id: 3,
      timestamp: 1656019200000,
      price: 15,
      category: "Clothing",
      itemName: "T-Shirt",
    },
    {
      id: 4,
      timestamp: 1656364800000,
      price: 30,
      category: "Electronics",
      itemName: "Headphones",
    },
    {
      id: 5,
      timestamp: 1656105600000,
      price: 25,
      category: "Clothing",
      itemName: "Jeans",
    },
  ];
  console.log(
    "calculateTotalSpentByCategory",
    calculateTotalSpentByCategory(transactions)
  );
  // **************************************end solution***************************************************

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[600px] mt-8">
        <div className="flex flex-col mt-8 gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <div className="flex gap-3 justify-start items-center"></div>
          <p>
            (easy) Implement a function `calculateTotalSpentByCategory`
            <br />
            which takes a list of transactions as parameter and return a list of{" "}
            <br />
            objects where each object is unique category-wise and has total{" "}
            <br />
            price spent as its value. transactions is an array where each <br />
            Transaction - an object like
          </p>

          <SyntaxHighlighter language="javascript" style={docco}>
            {problemSting}
          </SyntaxHighlighter>
        </div>
        <div className="flex mt-8 flex-col gap-5  p-4 relative text-white  bg-[#29292961] rounded-lg border-gray-400 border border-opacity-20">
          <h2>Solution</h2>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

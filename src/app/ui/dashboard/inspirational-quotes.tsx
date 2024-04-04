import { useState, useEffect } from "react";

const InspirationalQuotes = () => {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	const generateQuote = async () => {
		try {
			const response = await fetch("https://type.fit/api/quotes");
			const quoteList = await response.json();
			const randomIdx = Math.floor(Math.random() * quoteList.length);
			const quoteText = quoteList[randomIdx].text;
			const auth = quoteList[randomIdx].author;
			console.log(auth);

			let finalAuthor : string;
			
			if (!auth.includes(",")) {
				finalAuthor = "Anonymous";
			} else {
				finalAuthor = auth.split(",")[0];
			}

			console.log(finalAuthor);

			setQuote(quoteText);
			setAuthor("~ " + finalAuthor);
		} catch (error) {
			console.error("Error fetching quote:", error);
		}
	};

	useEffect(() => {
		generateQuote();
	}, []);

	return (
		<div className="w-96">
			<div>
				<h1 className="text-center text-2xl font-bold mb-4">
					{quote}
				</h1>
				<p className=" text-right text-lg italic text-gray-600">
					{author}
				</p>
				<hr className="my-4" />
				<div className="flex justify-between items-center">
					<button
						className="text-white font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-600 transition duration-300"
						onClick={generateQuote}
					>
						Next quote
					</button>
				</div>
			</div>
		</div>
	);
};

export default InspirationalQuotes;

import { useState, useEffect } from "react";

type Quote = {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  tags: string[];
};

const baseUrl: string = "https://api.quotable.io";

export const ProjectNine = () => {
  const [quote, setQuote] = useState<Quote>();

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/random`).then((r) => r.json());
      setQuote(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>"{quote?.content}"</h1>
      <h4>- {quote?.author}</h4>
    </div>
  );
};

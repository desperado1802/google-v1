import ImageResults from "@/components/ImageResults";
import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import Response from "@/Response";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />

      {/* Search web and image Results */}
      {router.query.searchType === "" ? (
        <SearchResults results={results} />
      ) : (
        <ImageResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}

import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";
import React from "react";

export default function search() {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
    </div>
  );
}

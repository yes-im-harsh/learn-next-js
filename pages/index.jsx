import React from "react";
import Link from "next/link";

// import "../src/style.css"; This will throw error.

const Page = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/notes">
      <a>Link</a>
    </Link>
  </div>
);

export default Page;

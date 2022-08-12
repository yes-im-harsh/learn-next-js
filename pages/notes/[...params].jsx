import React from "react";
import { useRouter } from "next/router";

// file => /notes/[..params].jsx
// route => /notes/1/2/3

const Page = () => {
  const router = useRouter();

  const { params } = router.query;
  console.log(params);

  // params === ["a", "b", "c"]

  return <h1>Note: </h1>;
};

export default Page;


import React, { Fragment, useEffect, useState } from "react";
import API from "../services/api/API";
import axios from "axios";
import Link from 'next/link';

const MyAPI = () => {

  return (
    <Fragment>
      <div>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <ul></ul>
      </div>
    </Fragment>
  );
};

/*export async function getStaticProps () {
  const res = await axios.get(`https://admin.bafkoriginal.com/api/`);
  const todos = res.data;
  //console.log(todos);

  return {
    props: {
      todos,
    },
    revalidate: 60
  };
}
*/

export default MyAPI;

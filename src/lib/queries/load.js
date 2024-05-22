import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ request, form }) {
    console.log(form)


    let query = gql`
    query Methods {
    page(where: {id: "clv89bh0vn4z007unrv85gsw1"}) {
        title
        content {
        html
        }
    }
    methods(first: 100) {
        id
        slug
        title
        categories {
        title
        id
        }
        template {
        url(transformation: {document: {output: {format: webp}}})
        height
        width
        }
    }
    categories(first: 10){
        slug
        title
    }
    }`;

  const data = await hygraph.request(query);
  return data;
}


//   methods(first: 100, ${filter}) {
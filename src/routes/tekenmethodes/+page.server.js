import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load({ url }) {
  const categories = url.searchParams.getAll('categorie') || [];
  let filter = '';

  if (categories.length > 0) {
    const categoryFilters = categories.map(category => `{slug: "${category}"}`).join(',');
    filter = `, where: {categories_some: {OR: [${categoryFilters}]}}`;
  }

  let query = gql`
  query Methods {
    page(where: {id: "clv89bh0vn4z007unrv85gsw1"}) {
      title
      content {
        html
      }
    }

    methods(first: 100, ${filter}) {
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

  console.log(query)
  const data = await hygraph.request(query);

  return data;
}
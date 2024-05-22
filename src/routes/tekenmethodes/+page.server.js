import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";
import { load } from "$lib/queries/load.js";

export const actions = {
  default: async ({request, form}) => {
    const formData = await request.formData();

    const data = formData.getAll('category')

    return form
  },
};

export { load };

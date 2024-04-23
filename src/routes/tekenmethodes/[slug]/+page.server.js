import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

import methodsBeschrijvingQueryUrl from "$lib/queries/url.js";

export const load = async ({ params }) => {
	const { slug } = params;
	const queryUrl = methodsBeschrijvingQueryUrl(gql, slug);

    return await hygraph.request(queryUrl);
}
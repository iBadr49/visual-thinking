import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

import methodsStepsQueryUrl from '$lib/queries/methodsUrl.js';

export const load = async ({ params }) => {
	const { slug } = params;
	const queryUrl = methodsStepsQueryUrl(gql, slug);

	return await hygraph.request(queryUrl);
};
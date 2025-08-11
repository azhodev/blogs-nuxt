import gql from 'graphql-tag';

const allArticlesQuery = gql`
query allArticlesQuery {
  articles {
    documentId
    body
    title
    date
    description
    slug 
  }
}
`;
const singleArticleQuery = gql`
query singleArticleQuery($id: ID!) {
  article(documentId: $id) {
    documentId
    title
    date
    body
    description
    slug 
  }
}
`;

export { allArticlesQuery as a, singleArticleQuery as s };
//# sourceMappingURL=queries-DpV5A1X5.mjs.map

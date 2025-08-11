import gql from 'graphql-tag';

export const allArticlesQuery = gql`
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
`

export const singleArticleQuery = gql`
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
`
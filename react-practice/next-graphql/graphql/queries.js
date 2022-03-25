import { gql } from "graphql-tag";

export const GET_CHARACTERS = gql`
  query getCharactersByPage($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        prev
        next
      }
      results {
        id
        name
        image
        species
      }
    }
    __typename @skip(if: true)
  }
`;

export const GET_CHARACTER = gql`
  query getCharacter($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      image
      location {
        name
      }
      origin {
        name
      }
      gender
      __typename @skip(if: true)
    }
  }
`;

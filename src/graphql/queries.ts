// src/graphql/queries.ts
import { gql } from '@apollo/client/core'

export const GET_CHARACTERS = gql`
  query ($name: String) {
    characters(page: 1, filter: { name: $name }) {
      results {
        id
        name
        image
        status
        species
        origin {
          name
        }
      }
    }
  }
`

import { gql } from '@apollo/client/core'

export const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
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

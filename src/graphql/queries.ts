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

export const GET_EPISODES = gql`
  query {
    episodes(page: 1) {
      results {
        id
        name
      }
    }
  }
`

export const GET_LOCATIONS = gql`
  query {
    locations(page: 1) {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`

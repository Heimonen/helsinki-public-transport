import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
});

const createQuery = searchTerm => gql`
    {
      stops(name: "${searchTerm}") {
        gtfsId
        name
        code
        lat
        lon
      }
    }`

export const searchStops = async query => client.query({ query: createQuery(query) })
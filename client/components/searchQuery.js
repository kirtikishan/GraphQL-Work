import gql from 'graphql-tag';


const searchQuery = gql`
      query search {
         makes {
            id,
            name
            models {
                id,
                name
            }
         }
      }
    `;

export default searchQuery;
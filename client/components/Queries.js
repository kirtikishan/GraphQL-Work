import gql from 'graphql-tag';


export const homePageQuery = gql`
  {
     carOfTheWeek{
          modelId,
          review,
          carModel {
            makeId,
            name,
            price,
            imageUrl
            make {
              name
            }
          }
     }
  }
`;

export const searchQuery = gql`
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


export const detailsQuery = gql`
  query ModelsQuery($id : Int!) {
    model(id: $id) {
      name,
      price,
      imageUrl,
      make {
          id,
          name
      }
    }
  }
`;
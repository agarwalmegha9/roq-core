import { gql } from 'apollo-server-express';

export const filesQuery = gql`
  query files(
    $entityIdentifiers: IdFilterArgType!
    $entityName: EntityNameFilterArgType!
    $fileCategory: StringFilterArgType!
    $order: FileOrderArgType
    $limit: Int
  ) {
    files(
      order: $order
      limit: $limit
      filter: { entityName: $entityName, entityIdentifiers: $entityIdentifiers, fileCategory: $fileCategory }
    ) {
      data {
        id
        createdByUserId
        url
        status
        name
        customMetaData
        fileAssociations {
          data {
            entityIdentifier
            entityName
          }
        }
      }
    }
  }
`;

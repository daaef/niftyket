import { gql } from 'nuxt-graphql-request'

export const minterStores = gql`
    query FetchMinterStores($minter: String!) {
    mb_store_minters(where: {minter_id: {_eq: $minter}}) {
      minter_id
      nft_contracts {
        id
        name
      }
    }
  }
`

export const nftTokens = gql`
    query FetchNFTTokens($contractId: String!) {
      nft_tokens(where: {nft_contract_id: {_eq: $contractId}}) {
      minter
      nft_contract {
        id
        name
        owner_id
        spec
        symbol
      }
      burned_receipt_id
      burned_timestamp
      owner
    }
  }
`

export const nftMetadata = gql`
    query FetchNFTMetadata($contractId: String!) {
      mb_views_nft_metadata(
        where: {nft_contract_id: {_eq: $contractId}}
      ) {
        extra
        media
        nft_contract_id
        nft_contract_name
        title
        description
        id
        nft_contract_icon
        nft_contract_created_at
        nft_contract_is_mintbase
        nft_contract_owner_id
        nft_contract_reference
        nft_contract_spec
        nft_contract_symbol
        reference_blob
      }
  }
`

export const nftActivities = gql`
    query FetchNFTActivities($contractId: String!) {
    mb_views_nft_metadata(
    where: {nft_contract_id: {_eq: $contractId}}
  ) {
    extra
    media
    nft_contract_id
    nft_contract_name
    title
    description
    id
    nft_contract_icon
    nft_contract_created_at
    nft_contract_is_mintbase
    nft_contract_owner_id
    nft_contract_reference
    nft_contract_spec
    nft_contract_symbol
    reference_blob
  }
`

export const fetchMinters = gql`
    query FetchMinters($contractId: String!) {
        mb_store_minters(where: {nft_contract_id: {_eq: $contractId}}) {
        nft_contract {
          name
          owner_id
        }
        minter_id
      }
  }
`


export const fetchStore = gql`
    query FetchContract($contractId: String!) {
        mb_store_minters(where: {nft_contract_id: {_eq: $contractId}}) {
        nft_contract {
          name
          owner_id
        }
        minter_id
      }
  }
`

/*

export const fetchStore = gql`
  query FetchStore($storeId: String!, $limit: Int = 20, $offset: Int = 0) {
    store(where: { id: { _eq: $storeId } }) {
      id
      name
      symbol
      baseUri
      owner
      minters {
        account
        enabled
      }

      tokens(
        order_by: { thingId: asc }
        where: { storeId: { _eq: $storeId }, burnedAt: { _is_null: true }, thing: {metadata: {id: {_is_null: false}}} }
        limit: $limit
        offset: $offset
        distinct_on: thingId
      ) {
        id
        thingId
        list {
          acceptedOfferId
          autotransfer
          contractId
          createdAt
          id
          price
          ownerId
          thingId
        }
        thing {
          id
          metaId
          memo
          storeId
          tokens {
            minter
            id
            thingId
            ownerId
            royaltyPercent
            burnedAt
            splits {
              id
              percent
            }
            thing {
              storeId
              metadata {
                thing_id
                media
                id
                title
                type
                description
                extra
              }
            }
            list {
              acceptedOfferId
              autotransfer
              contractId
              createdAt
              id
              price
              ownerId
              thingId
            }
          }
          metadata {
            thing_id
            media
            id
            title
            type
            description
            extra
          }
        }
      }
    }
  }
`
*/

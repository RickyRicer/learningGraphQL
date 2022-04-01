import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($firstName: String!, $lastName: string!, $email: String!, $password: String!) {
        createUser()
    }
`
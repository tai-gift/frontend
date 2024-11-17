import gql from "graphql-tag";

export interface TicketPurchase {
  id: string;
  drawAddress: string;
  contractId_: string;
  buyer: string;
  block_number: string;
  amount: string;
  timestamp_: string;
  numberOfTickets: string;
  transactionHash_: string;
}

export interface LeadersQuery {
  ticketPurchaseds: TicketPurchase[];
}

export const LEADERS_QUERY = gql`
  query leaders {
    ticketPurchaseds(orderBy: amount, orderDirection: desc) {
      id
      drawAddress
      contractId_
      buyer
      block_number
      amount
      timestamp_
      numberOfTickets
      transactionHash_
    }
  }
`;

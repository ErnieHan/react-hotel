import styled from "styled-components";

export const Content = styled.div`
  padding: 30px 0 100px 0;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const Left = styled.div`
  float: left;
  width: 30%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Right = styled.div`
  float: left;
  width: 70%;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const MemberLevel = styled.div`
  font-size: 0.85rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #e9e8e7;
  span {
    color: #bc9366;
    font-weight: bold;
  }
  &:last-child {
    border-bottom: 0;
  }
`;

export const StarMoney = styled.div`
  text-align: center;
  h3,
  h4 {
    font-weight: normal;
  }
  h3 {
    font-size: 0.85rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    img {
      margin-right: 0.5rem;
    }
  }
  h4 {
    font-size: 0.6rem;
  }
`;

export const SubSection = styled.div`
  margin-bottom: 2rem;
`;

export const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const MemberDetail = styled.div`
  padding: 1.5rem 0;
  @media screen and (max-width: 991px) {
    padding: 0.75rem 0;
  }
`;

export const DetailKey = styled.p`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

export const DetailValue = styled.p`
  font-size: 1.75rem;
  @media screen and (max-width: 991px) {
    font-size: 1.5rem;
  }
`;

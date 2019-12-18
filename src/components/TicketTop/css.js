import styled from "styled-components";

export const Banner = styled.div`
  height: 200px;
  background: url("https://t.kfs.io/upload_images/106567/1200x630______1.jpg")
    no-repeat center;
  background-size: cover;
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    margin: 0 -15px 1rem -15px;
  }
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: normal;
  margin-bottom: 1rem;
  span {
    font-size: 2rem;
    color: #64c025;
    padding-right: 15px;
  }
`;

export const Table = styled.table`
  td {
    padding-bottom: 8px;
  }
  .dome-key {
    color: gray;
    padding-right: 15px;
  }
`;

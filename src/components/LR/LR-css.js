import styled from "styled-components";

export const Price = styled.span`
  color: #c69967;
  font-weight: bold;
  font-size: 18px;
`;

export const OrigPrice = styled.span`
  color: #8e8e8e;
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: line-through;
  margin-right: 8px;
`;

export const NewsTitle = styled.div`
  font-size: 0.85rem;
  text-align: right;
  color: #8e8e8e;
  font-weight: bold;
  line-height: 1;
`;

export const AddToBag = styled.button`
  padding: 1rem;
  background: #111;
  color: #fff;
  border: 0;
  border-radius: 0;
  width: 100%;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

export const NeedsHelp = styled.div`
  font-size: 13px;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexCol = styled.div`
  width: ${props => (props.col === 6 ? "50%" : "100%")};
  text-align: center;
  font-size: 13px;
  color: #8e8e8e;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 2rem;
    margin-right: 0.25rem;
  }
`;

export const PriceSection = styled.div`
  margin-bottom: 1rem;
`;

export const QuantitySection = styled.div`
  margin-bottom: 1rem;
`;

export const Sub = styled.div`
  margin-bottom: 0.25rem;
`;

export const QuantityFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const PlusButton = styled.div`
  cursor: pointer;
  min-width: 38px;
  text-align: center;
  padding: 8px 0;
  color: #8e8e8e;
`;

export const Quantity = styled.div`
  padding: 12px;
  min-width: 72px;
  text-align: center;
  border: 1px solid #d1d1d1;
`;

export const SoldOutButton = styled.button`
  background: #fff;
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid #d1d1d1;
  color: #d1d1d1;
  font-weight: bold;
  margin-bottom: 0.5rem;
  cursor: help;
`;

export const OpitionButton = styled.div`
  padding: 0.5rem 1rem;
  min-width: 72px;
  text-align: center;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background: ${props => (props.active ? "rgba(198,153,103,0.2)" : "")};
  border: ${props =>
    props.active ? "1px solid #c69967" : "1px solid #d1d1d1"};
  cursor: pointer;
  &:hover {
    border: 1px solid #c69967;
  }
`;

export const OpitionDisableButton = styled.div`
  padding: 0.5rem 1rem;
  min-width: 72px;
  text-align: center;
  border: 1px solid #d1d1d1;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
  color: #d1d1d1;
  background: #e8e8e8;
`;

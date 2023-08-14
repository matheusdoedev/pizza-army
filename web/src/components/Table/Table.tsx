import { CSSProperties, FC } from "react";
import { styled } from "styled-components";

import { Text, Title } from "@/components";

import { theme } from "@/styles";

interface TableProps {
  heads: string[];
  data?: unknown[];
  theadStyle: CSSProperties;
}

const TableComponent: FC<TableProps> = ({ heads, data, theadStyle }) => {
  const tableHeads = () =>
    heads.map((head) => (
      <Title
        key={head}
        as="th"
        fontSize="14px"
        letterSpacing="1.64px"
        color={theme.colors.gray["200"]}
      >
        {head}
      </Title>
    ));

  const tableRows = () =>
    data?.map((rowData) => {
      const dataItems = Object.values(rowData as object);
      const tds = () =>
        dataItems.map((dataItem) => <Text as="td">{dataItem}</Text>);

      return <TableRow style={theadStyle}>{tds()}</TableRow>;
    });

  return (
    <Table>
      <TableHead style={theadStyle}>{tableHeads()}</TableHead>
      <TableBody>{tableRows()}</TableBody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
`;

const TableHead = styled.thead`
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.gray["200"]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray["100"]};
  padding: 16px 24px;
`;

export default TableComponent;

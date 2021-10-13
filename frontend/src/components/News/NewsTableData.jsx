import { memo } from "react";
import { Td, Button } from "@chakra-ui/react";

export const NewTableData = memo((props) => {
  const { publishedAt, name, title, onClick, fullData } = props;
  return (
    <>
      <Td borderBottomColor="gray.700" p={0} m={1} w="15%" >{publishedAt.slice(5, 10)}<br />{publishedAt.slice(11, 16)}</Td>
      <Td borderBottomColor="gray.700" p={0} m={1} w="20%" >{name}</Td>
      <Td borderBottomColor="gray.700" p={0} m={1} w="60%" pr={4}>{title}</Td>
      <Td borderBottomColor="gray.700" p={0} m={1} w="15%" ><Button mr={3} w="50px" fontSize="xs" border="1px solid gray" shadow="md" _style={{ outline: "none" }} onClick={() => onClick(fullData)}>Detail</Button></Td>
    </>
  );
});

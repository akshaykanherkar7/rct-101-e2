import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ page, setPage, limit, setLimit, totalcount }) => {
  // TODO: Remove below const and instead import them from chakra
  // Button = () => <div />;
  // ButtonGroup = () => <div />;
  // Select = () => <div />;

  return (
    <ButtonGroup>
      <Button
        data-cy="pagination-first-button"
        disabled={page <= 1}
        onClick={() => setPage(1)}
      >
        First
      </Button>
      <Button
        data-cy="pagination-previous-button"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </Button>
      <Select
        data-cy="pagination-limit-select"
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button
        data-cy="pagination-next-button"
        disabled={totalcount < page * 3}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
      <Button
        data-cy="pagination-last-button"
        disabled={totalcount < page * 3}
        onClick={() => setPage(Number(totalcount) / 2)}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;

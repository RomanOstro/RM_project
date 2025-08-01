import { useSearchParams } from "react-router-dom";
import {
  IconNext,
  IconPrev,
  PaginationButton,
  PaginationContainer,
  PaginationItem,
  PaginationList,
} from "./paginationStyle";

interface IPaginationProps {
  totalPage: number;
}

export const Pagination = (props: IPaginationProps) => {
  const { totalPage } = props;

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const setPage = (page: number) => {
    const newParam = new URLSearchParams(searchParams);
    newParam.set("page", page.toString());
    setSearchParams(newParam, { replace: false });
  };

  const nextHendler = () => setPage(Math.min(currentPage + 1, totalPage));

  const prevHenpler = () => setPage(Math.max(currentPage - 1, 1));

  const jumpNextHendler = () => setPage(Math.min(currentPage + 3, totalPage));

  const jumpPrevHenpler = () => setPage(Math.max(currentPage - 3, 1));

  return (
    <PaginationContainer>
      <PaginationList>
        <PaginationItem>
          <PaginationButton onClick={prevHenpler}>
            <IconPrev />
          </PaginationButton>
        </PaginationItem>

        {currentPage > 2 && (
          <PaginationItem>
            <PaginationButton onClick={() => setPage(1)}>1</PaginationButton>
          </PaginationItem>
        )}
        {currentPage > 3 && (
          <PaginationItem>
            <PaginationButton onClick={jumpPrevHenpler}>...</PaginationButton>
          </PaginationItem>
        )}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationButton onClick={prevHenpler}>
              {currentPage - 1}
            </PaginationButton>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationButton disabled $isActive={true}>
            {currentPage}
          </PaginationButton>
        </PaginationItem>

        {currentPage < totalPage && (
          <PaginationItem>
            <PaginationButton onClick={nextHendler}>
              {currentPage + 1}
            </PaginationButton>
          </PaginationItem>
        )}
        {currentPage + 2 < totalPage && (
          <PaginationItem>
            <PaginationButton onClick={jumpNextHendler}>...</PaginationButton>
          </PaginationItem>
        )}
        {currentPage + 1 < totalPage && (
          <PaginationItem>
            <PaginationButton onClick={() => setPage(totalPage)}>
              {totalPage}
            </PaginationButton>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationButton onClick={nextHendler}>
            <IconNext />
          </PaginationButton>
        </PaginationItem>
      </PaginationList>
    </PaginationContainer>
  );
};

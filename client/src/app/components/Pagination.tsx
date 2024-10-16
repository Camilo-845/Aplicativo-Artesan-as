"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface pageButtonData {
  pageNumber:number;
  active:boolean;
}

export default function PaginationComponent({
  firstPage,
  currentPage,
  lastPage,
  handlePageChange,
}: {
  firstPage?: number;
  currentPage?: number;
  lastPage?: number;
  handlePageChange?: (newPage: number) => void;
}) {
  const pages =(lastPage&&firstPage&&currentPage)? lastPage - firstPage + 1: 0;
  const rendedPages:pageButtonData[] = [];

  for (let i = 0, j = 0; i < pages && i < 3; i++, j++) {
    if(pages!=0){
      let pageButtonData:pageButtonData = {
        pageNumber: (currentPage || 0) - 1 + j,
        active: ((currentPage || 0) - 1 + j)==(currentPage || 0),
      };
      if (j == 0 && currentPage == firstPage) {
        pageButtonData.pageNumber=(currentPage || 0);
        pageButtonData.active = true;
        j++
      } else if ((((j+1||0) - 1) % 3 + 1) == 2 && currentPage == lastPage) {
        pageButtonData = {
          pageNumber: (lastPage || 0),
          active: true,
        };
        rendedPages.push(pageButtonData);
        console.log("Me sali mi prro, no respondo por más renders_", i)
        break;
      }
      rendedPages.push(pageButtonData);
    }
  }
/*   if (currentPage == firstPage) {
    selected = 0;
    rendedPages = [currentPage, currentPage + 1, currentPage + 2];
  } else if (currentPage == lastPage) {
    selected = 2;
    rendedPages = [lastPage - 2, lastPage - 1, lastPage];
  } */
  return (
    <Pagination>
      <PaginationContent>
        {currentPage != firstPage ? (
          <PaginationItem>
            <PaginationPrevious
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition duration-300"
              onClick={() => (handlePageChange)?handlePageChange((currentPage || 0) - 1):undefined}
              href="#productos"
            />
          </PaginationItem>
        ) : (
          <></>
        )}

        {(currentPage || 0) >= (firstPage || 0) + 2 ? (
          <PaginationItem>
            <PaginationEllipsis></PaginationEllipsis>
          </PaginationItem>
        ) : (
          <></>
        )}
        {rendedPages.map((rendedPage) => {
          if(!rendedPage)return <></>
          return (
            <PaginationItem key={`Pagination_${rendedPage.pageNumber}`}>
              <PaginationLink
                onClick={() => (handlePageChange)?handlePageChange(rendedPage.pageNumber):undefined}
                href="#productos"
                isActive={rendedPage.active}
              >
                {rendedPage.pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {(currentPage || 0) <= (lastPage || 0) - 2 ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : (
          <></>
        )}
        {currentPage != lastPage ? (
          <PaginationItem>
            <PaginationNext
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition duration-300"
              onClick={() => (handlePageChange)?handlePageChange((currentPage || 0) + 1):undefined}
              href="#productos"
            />
          </PaginationItem>
        ) : (
          <></>
        )}
      </PaginationContent>
    </Pagination>
  );
}

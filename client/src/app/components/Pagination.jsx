'use client'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  export default function PaginationComponent() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#productos" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#productos">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#productos" isActive="true">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#productos">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#productos" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  
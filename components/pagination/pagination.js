import React from "react";
import Link from "next/link";

export default function Pagination({pageNumber}) {
    return (
        <div className='pagination justify-content-center mt-5'>
            <Link href=''>Previous</Link>
            <span className='mx-4'>
                page {pageNumber} from all
            </span>
            <Link href=''>Next</Link>
        </div>

    )}

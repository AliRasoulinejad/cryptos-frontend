import React, {useEffect, useState} from "react";
import Image from 'next/image';
import Link from "next/link";

// bootstrap css
import 'bootstrap/dist/css/bootstrap.css'

export function Comment(comment) {
    return (
        <div className="commented-section mt-2 mb-3">
            <div className="d-flex flex-row align-items-center commented-user">
                <h5 className="mr-2" id="user">{comment.user}</h5>
                <span className="dot mb-1"></span>
                <span className="mb-1 ml-2">createdAt={comment.createdAt}</span>
            </div>
            <div className="comment-text-sm">
                <span id="details">{comment.text}</span>
            </div>
        </div>
    )
}
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function IndexPostCard({post}) {
    const postUrl = `posts/${post.slug}`
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div className="card card-custom">
                <Link href={postUrl} className="post-link">
                    <Image className="card-img-top thumbnail card-img-top-custom" src={`https://cryptos.blue/media/${post.image}`} alt={post.title} width={100} height={100}/>
                </Link>
                <div className="card-body card-block-custom">
                    <div className="card-block card-block-custom card-block-post-custom">
                        <div>
                            <h2 className="card-title"><Link href={postUrl}>{post.title}</Link></h2>
                            <p className="card-text">{post.textIndex}</p>
                        </div>

                        <div>
                            <div className="wrapfooter">
                                <span className="meta-footer-thumb">
                                    <Link href={`@${post.author.userName}`}>
                                        <Image className="author-thumb" src={`https://cryptos.blue/media/${post.author.image}`} alt={post.author.name} width={100} height={100} />
                                    </Link>
                                </span>
                                <span className="author-meta">
                                    <span className="post-name mt-2">
                                        <Link href={`@${post.author.userName}`}>{post.author.name}</Link>
                                    </span>
                                    <br/>
                                    <span className="post-date" >createdAt: {post.createdAt}</span>
                                    <span className="dot"></span>
                                    <span className="post-read">read at {post.readingTime} minutes</span>
                                </span>
                            </div>
                            <hr/>
                            {/*Show like and dislike and comment number*/}
                            <div className="show-like-dislike-comment">
                                <span className="show-like-detail">
                                    <svg
                                        className="comment-reaction-icon reaction-like user-has-not-reacted show-like"
                                        xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                        viewBox={"0 0 24 24"} stroke={"#427297"}
                                        strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}
                                        style={{marginRight: "5"}}>
                                        <path
                                            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                        <span>{post.likesCount}</span>
                                    </svg>
                                </span>
                                <span className="show-dislike-detail">
                                    <svg
                                        className="comment-reaction-icon reaction-dislike user-has-reacted show-dislike"
                                        xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                        viewBox={"0 0 24 24"} stroke={"#427297"}
                                        strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}
                                        style={{marginRight: "5"}}>
                                        <path
                                            d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                                    </svg>
                                    <span>{post.disLikesCount}</span>
                                </span>
                                <span className="show-comment-detail">
                                    <svg className="svgIcon-use" width="29" height="29" viewBox={"0 0 29 29"}
                                         style={{stroke: "#ccc"}}>
                                        <path
                                            d="M21.27 20.058c1.89-1.826 2.754-4.17 2.754-6.674C24.024 8.21 19.67 4 14.1 4 8.53 4 4 8.21 4 13.384c0 5.175 4.53 9.385 10.1 9.385 1.007 0 2-.14 2.95-.41.285.25.592.49.918.7 1.306.87 2.716 1.31 4.19 1.31.276-.01.494-.14.6-.36a.625.625 0 0 0-.052-.65c-.61-.84-1.042-1.71-1.282-2.58a5.417 5.417 0 0 1-.154-.75zm-3.85 1.324l-.083-.28-.388.12a9.72 9.72 0 0 1-2.85.424c-4.96 0-8.99-3.706-8.99-8.262 0-4.556 4.03-8.263 8.99-8.263 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32c0 .07 0 .19.02.37.03.29.1.6.19.92.19.7.49 1.4.89 2.08-.93-.14-1.83-.49-2.67-1.06-.34-.22-.88-.48-1.16-.74z"></path>
                                    </svg>
                                    <span>{post.commentsCount}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PostsListCard({post}) {
    const postUrl = `posts/${post.conversationID}`
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
            <div className="card card-custom">
                <Link href={post.id} className="post-link">
                    <Image className="card-img-top thumbnail card-img-top-custom" src={`https://cryptos.blue/media/${post.image}`} alt={post.title}  width={100} height={100}/>
                </Link>
                <div className="card-body card-block-custom">
                    <div className="card-block card-block-custom card-block-post-custom">
                        <div>
                            <h2 className="card-title"><Link href={postUrl}>{post.title}</Link></h2>
                            <p className="card-text">{post.textIndex}</p>
                        </div>

                        <div>
                            <div className="wrapfooter">
                                <span className="meta-footer-thumb">
                                    <Link href={`@${post.author.userName}`}>
                                        <Image className="author-thumb" src={`https://cryptos.blue/media/${post.author.image}`} alt={post.author.name} width={100} height={100}/>
                                    </Link>
                                </span>
                                <span className="author-meta">
                                    <span className="post-name mt-2">
                                        <Link href={`@${post.author.userName}`}>{post.author.name}</Link>
                                    </span>
                                    <br/>
                                    <span className="post-date" createdAt={post.createdAt}>{post.createdAt}</span>
                                    <span className="dot"></span>
                                    <span className="post-read">read at {post.readingTime} minutes</span>
                                </span>
                            </div>
                            <hr/>
                            {/*Show like and dislike and comment number*/}
                            <div className="show-like-dislike-comment">
                                <span className="show-like-detail">
                                    <svg
                                        className="comment-reaction-icon reaction-like user-has-not-reacted show-like"
                                        xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                        viewBox={"0 0 24 24"} stroke={"#427297"}
                                        strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}
                                        style={{marginRight: "5"}}>
                                        <path
                                            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                        <span>{post.likesCount}</span>
                                    </svg>
                                </span>
                                <span className="show-dislike-detail">
                                    <svg
                                        className="comment-reaction-icon reaction-dislike user-has-reacted show-dislike"
                                        xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                        viewBox={"0 0 24 24"} stroke={"#427297"}
                                        strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}
                                        style={{marginRight: "5"}}>
                                        <path
                                            d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                                    </svg>
                                    <span>{post.disLikesCount}</span>
                                </span>
                                <span className="show-comment-detail">
                                    <svg className="svgIcon-use" width="29" height="29" viewBox={"0 0 29 29"}
                                         style={{stroke: "#ccc"}}>
                                        <path
                                            d="M21.27 20.058c1.89-1.826 2.754-4.17 2.754-6.674C24.024 8.21 19.67 4 14.1 4 8.53 4 4 8.21 4 13.384c0 5.175 4.53 9.385 10.1 9.385 1.007 0 2-.14 2.95-.41.285.25.592.49.918.7 1.306.87 2.716 1.31 4.19 1.31.276-.01.494-.14.6-.36a.625.625 0 0 0-.052-.65c-.61-.84-1.042-1.71-1.282-2.58a5.417 5.417 0 0 1-.154-.75zm-3.85 1.324l-.083-.28-.388.12a9.72 9.72 0 0 1-2.85.424c-4.96 0-8.99-3.706-8.99-8.262 0-4.556 4.03-8.263 8.99-8.263 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32c0 .07 0 .19.02.37.03.29.1.6.19.92.19.7.49 1.4.89 2.08-.93-.14-1.83-.49-2.67-1.06-.34-.22-.88-.48-1.16-.74z"></path>
                                    </svg>
                                    <span>{post.commentsCount}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function RecommendedPostCard({post}) {
    const postUrl = `posts/${post.conversationID}`
    return (
        <div className="col-md-4">
            <div className="card card-custom">
                <Link href={postUrl}>
                    <Image className="img-fluid img-thumb" src={`https://cryptos.blue/media/${post.image}`} alt="" width={100} height={100}/>
                </Link>
                <div className="card-block card-block-custom card-block-post-custom">
                    <div>
                        <h2 className="card-title">
                            <Link href={`${postUrl}`}>{post.title}</Link>
                        </h2>
                    </div>
                    <div>
                        <div className="metafooter">
                            <div className="wrapfooter">
                                <span className="meta-footer-thumb">
                                    <Link href={`@${post.author.userName}`}>
                                        <Image className="author-thumb" src={`https://cryptos.blue/media/${post.author.id}`} alt={post.author.name }  width={100} height={100}/>
                                    </Link>
                                </span>
                                <span className="author-meta">
                                    <span className="post-name">
                                        <Link href={`@${post.author.userName}`}>{post.author.name}</Link>
                                    </span>
                                    <br/>
                                    <span className="post-date">createdAt={post.createdAt}</span>
                                    <span className="dot"></span>
                                    <span className="post-read">read at {post.readingTime} minutes</span>
                                </span>
                            </div>
                            <hr/>
                            <div className="show-like-dislike-comment">
                                <span className="show-like-detail">
                                    <svg
                                        className="comment-reaction-icon reaction-like user-has-not-reacted show-like"
                                        xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                        viewBox={"0 0 24 24"} stroke={"#427297"}
                                        strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}
                                        style={{marginRight: "5"}}>
                                        <path
                                            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                        <span>{post.likesCount}</span>
                                    </svg>
                                </span>
                                <span className="show-dislike-detail">
                                    <svg className="comment-reaction-icon reaction-dislike user-has-reacted show-dislike"
                                         xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox={"0 0 24 24"} stroke={"#427297"}
                                        strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{marginRight: "5"}}>
                                        <path
                                            d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                                    </svg>
                                    <span>{post.disLikesCount}</span>
                                </span>
                                <span className="show-comment-detail">
                                    <svg className="svgIcon-use" width="29" height="29" viewBox={"0 0 29 29"} style={{stroke: "#ccc"}}>
                                        <path d="M21.27 20.058c1.89-1.826 2.754-4.17 2.754-6.674C24.024 8.21 19.67 4 14.1 4 8.53 4 4 8.21 4 13.384c0 5.175 4.53 9.385 10.1 9.385 1.007 0 2-.14 2.95-.41.285.25.592.49.918.7 1.306.87 2.716 1.31 4.19 1.31.276-.01.494-.14.6-.36a.625.625 0 0 0-.052-.65c-.61-.84-1.042-1.71-1.282-2.58a5.417 5.417 0 0 1-.154-.75zm-3.85 1.324l-.083-.28-.388.12a9.72 9.72 0 0 1-2.85.424c-4.96 0-8.99-3.706-8.99-8.262 0-4.556 4.03-8.263 8.99-8.263 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32c0 .07 0 .19.02.37.03.29.1.6.19.92.19.7.49 1.4.89 2.08-.93-.14-1.83-.49-2.67-1.06-.34-.22-.88-.48-1.16-.74z"></path>
                                    </svg>
                                    <span>{post.commentsCount}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function CategoryPostsCard({post}) {
    const postUrl = `posts/${post.conversationID}`
    return (
        <>
            <div className="col-xl-6 col-lg-6 col-md-6 authorpostbox">
            <div className="card card-custom">
                <Link href={post.url} className="post-link">
                    <Image className={"card-img-top thumbnail card-img-top-custom"} src={`https://cryptos.blue/media/${ post.image }`} alt="" />
                </Link>
                <div className="card-body card-block-custom">
                    <div className="card-block card-block-custom card-block-post-custom">
                        <div>
                            <h2 className="card-title">
                                <Link href={post.url}>{post.title}</Link>
                            </h2>
                            <p className="card-text">{post.textIndex}</p>
                        </div>
                        <div>
                            <div className="wrapfooter">
									<span className="meta-footer-thumb">
										<Link href={`@${post.author.userName}`}>
                                            <Image className="author-thumb" src={`https://cryptos.blue/media/${post.author.image}`} alt={post.author.name} width={100} height={100}/>
                                        </Link>
									</span>
                                <span className="author-meta">
                                    <span className="post-name mt-2">
                                        <Link href={`@${post.author.userName}`}>{post.author.name}</Link>
                                    </span>
                                    <br/>
                                    <span className="post-date"> createdAt={post.createdAt}</span>
                                    <span className="dot"></span>
                                    <span className="post-read">read at {post.readingTime} minutes</span>
                                </span>
                            </div>
                            <hr />
                            {/* Show like and dislike and comment number*/}
                            <div className="show-like-dislike-comment">
                                <span className="show-like-detail">
                                    <svg
                                        className="comment-reaction-icon reaction-like user-has-not-reacted show-like"
                                        xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                        viewBox={"0 0 24 24"} stroke={"#427297"}
                                        strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}
                                        style={{marginRight: "5"}}>
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                        <span>{post.likesCount}</span>
                                    </svg>
                                </span>
                                <span className="show-dislike-detail">
                                    <svg
                                        className="comment-reaction-icon reaction-dislike user-has-reacted show-dislike"
                                        xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                        viewBox={"0 0 24 24"} stroke={"#427297"}
                                        strokeWidth={"1.7"} strokeLinecap={"round"} strokeLinejoin={"round"}
                                        style={{marginRight: "5"}}>
                                        <path
                                            d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                                    </svg>
                                    <span>{post.disLikesCount}</span>
                                </span>
                                <span className="show-comment-detail">
                                    <svg className="svgIcon-use" width="29" height="29" viewBox={"0 0 29 29"} style={{stroke: "#ccc"}}>
                                        <path d="M21.27 20.058c1.89-1.826 2.754-4.17 2.754-6.674C24.024 8.21 19.67 4 14.1 4 8.53 4 4 8.21 4 13.384c0 5.175 4.53 9.385 10.1 9.385 1.007 0 2-.14 2.95-.41.285.25.592.49.918.7 1.306.87 2.716 1.31 4.19 1.31.276-.01.494-.14.6-.36a.625.625 0 0 0-.052-.65c-.61-.84-1.042-1.71-1.282-2.58a5.417 5.417 0 0 1-.154-.75zm-3.85 1.324l-.083-.28-.388.12a9.72 9.72 0 0 1-2.85.424c-4.96 0-8.99-3.706-8.99-8.262 0-4.556 4.03-8.263 8.99-8.263 4.95 0 8.77 3.71 8.77 8.27 0 2.25-.75 4.35-2.5 5.92l-.24.21v.32c0 .07 0 .19.02.37.03.29.1.6.19.92.19.7.49 1.4.89 2.08-.93-.14-1.83-.49-2.67-1.06-.34-.22-.88-.48-1.16-.74z"></path>
                                    </svg>
                                    <span>{post.commentsCount}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
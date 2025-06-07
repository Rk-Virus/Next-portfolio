// ./frontend/pages/post/[slug].tsx
import groq from 'groq'
import client from '../../client'
import Navbar from "../../components/Navbar";
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import Feedback from '../../components/Feedback';
import Head from 'next/head';
import Script from 'next/script';

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const ptComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value).width(320).height(240).fit('max').auto('format')}
                />
            )
        }
    }
}


const Post = ({ post = {} }) => {
    return (
        <>
            <Head>
                <title>{post?.title}</title>
            </Head>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4419692674540175" crossorigin="anonymous"></Script>
            <Navbar />
            {/* <article>
                <h1>{post?.slug?.current}</h1>
                </article> */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-14 mx-auto flex flex-col">
                    <div className="lg:w-5/6 mx-auto">
                        {/* title  */}
                        <div className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mb-2">{post.title}</div>
                        {post.mainImage && (
                            <div className="rounded-lg mx-auto sm:h-96 my-auto  overflow-hidden">
                                {/* <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" /> */}
                                <img
                                    alt="blog image"
                                    className="object-cover object-center w-100"
                                    src={urlFor(post.mainImage)
                                        .url()}
                                />
                            </div>
                        )}
                        <div className="flex flex-col sm:flex-row mt-10">
                            {/* {post.authorImage && (
                                <div className="sm:w-1/4 text-center sm:pr-8 sm:py-8">
                                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img
                                            alt="author image"
                                            className="object-cover object-center w-100"
                                            src={urlFor(post.authorImage)
                                                .url()}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{post.authName}</h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                        <div className="text-base">
                                            <PortableText
                                                value={post.authorBio}
                                                components={ptComponents}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )} */}
                            <div className="sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t pt-4 sm:mt-0 text-start sm:text-left">
                                <div className="leading-relaxed text-lg"  >
                                    <PortableText
                                        style={{ whiteSpace: 'pre-line' }}
                                        value={post.body}
                                        components={ptComponents}
                                    />

                                    {/* Feedback form */}
                                    <Feedback blogTitle={post.title} />



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


// export default Post
export async function getServerSideProps(context) {
    const { slug } = context.params

    const query = groq`*[_type == "post" && slug.current == $slug][0]{
        title,
        mainImage,
        body,
        "name": author->name,
        "categories": categories[]->title,
        "authorImage": author->image,
        "authorBio": author->bio
      }`

    const post = await client.fetch(query, { slug })

    return {
        props: {
            post: post || null
        }
    }
}

export default Post
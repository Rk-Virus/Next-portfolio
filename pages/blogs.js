import React from 'react'
import Script from "next/script";
import PortableText from "react-portable-text";
import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "../client";
//components
import Navbar from "../components/Navbar";
import SocialHandles from "../components/SocialHandles";

// sanity image builder
const builder = imageUrlBuilder(myConfiguredSanityClient);
function urlFor(source) {
  const url =
    source == undefined
      ? (source = "/imgs/blog1.jpg")
      : (source = builder.image(source).width(650).url());
  return url;
}

function Blogs({ posts }) {
  return (
    <>
        <style jsx>{`
        .w1 {
          width: 97%;
        }
        .w2 {
          width: 85%;
        }
        .w3 {
          width: 80%;
        }
        .w4 {
          width: 90%;
        }
        .w5 {
          width: 45%;
        }
        .w6 {
          width: 67%;
        }
      `}</style>

        <Navbar />
        <section className="section pt-4" id="blog">
        <div className="container">
          <h2 className="mb-3 title header-title">
            Latest <span className="text-danger">Blogs</span>
          </h2>

          <div className="row">
            {posts.map((post) => {
              return (
                <div className="blog-card" key={post.slug.current}>
                  <div className="img-holder">
                    <img
                      // src="/imgs/blog1.jpg"
                      src={urlFor(post.mainImage)}
                      alt="content writing blog image"
                    />
                  </div>
                  <div className="content-holder">
                    <h6 className="title">{post.title}</h6>

                    <p className="post-details">
                      <a href="#">by me</a>
                      <a href="#">
                        <i className="ti-heart text-danger"></i> 2
                      </a>
                      <a href="#">
                        <i className="ti-comment"></i> 1
                      </a>
                    </p>

                    {/* <p>
                  {post.body[0].children[0].text}
                </p> */}
                    {/* alternative  */}
                    <PortableText
                      // Pass in block content straight from Sanity.io
                      content={post.body}
                      // Optionally override marks, decorators, blocks, etc. in a flat
                      // structure without doing any gymnastics
                      serializers={{
                        h1: (props) => (
                          <h1 style={{ color: "red" }} {...props} />
                        ),
                        li: ({ children }) => (
                          <li className="special-list-item">{children}</li>
                        ),
                      }}
                    />

                    <a href="#" className="read-more">
                      Read more <i className="ti-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <hr />

      {/* <!-- core  --> */}
      <Script src="/assets/vendors/jquery/jquery-3.4.1.js"></Script>
    </>
  )
}
export default Blogs

export async function getServerSideProps() {
    const client = myConfiguredSanityClient;
  
    const query = `*[_type == "post"] | order(publishedAt desc)`;
    const posts = await client.fetch(query);
  
    return {
      props: { posts },
    };
  }
  
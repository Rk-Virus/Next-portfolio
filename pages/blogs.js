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

      <Navbar showProfile={false} />
      <section className="section pt-4" id="blog">
        <div className="container">
          <h2 className="mb-3 title header-title">
            All <span className="text-danger">Blogs</span>
          </h2>

          <div className="row">
            {posts.length > 0 && posts.map((post) => {
              return (
                <div className="blog-card" key={post._id}>
                  <div className="img-holder">
                    <img
                      // src="/imgs/blog1.jpg"
                      src={urlFor(post.mainImage)}
                      alt="blog image"
                    />
                  </div>
                  <div className="content-holder">
                    <a href={"/blog/"+post.slug.current}>
                    <h6 className="title">{post.title}</h6>
                    </a>

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

                    <a href={"/blog/"+post.slug.current} className="read-more">
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

      {/* scripts...  */}
      <Script
        src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
        crossOrigin="anonymous"
      ></Script>
      {/* <!-- core  --> */}
      <Script src="/assets/vendors/jquery/jquery-3.4.1.js"></Script>

      <Script src="/assets/vendors/bootstrap/bootstrap.bundle.js"></Script>

      {/* <!-- bootstrap 3 affix --> */}
      <Script src="/assets/vendors/bootstrap/bootstrap.affix.js"></Script>
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

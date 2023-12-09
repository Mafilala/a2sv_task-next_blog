import { getPosts } from "@/lib/posts"
import Card from "@/components/card"
import FormComponent from "@/components/form"
export const getStaticProps = async () => {
    const posts = await getPosts()
    return {
      props: {posts}
    }
}

const Home = ({posts}) => {
  return (
    <>
    <div className="main-container">

    <article>
      {
        posts.map((post, id) => (<Card date={post.date} title={post.title} body={post.body} uid={id}/>))
      }
    </article>
    <FormComponent />
    </div>
    <style jsx>
      {
        `
        .main-container{
          display: flex;
          justify-content: space-between;
        }
        `
      }
    </style>
    </>
  )
}

export default Home
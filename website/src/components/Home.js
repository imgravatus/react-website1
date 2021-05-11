import '../styles/Home.css'
import { Banner } from '../components/Banner'
import { useState, useEffect } from 'react'

const BannerStyle = {
   backgroundImage: "url(ilya-mashkov-_qxbJUr9RqI-unsplash.jpg)",
   backgroundSize: "cover",
   backgroundPostion: "center",
   minHeight: "50vh",
   color: "white",
}


export function Home(props) {
   const [articles, setArticles] = useState([])
   useEffect(() => {
      if(articles.length ===0) {
         props.items().then((data) => {
            setArticles(data)
            console.log(data)
         })
      }
   },[articles])

   const ArticleView = (props) => {
      return (
         <div className="article">
            <h3>{props.article.title}</h3>
            <p>{props.article.author}</p>
         </div>
      )
   }

   const ArticleList = (props) => {
      if(articles) {
        const Collection = articles.map((article) => {
           return <ArticleView article={article}/>
        })
        return Collection
      }
      else{
         return(<p>Sorry, no articles!</p>)
      }
   } 

   return (
      <main className="Home">
         <Banner text="Welcome" style={BannerStyle} />
         <h1>Home</h1>
         <ArticleList/>
      </main>
   )
}

export default Home

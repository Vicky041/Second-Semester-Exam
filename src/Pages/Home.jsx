import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



function Home() {   
  const [user, setUser] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [showViewMore, setShowViewMore] = useState("")


  const fetchRepos = () => {
    fetch(`https://api.github.com/users/Vicky041/repos?per_page=6&page=${currentPage}`)
    .then((response) => (response.json()))
    .then((data) => {
      if (data.length === 0) {
        setShowViewMore("End of Repos")
      }else {
        setUser([...user, ...data])
        setShowViewMore("View More")
      }
      
    })
  }

  useEffect(() => {
    fetchRepos()
  }, [currentPage]) 


  const viewMore = () => {
    setCurrentPage(currentPage + 1)
  }
    const userElements = user.map((userElement) => {
        return (
            <div className="repo-card" key={userElement.id}>
                <Link to={`/repodetail/${userElement.name}`}><h2 className="repo-name">{userElement.name}</h2></Link>
                <p className="language">Langauge: {userElement.language === null ? "none" : userElement.language}</p>
                <p className="date">Start date & time: {userElement.created_at}</p>
                <p className="visibility">Visibility: {userElement.visibility}</p>
            </div>
        )
    })



    return (
      <>
        <section className="repo-container">
            {userElements}
        </section>
        <p className="view-more" onClick={viewMore}>{showViewMore}</p>
      </>
    )
}

export default Home
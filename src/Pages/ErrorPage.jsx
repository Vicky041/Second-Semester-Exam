import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="error-status">{error.status}</p>
            <p className="erro-status-text"><i>{error.statusText}</i></p>
            <p>Go to <Link to="/"><b>Home page</b></Link></p>
        </div>
    )
}


export default ErrorPage
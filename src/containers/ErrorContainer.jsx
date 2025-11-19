import { Link } from "react-router";

export default function ErrorPage() {
    return (
        <>
            <h2 className="error-heading">The page you are trying to reach does not exist !</h2>
            <p className="error-text-redirect">Go back to <Link to="/"> Home page</Link></p>
        </>
    );

}
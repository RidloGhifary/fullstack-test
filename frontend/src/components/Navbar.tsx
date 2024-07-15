import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 bg-gray-50 dark:bg-gray-900 text-white p-6 space-x-4">
        <Link to="/">Home</Link>
        <Link to="/insert">Insert</Link>
    </nav>
  )
}

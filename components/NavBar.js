import Link from "next/link"
function NavBar() {
  return (
    <>
      <nav>
        <ul className="nav-links">
        <li>
        <Link href="/">Home</Link>

        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
       
        </ul>
        <style jsx>
          {
            `
            ul {
              list-style-type: none;
              padding: 0;
            }
            li {
              display: inline;
              
            }
            li:not(:first-child) {
              margin-left: .75rem;
            }
            `
          }
        </style>
      </nav>
    </>
  )
}

export default NavBar
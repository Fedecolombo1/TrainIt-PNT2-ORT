import './Page.css'
import NavBar from '../NavBar/NavBar'

const Page = ({ children }) => {
    return(
        <>
            <NavBar />
            {children}
        </>
    )
}

export default Page;
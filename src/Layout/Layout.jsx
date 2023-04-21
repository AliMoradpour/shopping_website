import NavBar from "../Components/Navigation/NavBar";

const Layout = ({children}) => {
    return ( 
        <>
        <NavBar />
        {children}
        <footer></footer>
        </>
     );
}
 
export default Layout;
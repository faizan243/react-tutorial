import Footer from "./Footer";

function Header(props) {
    console.log("Yeh COnsole Header arha hai",props);
    return (
        <div>
            <h1>{props.title}</h1>
            <h6>{props.subTitle}</h6>
        </div>
    )
}

export default Header;
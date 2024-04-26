
function Footer(props) {
    console.log("Yeh Footer sey COnsole hai ", props);
    return (
        <div>
            <h1>
              {props.title}
            </h1>
        </div>
    )
}

export default Footer;
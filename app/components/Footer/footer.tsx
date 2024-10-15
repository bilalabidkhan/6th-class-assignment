import cssStyle from "./footer.module.css";
console.log(cssStyle, "CSS");

const footer = ()=> {
    return (
        <footer className={cssStyle.yellow}>
          <h1 className="text-center mt-auto">Welcome TO Next JS Website</h1>
        </footer>
    );
};

export default footer;
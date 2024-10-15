import cssStyle from "./hero.module.css";
console.log(cssStyle, "CSS");

const hero = ()=> {
    return(
        <section className={cssStyle.red}>
            <div>
                <h1 className="text-center">HERO SECTION</h1>
                <br />
                <p className="text-center">"People through their thirst for knowledge, have created the world around us.
                    Education is the source of almost everthing. Without education, we would merely be existing inside the ball of ignorance
                    Knowledge has given us what we have, and it will continue to turn things in our favor if we use in the right way."
                </p>
            </div>
        </section>
    );
    
};

export default hero
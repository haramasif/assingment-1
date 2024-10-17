import css from "./about.module.css"

console.log(css,"CSS-Style")

const AboutPage = () => {
    return (
        <div className="free">
            <h1 className={css.free}>
            About Page
            </h1>
        </div>
    )
}
export default AboutPage;
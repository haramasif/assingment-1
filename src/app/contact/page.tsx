import css from "./contact.module.css"

console.log(css,"CSS-Style")

const ContactPage = () => {
    return (
        <div className="free">
            <h1 className={css.free}>
            Contact Page
            </h1>
        </div>
    )
}
export default ContactPage;
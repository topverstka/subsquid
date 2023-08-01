import './Content.scss'

export default function Content(props) {
    return (
        <div className="Content">
            {props.children}
        </div>
    );
}
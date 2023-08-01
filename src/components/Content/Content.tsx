import './Content.scss'

export default function Content(props: any) {
    return (
        <div className="Content">
            {props.children}
        </div>
    );
}
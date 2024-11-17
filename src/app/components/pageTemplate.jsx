export default function PageTemplate(props) {
    return (
        <div className= {`${props.classes || ''} w-screen p-[2rem] md:p-[4rem]`} id={props.id}>
            <div className="h-[100%] w-[100%]">
                {props.children}
            </div>
        </div>
    );
}

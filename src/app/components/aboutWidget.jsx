export default function AboutWidget(props){
    return(
        <div className=" rounded-md aspect-square w-full h-full align-middle  flex items-center p-5 justify-between flex-col text-center bg-[rgba(19,19,19,100)] border-2 border-yellow-500">

        <h1 className="text-6xl text-yellow-500">{props.num}</h1>
        <p className="text-sm">{props.body}</p>

        </div>
    )
}
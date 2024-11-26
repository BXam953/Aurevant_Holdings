export default function AboutWidget(props){
    return(
        <div className="relative rounded-md aspect-square w-full h-full flex flex-col items-center justify-between text-center bg-[rgba(19,19,19,100)] border-2 border-yellow-500 p-5">
        <h1 className="text-4xl text-yellow-500 flex-grow flex items-center justify-center">
          {props.num}
        </h1>
        <p className="text-sm">{props.body}</p>
      </div>
    )
}
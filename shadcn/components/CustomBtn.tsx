import { cn } from "@/lib/utils";

const CustomBtn = ({disabled, isRounded}:{
    disabled: boolean,
    isRounded: boolean
}) => {
  return (

//   <button
//   className={`text-sm ${disabled ? 'bg-gray-600' : 'bg-blue-200'} 
//   ${isRounded && 'rounded-full bg-red-900'}
//   `}
//   >Hello</button>


//   WITH SHADCN WE CAN WRITE IN BETTER READBLE WAY WIHT NO ${}
   <button
   className={cn("text-sm px-8 py-1 rounded-md", disabled ? 'bg-gray-300' : 'bg-green-300', isRounded && "bg-amber-600" )}
   >hello</button>


  )


}

export default CustomBtn
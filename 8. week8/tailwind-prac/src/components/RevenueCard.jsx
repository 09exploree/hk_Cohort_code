export const RevenueCard=({
    title,
    orderCount,
    amount
})=>{
 return(
    <div className="bg-white rounded shadow-md p-10">
        <div className="text-gray-700">{title}
            ?
        </div>
        <div className="flex justify-between">
            <div>
            ₹ {amount}
            </div>
            {orderCount? <div className="flex cursor-pointer underline font-semibold">
                <div className="text-blue-700">
                {orderCount} order(s) 
                </div>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg> 

            </div>:null}
        </div>
    </div>
 )   
}
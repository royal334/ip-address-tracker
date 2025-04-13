
type DetailsProps ={
     ipAddress: string
     city: string | undefined
     country: string | undefined
     isp: string | undefined
     timezone: string| undefined
     //onSubmit: (e: React.FormEvent) => void
}

function Details(props: DetailsProps) {
  return (
     <>
          <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center bg-white px-8 py-6 mx-6 rounded-2xl">
               <div>
                    <p className="text-dark-gray text-sm tracking-wide font-medium uppercase mt-4 md:mt-0 text-center">ip address</p>
                    <p className="text-center text-very-dark-gray font-bold text-xl">{props.ipAddress}</p>
               </div>

               <div>
                    <p className="text-dark-gray text-sm tracking-wide font-medium uppercase mt-4 md:mt-0 text-center">location</p>
                    <p className="text-center text-very-dark-gray font-bold text-xl">{`${props.city},${props.country} `}</p>
               </div>

               <div>
                    <p className="text-dark-gray text-sm tracking-wide font-medium uppercase mt-4 md:mt-0 text-center">timezone</p>
                    <p className="text-center text-very-dark-gray font-bold text-xl">UTC {props.timezone}</p>
               </div>

               <div>
                    <p className="text-dark-gray text-sm tracking-wide font-medium uppercase mt-4 md:mt-0 text-center">isp</p>
                    <p className="text-center text-very-dark-gray font-bold text-xl">{props.isp}</p>
               </div>
          </div>

     </>
  )
}

export default Details
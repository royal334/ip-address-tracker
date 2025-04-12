import Form from "./Form";

type HeaderProps ={
  setLng: (lng : number) => void
  setLat: (lat : number) => void
}

function Header(props: HeaderProps) {

  return (
    <>
      <div className="header h-full flex flex-col items-center pb-20 pt-14 ">
        <h1 className="text-3xl font-bold text-center text-white mb-8 ">
          IP Address Tracker
        </h1>
        <div className="w-full">
          <Form  setLng={props.setLng} setLat={props.setLat}  />
        </div>
      </div>
    </>
  );
}

export default Header;

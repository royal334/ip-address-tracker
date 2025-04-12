import Form from "./Form";

function Header() {
  return (
    <>
      <div className="header h-full flex flex-col items-center py-10 ">
        <h1 className="text-3xl font-bold text-center text-white ">
          IP Address Tracker
        </h1>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </>
  );
}

export default Header;

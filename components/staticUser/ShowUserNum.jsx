const ShowUserNum = ({ amount, name, css }) => {
  return (
    <>
      <div
        className={`justify-center text-center grid grid-rows-2 py-4 ${css}`}
      >
        <div className="font-bold text-lg">{amount}</div>
        <div className="text-md">{name}</div>
      </div>
    </>
  );
};

export default ShowUserNum;

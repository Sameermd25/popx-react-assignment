const MobileContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-[375px] h-[812px] bg-[#f7f8f9] rounded-3xl shadow-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;
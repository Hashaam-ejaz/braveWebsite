const Footer = () => {
  return (
    <footer className="flex justify-center bg-[#fbf6f3]">
      <div className="container border-t border-[#FF9999] rounded-b-lg px-4 md:px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="font-bold text-md sm:text-xl md:text-3xl font-garamond ">
          THE BRAVE AGENCY
        </div>
        <div className="mt-4 md:mt-0 text-muted-foreground space-y-1 font-garamond text-sm w-56 text-center md:text-start">
          <div className="text-[12px] sm:text-[16px] md:text-[20px]">USA</div>
          <div className="text-[12px] sm:text-[18px] md:text-[20px] pt-1">
            info@thebraveagency.co
          </div>
          <div className="text-[12px] sm:text-[16px] md:text-[20px] pt-1">
            +1 917 203 4439
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

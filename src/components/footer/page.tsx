const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="container border-t border-black rounded-b-lg px-4 md:px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="font-bold text-[28.42px] lg:text-[44.15px] font-garamond lg:mr-20">
          THE BRAVE AGENCY
        </div>
        <div className="lg:text-right mt-4 md:mt-0 text-muted-foreground space-y-1 font-garamond text-sm w-full max-w-xs md:max-w-sm lg:max-w-md text-center md:text-start text-[24px] lg:text-[37.15px] leading-8 overflow-hidden">
          <div>USA</div>
          <div className="truncate lg:pb-2">info@thebraveagency.co</div>
          <div>+1 917 203 4439</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

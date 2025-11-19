const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="flex h-[60px] items-center justify-center">
        <p className="text-lg font-light tracking-wide">
          Copyright © {year} Loay Zeid
        </p>
      </div>
    </footer>
  );
};

export default Footer;

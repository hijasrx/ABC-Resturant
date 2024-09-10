
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-alt fw-medium" style={{ backgroundColor: '#494947', color: 'black'}}>
      <span className="text-dark-emphasis">
        {currentYear} © ABC - Theme by ICBT
      </span>
    </footer>
  );
};

export default Footer;
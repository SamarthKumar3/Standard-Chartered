const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-4 text-center">
      <div className="container mx-auto overflow-hidden">
        <p className="text-lg font-semibold mb-2">Our Team</p>
        <div className="grid grid-cols-3 gap-4">
          <p>Nitesh</p>
          <p>Ansh Tandon</p>
          <p>Samarth Kumar</p>
          <p>Jayatri Banerjee</p>
          <p>Myth</p>
          <p>Stuti Juneja</p>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} VerifyFIN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

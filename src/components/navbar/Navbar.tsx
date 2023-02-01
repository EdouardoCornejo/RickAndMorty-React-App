import { FC } from "react";

interface NavbarProps {
  brand: string;
}

export const Navbar: FC<NavbarProps> = ({ brand }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className=" navbar-brand text-uppercase" href="/">
            {brand}
          </a>
        </div>
      </nav>
    </>
  );
};

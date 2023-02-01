import { FC } from "react";

interface PaginationProps {
  prev: string | undefined;
  onPrevious: () => void;
  next: string | undefined;
  onNext: () => void;
}

export const Pagination: FC<PaginationProps> = ({
  prev,
  onPrevious,
  next,
  onNext,
}) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <div className="container">
      <nav className="my-5">
        <ul className="pagination justify-content-center">
          {prev ? (
            <li className="page-item">
              <button className="page-link" onClick={handlePrevious}>
                Previous
              </button>
            </li>
          ) : null}
          {next ? (
            <li className="page-item">
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

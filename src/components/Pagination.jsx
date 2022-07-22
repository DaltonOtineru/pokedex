import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/outline';
import { useRecoilState } from 'recoil';
import { offsetState } from '../atoms/offsetAtom';
import PageButton from './PageButton';

const Pagination = () => {
  const [offset, setOffset] = useRecoilState(offsetState);

  // update offset to show the next 20 pokemon on the page
  const nextPage = () => {
    setOffset(offset + 20);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  // if offset is not 0, subtract 20 to show the previous 20 pokemon on the page.
  const prevPage = () => {
    if (offset === 0) {
      return;
    }
    setOffset(offset - 20);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="gap-12 flex justify-center items-center pb-8 max-w-[95%] w-[1332px] mx-auto">
      <PageButton
        Icon={ArrowLeftIcon}
        event={() => prevPage()}
        text="Back"
        back
      />
      <PageButton
        Icon={ArrowRightIcon}
        event={() => nextPage()}
        text="Next"
        next
      />
    </div>
  );
};

export default Pagination;

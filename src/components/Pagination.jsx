import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRecoilState } from 'recoil';
import { offsetState } from '../atoms/offsetAtom';
import PageButton from './PageButton';

const Pagination = () => {
  const [offset, setOffset] = useRecoilState(offsetState);

  const nextPage = () => {
    setOffset(offset + 20);
  };
  const prevPage = () => {
    if (offset === 0) {
      return;
    }
    setOffset(offset - 20);
  };

  return (
    <div className="gap-12 flex justify-center items-center pb-8 max-w-[95%] w-[1332px] mx-auto">
      <PageButton Icon={ChevronLeftIcon} event={() => prevPage()} />
      <PageButton Icon={ChevronRightIcon} event={() => nextPage()} />
    </div>
  );
};

export default Pagination;

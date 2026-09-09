import '@/components/MainHeader.scss';

const MainHeader = ({version = 'sandbox'}) => {
  return(
    <header className='main-header'>
      <div className='main-header__logo'>SP<span>{ version }</span></div>
    </header>
  );
}

export default MainHeader;
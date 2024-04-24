// ** Import Recoil
import { useRecoilState } from 'recoil';
import { showStateAtom } from '../../recoil/atoms';
// ** Import Custom Compnents
import MyButton from '../../components/Buttons'
import MyImage from '../../components/Images'
// ** Import Images
import appLogo from '/logo.svg'

const HomePage = () => {
  const [show, setShow] = useRecoilState(showStateAtom);
  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <div style={{ marginTop: '70px' }}>
      <MyImage file={appLogo} size={'300px'} />
      <div style={{ marginTop: '50px' }}>
        <MyButton title={'OPEN MODEL'} onClick={toggleShow} width={'120%'} isFilled />
      </div>
    </div>
  )
}

export default HomePage

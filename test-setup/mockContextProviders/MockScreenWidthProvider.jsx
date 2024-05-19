import { ScreenWidthContext } from '../../src/context/ScreenWidthProvider';
import PropTypes from 'prop-types';

const MockScreenWidthContextProvider = ({
  children,
  screenWidth = 1500,
  isBurgerMenuVisible = false,
  burgerMenuStage = '0',
}) => {
  return (
    <ScreenWidthContext.Provider
      value={{ screenWidth, isBurgerMenuVisible, burgerMenuStage }}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

MockScreenWidthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  screenWidth: PropTypes.number,
  isBurgerMenuVisible: PropTypes.bool,
  burgerMenuStage: PropTypes.string,
};

export default MockScreenWidthContextProvider;

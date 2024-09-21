import { ThemeContext } from '../../src/context/ThemeContext';
import PropTypes from 'prop-types';

const MockThemeContextProvider = ({
  children,
  theme = 'light', onThemeChange = () => {}, isIconRotating = false
}) => {
  return (
    <ThemeContext.Provider
      value={{
        theme, onThemeChange, isIconRotating
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

MockThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  onThemeChange: PropTypes.func,
  isIconRotating: PropTypes.bool
};

export default MockThemeContextProvider;

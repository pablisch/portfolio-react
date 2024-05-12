import { useTheme } from '../context/ThemeContext';
import '../App.css';
import PropTypes from 'prop-types';

const AppWrapper = ({children, isAvatarHovered}) => {
  const { theme } = useTheme();
  
  return (
    <div className={`app app-${theme} ${
      isAvatarHovered ? 'avatar-hovered-app' : ''
    }`}>
      {children}
    </div>
  )
}

AppWrapper.propTypes = {
  isAvatarHovered: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default AppWrapper

import PropTypes from 'prop-types';

const PageContainer = ({children}) => {
  return (
    <div className="flex border w-[1240px] m-auto">
      {children}
    </div>
  )
}
PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer

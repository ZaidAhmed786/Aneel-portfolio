import PropTypes from 'prop-types';
const Brand = ({ brandLogo }) => {
  return (
    <div className="brand-box align-items-center">
      <img src={brandLogo} title="" alt="" className='w-75' />
    </div>
  )
}
Brand.propTypes = {
  brandLogo: PropTypes.object
}

export default Brand;

// components/ServicesWidget.js
import PropTypes from 'prop-types';

export default function ServicesWidget({ title, body, icon: Icon }) {
  return (
    <div className="aspect-[3/2] w-full h-full bg-[rgba(19,19,19,100)] text-white p-6 rounded-lg font-sans">
      <div className="w-10 h-10 transparent border-yellow-500 border-2 rounded-full mb-4 flex items-center justify-center">
        {Icon && <Icon className="text-yellow-500" size={24} />} {/* Render icon here */}
      </div>
      <h2 className="text-yellow-500 text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300 font-thin leading-relaxed text-lg">
        {body}
      </p>
    </div>
  );
}

ServicesWidget.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  icon: PropTypes.elementType, // Expecting an icon component
};

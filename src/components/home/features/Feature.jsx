import PropTypes from "prop-types";

function Feature({ feature }) {
    return (
        <div className="border border-black/50 border-dashed p-6">
            <h2 className="text-5xl font-bold pb-6 text-primaryColor">
                0{feature.id}
            </h2>
            <h4 className="text-2xl font-semibold">{feature.name}</h4>
            <p className="pt-2  text-black/70">{feature.details}</p>
        </div>
    );
}

export default Feature;
Feature.propTypes = {
    feature: PropTypes.object,
};

import PropTypes from 'prop-types';

function Tasks({ index }) {
  return (
    <>
      <li className="taskItem">
        <input type="checkbox" />
        task:
        {' '}
        { index }
      </li>
    </>
  );
}

export default Tasks;

Tasks.propTypes = {
  index: PropTypes.number.isRequired,
};

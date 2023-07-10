import Tasks from './TodoItem';

function TaskMenu() {
  const bucle = () => {
    let i = 0;
    const arr = [];
    while (i < 5) {
      arr.push(<Tasks index={i} />);
      i += 1;
    }
    return arr;
  };

  return (
    <>
      <ul className="taskList">
        {bucle()}
      </ul>
    </>
  );
}

export default TaskMenu;

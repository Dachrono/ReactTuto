import Input from './inputToDo';
import TaskMenu from './taskMenu';

function TaskContainer() {
  return (
    <>
      <div className="task-container">
        <Input />
        <TaskMenu />
      </div>
    </>
  );
}

export default TaskContainer;

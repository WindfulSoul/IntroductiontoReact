import './App.css';
import React from 'react';
import GoalList from './components/GoalList';


function App() {

  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course!' },
    {id: 'cg2', text: 'Finish the Damn Course!' },
    {id: 'cg3', text: 'Finish the Damn Course!' },
  ];


  return (
    <div>
    <h2 className="course-goals">This is the goal</h2>
    <GoalList goals={courseGoals}></GoalList>
    </div>
  );
}

export default App;

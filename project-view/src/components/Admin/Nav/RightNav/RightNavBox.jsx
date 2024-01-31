import React from 'react';
import RightNavTodoList from './RightNavTodoList';
import './RightNavBox.css';
import todayTodo from '../../../../view_img/Admin/common/todayTodo.png';

const title = '오늘의 할일';
const contents = [
  { todo: '답변대기중', link: 'service/inquiry', todoNo: 4 },
  { todo: '신고건 수', link: 'service/report', todoNo: 4 },
];

export default function RightNavBox() {
  return (
    <div className="rightNavBox">
      <div className="todayTodoBox">
        <img className="todayTodo" src={todayTodo} alt="" />
      </div>
      <div className="rightNavTitleBox">
        <p>{title}</p>
      </div>
      <ul>
        {contents.map((content) => (
          <RightNavTodoList
            key={content.todo}
            text={content.todo}
            link={content.link}
            todoNo={content.todoNo}
          />
        ))}
      </ul>
    </div>
  );
}

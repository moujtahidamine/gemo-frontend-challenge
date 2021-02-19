import React, {useState} from "react";
import { AiOutlineIssuesClose, AiFillStar } from 'react-icons/ai';
import {substractDate} from "../../helpers";

function Repository(props) {
  const [item] = useState(props.item);

  return (
    item && <div className="container-fluid">
      <div className="card p-2 my-3">
        <div className="row no-gutters">
          <div className="col-auto">
            <img
              src={item.owner.avatar_url}
              className="img-fluid repo-avatar"
              alt="Repository_Avatar"
            />
          </div>
          <div className="col">
            <div className="container d-flex flex-column justify-content-center repo-right">
              <h2 className="card-title mb-auto">{item.name}</h2>
              <p className="card-text">{item.description}</p>
              <div className="mt-auto">
                <span className="border border-warning p-1 m-1"> <AiFillStar className="text-warning" /> {"Stars"} : {item.stargazers_count}</span>
                <span className="border border-danger p-1 m-1"> <AiOutlineIssuesClose className="text-danger" /> {"Issues"} : {item.open_issues_count}</span>
                <span> {"Submitted"} {substractDate(item.pushed_at)} days ago by {item.owner.login} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repository;

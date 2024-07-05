import React, { useState } from "react";

function Todo() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    // setlistData([...listData,activity])
    // console.log(listData);
    setlistData((listData) => {
      const updatedlist = [...listData, activity];
      console.log(updatedlist);
      setActivity("");
      return updatedlist;
    });
  }
  function removeActivity(i) {
    const updatedlistData = listData.filter((elem,id) => {
      return  i!=id;
    })
    setlistData(updatedlistData);

  }
    function removeAll() {
      setlistData([])
    }
  return (
    <>
      <div className="container">
        <div className="header">ToDO List</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="list-heading">here is your list</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listdata">{data}</div>
                  <div className="btn-position">
                    <button onClick={ () => removeActivity (i)}>remove</button >
                  </div>
                </p>
              </>
            );
          })}
          {listData.length>=1 &&
          <button onClick={removeAll}>remove all</button>} 
      </div>
    </>
  );
}

export default Todo;

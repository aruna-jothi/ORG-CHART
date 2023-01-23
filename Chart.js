import { Fragment } from "react";
import data from "./data.json";
import {
  DragDropContext,
  Draggable,
  Droppable,
  } from 'react-beautiful-dnd'

const Card = (props)=>{
    return(
      <DragDropContext>
      <Droppable droppableId="char">
        {(provided)=>(
        <ul className="char" {...provided.droppableProps} ref={provided.innerRef}>
        {props.data.map((item,index) => (
          <Fragment key={item.name}>
            <Draggable key={item} draggableId={item} index={index}>
              {(provided)=>(
                    <li{...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                      <div className="card" draggable>
                            <div className="image">
                                <img src={item.img} alt="profile"/>
                                <strong>{item.name}</strong><br/>
                                        {item.designation}
                            </div>
                            <div className="card-body">
                            
                            </div>
                        
                      </div>
                      {item.children?.length && <Card data={item.children} />}
                    </li>
              )}
            </Draggable>
          </Fragment>
        
        ))}
      </ul>
      )}
      </Droppable>
      </DragDropContext>
    );
  };


const Chart = () => {
    return (
      <div className="org-tree">
        <Card data={data} />
      </div>
    );
  };
  
export default Chart;
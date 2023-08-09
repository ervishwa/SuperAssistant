import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap-icons/dist/icons/bootstrap-icons.css";

export const CategorizeQuestion = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 1; // Change this value to control the number of questions per page

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://super-lvuk.onrender.com/api/categories"
      );
      const dataa = response.data;
      setData(dataa);
      console.log("mcq", dataa);
    } catch (error) {
      console.error("Error fetching MCQ data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
  
    const sourceQuestionIndex = result.source.droppableId;
    const destinationQuestionIndex = result.destination.droppableId;
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
  
    if (sourceQuestionIndex === destinationQuestionIndex) {
      const updatedData = data.map((el) => {
        if (el.id === sourceQuestionIndex) {
          const updatedItems = Array.from(el.item);
          const [movedItem] = updatedItems.splice(sourceIndex, 1);
          updatedItems.splice(destinationIndex, 0, movedItem);
          return {
            ...el,
            item: updatedItems,
          };
        }
        return el;
      });
  
      setData(updatedData);
    }
  };
  

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6}>
          <h2 className="text-center mb-4">Categorize Form</h2>
          <DragDropContext onDragEnd={onDragEnd}>
            {data.map((el) => (
              <Droppable key={el.id} droppableId={el.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="mb-4"
                  >
                    {/* Your droppable content */}
                    <div className="border p-4">
                      <h4>Question: {el.question}</h4>
                      {/* Your draggable items */}
                      {el.item.map((itemEl, index) => (
                        <Draggable key={itemEl} draggableId={itemEl} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="border p-2 mb-2"
                            >
                              {itemEl}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </DragDropContext>
          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              disabled={currentPage === 1}
              onClick={handlePrevPage}
            >
              <ArrowLeft size={20} />
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={currentPage * questionsPerPage >= data.length}
              onClick={handleNextPage}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};






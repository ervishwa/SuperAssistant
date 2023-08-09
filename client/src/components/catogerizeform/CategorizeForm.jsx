import React, { useState, useEffect } from "react";
import "./categorizeform.css";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";

export const CategorizeForm = () => {
  const [question1, setQuestion] = useState("");
  const [categories, setCategories] = useState([""]);
  const [answers, setAnswers] = useState([""]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index + 1, 0, "");
    setCategories(updatedCategories);
  };

  const handleAddAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index + 1, 0, "");
    setAnswers(updatedAnswers);
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleDeleteAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);

    if (value.endsWith("\n")) {
      handleAddCategory(index);
    }
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);

    if (value.endsWith("\n")) {
      handleAddAnswer(index);
    }
  };

  useEffect(() => {
    const newSelectOptions = categories.filter(Boolean);
    setSelectOptions(newSelectOptions);
  }, [categories]);

  const handleSubmit = async () => {
    // Rest of the handleSubmit code remains unchanged
  };

  return (
    <div>
      <div
        className="ml-3 categorizeform"
        
      >
        <div>
          <h4 className="mb-3 font-weight-bold">Categorize type Question</h4>
          <FormControl
            className="w-75 mb-3"
            placeholder="Enter name"
            value={question1}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        {/* Categories section */}
        <br />
        <div>
          <h5 className="font-weight-bold mb-2">Categories</h5>
          {categories.map((category, index) => (
            <div key={index} className="d-flex align-items-center">
              <FormControl
                className="w-50 mr-2 mb-2"
                placeholder="cat1"
                value={category}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddCategory(index);
                  }
                }}
              />
              {index > 0 && (
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => handleDeleteCategory(index)}
                >
                  <RxCross2 size={24} fontWeight="500" />
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Answer section */}
        <br />
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="font-weight-bold mb-2">Item</h5>
            <h5 className="font-weight-bold mb-2">Belongs To</h5>
          </div>
          {answers.map((answer, index) => (
            <div key={index} className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FormControl
                  className="w-50 mr-2 mb-2"
                  placeholder="ans1"
                  value={answer}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddAnswer(index);
                    }
                  }}
                />
                {index > 0 && (
                  <Button
                    variant="link"
                    className="p-0"
                    onClick={() => handleDeleteAnswer(index)}
                  >
                    <RxCross2 size={24} fontWeight="500" />
                  </Button>
                )}
              </div>
              <div>
                <Form.Select className="" style={{width:"109%"}}>
                  <option>select cat</option>
                  {selectOptions.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </Form.Select>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto text-center w-25">
          <Button
            
             style={{backgroundColor:"green" ,border:"none"}}
            className="mt-3"
            onClick={handleSubmit}
          >
            Add Question
          </Button>
        </div>
      </div>
    </div>
  );
};



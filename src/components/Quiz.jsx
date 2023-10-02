import { useDispatch, useSelector } from "react-redux";
import { submitAnswer, resetSurvey } from '../surveySlice';

import { useForm, Controller } from 'react-hook-form';

const questions = [
  {
    id: 'q1',
    text: 'What is your name?',
    type: 'text',
  },
  {
    id: 'q2',
    text: 'Select your favorite programming language:',
    type: 'radio',
    options: ['JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    id: 'q3',
    text: 'Which frontend frameworks do you use?',
    type: 'checkbox',
    options: ['React', 'Vue', 'Angular'],
  },
  {
    id: 'q4',
    text: 'Tell us about your hobbies:',
    type: 'textarea',
  },
];

const Quiz = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.survey.answers);
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    Object.entries(data).forEach(([questionId, answer]) => {
      dispatch(submitAnswer({ questionId, answer }));
    });
  };

  const handleReset = () => {
    reset();
    dispatch(resetSurvey());
  };

    return (
    
    
      <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Survey</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {questions.map((question) => (
          <div key={question.id} className="mb-4">
            <p className="text-lg font-semibold mb-2">{question.text}</p>
            {question.type === 'text' && (
              <Controller
                name={question.id}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="border p-2 w-full"
                  />
                )}
              />
            )}
            {question.type === 'radio' && (
              <div>
                {question.options.map((option) => (
                  <label key={option} className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      value={option}
                      {...control}
                      className="form-radio text-blue-500"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            )}
            {question.type === 'checkbox' && (
              <div>
                {question.options.map((option) => (
                  <label key={option} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      value={option}
                      {...control}
                      className="form-checkbox text-blue-500"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>
            )}
            {question.type === 'textarea' && (
              <Controller
                name={question.id}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="border p-2 w-full"
                    rows="4"
                  />
                )}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Answers
        </button>
      </form>
      <button
        onClick={handleReset}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Reset Survey
      </button>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Answers:</h3>
        <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(answers, null, 2)}</pre>
      </div>
    </div>
  );

      
};

export default Quiz;
